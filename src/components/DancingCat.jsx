import catSvg from '../assets/images/cat.svg';
import './DancingCat.css';

export default function DancingCat({ isPlaying, danceMode, speedMultiplier, onToggle }) {
  const animClass = isPlaying ? `dance-${danceMode}` : '';
  const style = isPlaying ? { '--speed': `${speedMultiplier}s` } : {};

  const handleKey = (e) => {
    if ((e.key === ' ' || e.key === 'Enter') && onToggle) {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className="cat-stage">
      {isPlaying && (
        <div className="particles" aria-hidden="true">
          {['♪','♫','♩','♬','🎵','🎶'].map((note, i) => (
            <span key={i} className={`particle p${i}`}>{note}</span>
          ))}
        </div>
      )}

      <div
        className={`cat-wrapper ${animClass}`}
        style={style}
        onClick={onToggle}
        onKeyDown={handleKey}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? '고양이 댄스 정지' : '고양이 댄스 시작'}
        aria-pressed={isPlaying}
      >
        <img
          src={catSvg}
          alt="춤추는 고양이"
          className="cat-image"
          draggable="false"
        />
      </div>

      <div className={`cat-shadow ${isPlaying ? 'shadow-anim' : ''}`} aria-hidden="true" />
    </div>
  );
}
