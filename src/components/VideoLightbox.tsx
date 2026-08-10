import React, { useState, useRef, useEffect } from 'react';
import { VideoItem } from '../types';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

interface VideoLightboxProps {
  video: VideoItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoLightbox: React.FC<VideoLightboxProps> = ({ video, isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeStr, setCurrentTimeStr] = useState('00:00');
  const [durationStr, setDurationStr] = useState('00:00');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Autoplay blocked:', err);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, [isOpen, video]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !video) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setProgress((cur / dur) * 100);

    const format = (seconds: number) => {
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60);
      return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    };

    setCurrentTimeStr(format(cur));
    setDurationStr(format(dur));
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTime = (parseFloat(e.target.value) / 100) * (videoRef.current.duration || 0);
    videoRef.current.currentTime = seekTime;
    setProgress(parseFloat(e.target.value));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => console.log(err));
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1C1C1C]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 text-white animate-fade-in select-none">
      
      {/* TOP BAR */}
      <div className="flex items-center justify-between z-10">
        <div>
          <span className="text-xs tracking-widest text-[#C8B9A6] font-medium uppercase block">
            {video.category}
          </span>
          <h3 className="font-serif text-lg font-medium text-white">{video.title}</h3>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-white/80 hover:text-[#C8B9A6] hover:bg-white/10 rounded transition-colors"
          title="Close (Esc)"
        >
          <X className="w-7 h-7" />
        </button>
      </div>

      {/* VIDEO CONTAINER */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden rounded">
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.thumbnailUrl}
          onTimeUpdate={handleTimeUpdate}
          onClick={togglePlay}
          playsInline
          className="max-h-[75vh] max-w-full object-contain rounded shadow-2xl cursor-pointer"
        />

        {/* OVERLAY PLAY BUTTON IF PAUSED */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute p-6 bg-[#C8B9A6] text-[#1C1C1C] rounded-full shadow-2xl hover:scale-110 transition-transform cursor-pointer"
            aria-label="Play video"
          >
            <Play className="w-10 h-10 fill-current ml-1" />
          </button>
        )}
      </div>

      {/* BOTTOM CONTROLS PANEL */}
      <div className="bg-[#111111]/80 backdrop-blur-md p-4 border border-white/10 space-y-3 max-w-4xl mx-auto w-full rounded-none">
        
        {/* PROGRESS BAR */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-white/70 w-12 text-right">{currentTimeStr}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="flex-1 accent-[#C8B9A6] h-1.5 bg-white/20 rounded cursor-pointer"
          />
          <span className="text-xs font-mono text-white/70 w-12">{durationStr || video.duration}</span>
        </div>

        {/* BUTTON CONTROLS */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="p-2 text-white hover:text-[#C8B9A6] transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
            </button>

            <button
              onClick={toggleMute}
              className="p-2 text-white hover:text-[#C8B9A6] transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>

          <p className="text-xs text-[#707070] hidden sm:block italic font-serif">
            Viraj Film Studio • Cinema Master Grade
          </p>

          <button
            onClick={toggleFullscreen}
            className="p-2 text-white hover:text-[#C8B9A6] transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>
        </div>

      </div>

    </div>
  );
};
