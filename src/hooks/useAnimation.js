import { useState, useCallback } from 'react';

const DANCE_MODES = [
  { id: 'bounce', label: '바운스', emoji: '🐱' },
  { id: 'spin',   label: '스핀',   emoji: '💫' },
  { id: 'wave',   label: '웨이브', emoji: '🌊' },
  { id: 'disco',  label: '디스코', emoji: '🕺' },
];

const SPEEDS = [
  { id: 'slow',   label: '느리게', multiplier: 2 },
  { id: 'normal', label: '보통',   multiplier: 1 },
  { id: 'fast',   label: '빠르게', multiplier: 0.5 },
];

export function useAnimation() {
  const [isPlaying, setIsPlaying]   = useState(true);
  const [danceMode, setDanceMode]   = useState('bounce');
  const [speed, setSpeed]           = useState('normal');

  const toggle  = useCallback(() => setIsPlaying(p => !p), []);
  const nextMode = useCallback(() => {
    setDanceMode(current => {
      const idx = DANCE_MODES.findIndex(m => m.id === current);
      return DANCE_MODES[(idx + 1) % DANCE_MODES.length].id;
    });
  }, []);

  const currentSpeed = SPEEDS.find(s => s.id === speed) ?? SPEEDS[1];

  return {
    isPlaying, toggle,
    danceMode, setDanceMode,
    speed, setSpeed,
    currentSpeed,
    DANCE_MODES, SPEEDS,
    nextMode,
  };
}
