import './styles/global.css';
import './App.css';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

export default function App() {
  const {
    isPlaying, toggle,
    danceMode, setDanceMode,
    speed, setSpeed,
    currentSpeed,
    DANCE_MODES, SPEEDS,
  } = useAnimation();

  return (
    <div className="app">
      <div className="bg-orb orb1" aria-hidden="true" />
      <div className="bg-orb orb2" aria-hidden="true" />
      <div className="bg-orb orb3" aria-hidden="true" />

      <header className="app-header">
        <h1 className="title">
          <span className="title-icon">🐱</span>
          Dancing Cat
          <span className="title-icon">🎵</span>
        </h1>
        <p className="subtitle">고양이와 함께 춤을!</p>
      </header>

      <main className="app-main">
        <DancingCat
          isPlaying={isPlaying}
          danceMode={danceMode}
          speedMultiplier={currentSpeed.multiplier}
          onToggle={toggle}
        />

        <AnimationControls
          isPlaying={isPlaying}
          onToggle={toggle}
          danceMode={danceMode}
          onDanceModeChange={setDanceMode}
          DANCE_MODES={DANCE_MODES}
          speed={speed}
          onSpeedChange={setSpeed}
          SPEEDS={SPEEDS}
        />
      </main>

      <footer className="app-footer">
        <p>버튼으로 댄스를 조작해보세요 ✨</p>
      </footer>
    </div>
  );
}
