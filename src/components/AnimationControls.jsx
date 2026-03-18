import './AnimationControls.css';

export default function AnimationControls({
  isPlaying, onToggle,
  danceMode, onDanceModeChange, DANCE_MODES,
  speed, onSpeedChange, SPEEDS,
}) {
  return (
    <div className="controls" role="group" aria-label="댄스 컨트롤">

      {/* 재생/정지 버튼 */}
      <button
        className={`btn-play ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-label={isPlaying ? '정지' : '재생'}
      >
        <span className="btn-icon">{isPlaying ? '⏸' : '▶'}</span>
        <span className="btn-label">{isPlaying ? '정지' : '재생'}</span>
      </button>

      {/* 댄스 모드 선택 */}
      <div className="control-group">
        <p className="control-title">댄스 모드</p>
        <div className="mode-buttons">
          {DANCE_MODES.map(mode => (
            <button
              key={mode.id}
              className={`btn-mode ${danceMode === mode.id ? 'active' : ''}`}
              onClick={() => onDanceModeChange(mode.id)}
              aria-pressed={danceMode === mode.id}
            >
              <span>{mode.emoji}</span>
              <span>{mode.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 속도 선택 */}
      <div className="control-group">
        <p className="control-title">속도</p>
        <div className="speed-buttons">
          {SPEEDS.map(s => (
            <button
              key={s.id}
              className={`btn-speed ${speed === s.id ? 'active' : ''}`}
              onClick={() => onSpeedChange(s.id)}
              aria-pressed={speed === s.id}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
