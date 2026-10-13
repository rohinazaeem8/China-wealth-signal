import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Square, Headphones, Sparkles } from 'lucide-react';

interface AudioPreviewProps {
  onCtaClick: () => void;
}

export const AudioPreview: React.FC<AudioPreviewProps> = ({ onCtaClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillator1Ref = useRef<OscillatorNode | null>(null);
  const oscillator2Ref = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const DURATION_SECONDS = 20;

  const stopAudio = () => {
    try {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, audioCtxRef.current.currentTime);
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.3);
      }
      setTimeout(() => {
        if (oscillator1Ref.current) {
          try { oscillator1Ref.current.stop(); } catch {}
          oscillator1Ref.current.disconnect();
          oscillator1Ref.current = null;
        }
        if (oscillator2Ref.current) {
          try { oscillator2Ref.current.stop(); } catch {}
          oscillator2Ref.current.disconnect();
          oscillator2Ref.current = null;
        }
      }, 350);
    } catch {}

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(false);
    setProgress(0);
  };

  const startAudio = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(isMuted ? 0 : 0.15, ctx.currentTime + 0.5);

      // Harmonious grounding tones: 432 Hz root and 528 Hz harmonic warmth
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(432, ctx.currentTime);

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(438, ctx.currentTime); // gentle 6Hz theta binaural frequency

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start();
      osc2.start();

      oscillator1Ref.current = osc1;
      oscillator2Ref.current = osc2;
      gainNodeRef.current = gainNode;

      setIsPlaying(true);
      setProgress(0);

      const startTime = Date.now();
      timerRef.current = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const pct = Math.min((elapsed / DURATION_SECONDS) * 100, 100);
        setProgress(pct);

        if (elapsed >= DURATION_SECONDS) {
          stopAudio();
        }
      }, 100);
    } catch (e) {
      console.warn('AudioContext failed to start', e);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  const toggleMute = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      if (!isMuted) {
        gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, audioCtxRef.current.currentTime);
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.1);
        setIsMuted(true);
      } else {
        gainNodeRef.current.gain.setValueAtTime(0.0001, audioCtxRef.current.currentTime);
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.15, audioCtxRef.current.currentTime + 0.1);
        setIsMuted(false);
      }
    } else {
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let phase = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      // Draw subtle background grid lines
      ctx.strokeStyle = 'rgba(217, 119, 6, 0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      const numBars = 48;
      const barWidth = width / numBars - 2;

      for (let i = 0; i < numBars; i++) {
        const x = i * (barWidth + 2);
        const wave = isPlaying
          ? Math.sin(i * 0.2 + phase) * 0.5 + Math.cos(i * 0.1 - phase * 0.8) * 0.5
          : Math.sin(i * 0.15) * 0.15;
        const amplitude = isPlaying ? Math.abs(wave) * (height * 0.42) + 6 : 4;

        // Gradient from warm gold to deep amber
        const grad = ctx.createLinearGradient(0, centerY - amplitude, 0, centerY + amplitude);
        grad.addColorStop(0, 'rgba(251, 191, 36, 0.9)');
        grad.addColorStop(0.5, 'rgba(217, 119, 6, 0.6)');
        grad.addColorStop(1, 'rgba(180, 83, 9, 0.9)');

        ctx.fillStyle = grad;
        ctx.fillRect(x, centerY - amplitude / 2, barWidth, amplitude);
      }

      phase += isPlaying ? 0.08 : 0.01;
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      stopAudio();
    };
  }, [isPlaying]);

  return (
    <div className="w-full bg-neutral-900/80 border border-neutral-800 rounded-2xl p-5 md:p-6 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Audio Preview</span>
              <span className="text-neutral-500">·</span>
              <span className="text-xs text-neutral-400">20-Second Sample Frequency</span>
            </div>
            <h4 className="text-sm font-semibold text-neutral-200">
              The 432 Hz Morning Resonance Sample
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleMute}
            className="p-2 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 rounded-lg transition-colors"
            title={isMuted ? 'Unmute' : 'Mute'}
            aria-label={isMuted ? 'Unmute preview' : 'Mute preview'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={togglePlay}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
          >
            {isPlaying ? (
              <>
                <Square className="w-3.5 h-3.5 fill-current" />
                <span>Pause ({Math.ceil(DURATION_SECONDS - (progress / 100) * DURATION_SECONDS)}s)</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Listen to 20s Sample</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Visualizer Canvas */}
      <div className="relative pt-4">
        <canvas
          ref={canvasRef}
          width={480}
          height={70}
          className="w-full h-16 rounded-lg bg-neutral-950/60 border border-neutral-800/60"
        />

        {/* Progress indicator */}
        <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden mt-3">
          <div
            className="bg-gradient-to-r from-amber-500 to-amber-300 h-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs text-neutral-400 mt-2.5">
          <span className="flex items-center gap-1.5 text-neutral-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Designed for headphones at moderate volume
          </span>
          <button
            type="button"
            onClick={onCtaClick}
            className="text-amber-400 hover:text-amber-300 hover:underline font-medium cursor-pointer"
          >
            Get full 5-minute version in presentation →
          </button>
        </div>
      </div>
    </div>
  );
};
