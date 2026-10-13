import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Volume2,
  VolumeX,
  Sparkles,
  ChevronRight,
  RefreshCw,
  Flame,
  Check,
  Gift,
  Camera,
  Star
} from 'lucide-react';
import SparkleCursor from './SparkleCursor';
import DoodleUniverse from './DoodleUniverse';
import {
  playPop,
  playChime,
  playBoop,
  playBreeze,
  playSlash,
  resumeAudioContext,
  musicBox
} from './audio';

// 5 Iconic Prabhas Questions (Snappy, fast, and fun!)
const QUIZ_QUESTIONS = [
  {
    q: 'Which movie marked Prabhas’ debut as a lead actor?',
    options: ['Eeswar', 'Raghavendra', 'Varsham', 'Chatrapathi'],
    answer: 'Eeswar',
    fact: 'Eeswar (2002) was his very first film as a lead actor!'
  },
  {
    q: 'In the epic Baahubali, what are the names of his two iconic roles?',
    options: ['Deva & Varadha', 'Amarendra & Mahendra', 'Bhairava & Karna', 'Rudra & Shiva'],
    answer: 'Amarendra & Mahendra',
    fact: 'Father and son: Amarendra Baahubali & Mahendra Baahubali!'
  },
  {
    q: 'In Kalki 2898 AD, what is the name of his bounty hunter character?',
    options: ['Bhairava', 'Ashwatthama', 'Karna', 'Deva'],
    answer: 'Bhairava',
    fact: 'Bhairava alongside BU-JZ 1 in the dystopian future!'
  },
  {
    q: 'In Salaar: Ceasefire, who is Deva’s closest childhood friend?',
    options: ['Varadha', 'Rudra', 'Vikram', 'Ranga'],
    answer: 'Varadha',
    fact: 'Deva and Varadha’s bond sits at the heart of Salaar.'
  },
  {
    q: 'Who directed the 2013 blockbuster "Mirchi"?',
    options: ['Koratala Siva', 'Sujeeth', 'A. Karunakaran', 'Meher Ramesh'],
    answer: 'Koratala Siva',
    fact: 'Mirchi marked Koratala Siva’s sensational directorial debut!'
  }
];

// Birthday powers inspired by Advyeta's favorite anime worlds
const BIRTHDAY_POWERS = {
  sunshine: {
    name: 'Sunshine Magnet',
    tagline: 'GOOD VIBES ONLY',
    color: '#38bdf8',
    icon: '☀️',
    desc: 'You make every room feel brighter just by showing up.',
    move: 'Sunbeam Surprise',
    perk: 'Turns ordinary days into favorite memories.'
  },
  sparkle: {
    name: 'Chaos & Sparkles',
    tagline: 'A LITTLE EXTRA',
    color: '#fb923c',
    icon: '✨',
    desc: 'Big laughs, spontaneous plans, and a tiny bit of delightful chaos.',
    move: 'Confetti Critical',
    perk: 'Makes even the group chat more iconic.'
  },
  heart: {
    name: 'The Soft-Hearted Hero',
    tagline: 'HEART OF GOLD',
    color: '#f472b6',
    icon: '💖',
    desc: 'Kindness is your secret superpower, and everyone around you feels it.',
    move: 'Heartfelt Hype',
    perk: 'Reminds your people how much they matter.'
  },
  mainCharacter: {
    name: 'Main Character Mode',
    tagline: 'THE MOMENT',
    color: '#facc15',
    icon: '💫',
    desc: 'Effortlessly iconic. The soundtrack starts whenever you walk in.',
    move: 'Entrance of the Year',
    perk: 'Collects unforgettable moments without even trying.'
  },
  dreamer: {
    name: 'Dream-Chasing Legend',
    tagline: 'LIMITLESS',
    color: '#a78bfa',
    icon: '🌙',
    desc: 'Quietly unstoppable, with a whole universe of big dreams ahead.',
    move: 'Wish Into Orbit',
    perk: 'Turns “maybe someday” into “look what I did.”'
  }
};

// Constellation letters for Advyeta
const CONSTELLATION_LETTERS = ['A', 'D', 'V', 'Y', 'E', 'T', 'A'];

export default function App() {
  // Linear Flow: 'cake' -> 'quiz' -> 'quiz-result' -> 'owl' -> 'slayer' -> 'style-view' -> 'finale'
  const [screen, setScreen] = useState('cake');
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  // Cake Step State
  const [candlesLit, setCandlesLit] = useState([true, true, true, true, true]);
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [cakeCut, setCakeCut] = useState(false);
  const [isCuttingAnimation, setIsCuttingAnimation] = useState(false);

  // Quiz State
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [pickedAnswer, setPickedAnswer] = useState(null);
  const [showFact, setShowFact] = useState(false);

  // Owl Letter State
  const [letterOpen, setLetterOpen] = useState(false);

  // Birthday power-up state
  const [selectedPower, setSelectedPower] = useState('sunshine');

  // Grand Finale State
  const [giftBoxOpened, setGiftBoxOpened] = useState(false);
  const [litStarLetters, setLitStarLetters] = useState(0);

  // Attempt autoplay, then retry after a user gesture if the browser blocks it.
  useEffect(() => {
    musicBox.start();
    setIsPlayingMusic(true);

    const events = ['pointerdown', 'touchstart', 'keydown'];
    let isUnlocking = false;
    const unlockAudio = () => {
      if (musicBox.userMuted || isUnlocking) return;
      isUnlocking = true;
      resumeAudioContext().then(() => {
        if (!musicBox.userMuted) {
          musicBox.start();
          setIsPlayingMusic(true);
        }
        events.forEach((event) => {
          window.removeEventListener(event, unlockAudio);
        });
      }).catch((error) => {
        isUnlocking = false;
        console.warn('Unable to unlock background music:', error);
      });
    };

    events.forEach((event) => {
      window.addEventListener(event, unlockAudio, { passive: true });
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, unlockAudio);
      });
    };
  }, []);

  // Music toggle handler
  const toggleMusic = (e) => {
    if (e) e.stopPropagation();
    const isNowPlaying = musicBox.toggle();
    setIsPlayingMusic(isNowPlaying);
  };

  // Continuous Fireworks Burst
  const triggerFireworksShower = () => {
    playChime();
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }
      confetti({
        startVelocity: 35,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random() * 0.8 + 0.1, y: Math.random() * 0.5 + 0.2 },
        colors: ['#f472b6', '#38bdf8', '#facc15', '#a855f7', '#fb923c', '#ffffff']
      });
    }, 240);
  };

  // Confetti helper
  const triggerConfetti = (mode = 'full') => {
    playChime();
    if (mode === 'cake') {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.62 },
        colors: ['#ff8bb5', '#fca5a5', '#fde047', '#c084fc', '#ffffff']
      });
    } else {
      triggerFireworksShower();
    }
  };

  // 1. Blow Candles
  const handleBlowCandles = () => {
    playBreeze();
    setCandlesLit([false, false, false, false, false]);
    setCandlesBlown(true);
    triggerConfetti('cake');
  };

  // 2. Cut Cake Animation
  const handleCutCake = () => {
    playSlash();
    setIsCuttingAnimation(true);
    setTimeout(() => {
      setCakeCut(true);
      setIsCuttingAnimation(false);
      triggerConfetti('cake');
      // Smooth automatic transition to cinema challenge
      setTimeout(() => {
        setScreen((cur) => (cur === 'cake' ? 'quiz' : cur));
      }, 2400);
    }, 600);
  };

  // Quiz Answer
  const handleAnswer = (option) => {
    if (pickedAnswer) return;
    setPickedAnswer(option);
    const correct = option === QUIZ_QUESTIONS[qIndex].answer;
    if (correct) {
      setScore((s) => s + 1);
      playChime();
    } else {
      playBoop();
    }
    setShowFact(true);
  };

  const handleNextQuestion = () => {
    playPop(550);
    if (qIndex < QUIZ_QUESTIONS.length - 1) {
      setQIndex((i) => i + 1);
      setPickedAnswer(null);
      setShowFact(false);
    } else {
      setScreen('quiz-result');
      triggerConfetti('full');
    }
  };

  // Birthday power selection
  const chooseBirthdayPower = (key) => {
    setSelectedPower(key);
    triggerConfetti('full');
    setScreen('style-view');
  };

  // Open the Finale Gift Box
  const handleOpenGiftBox = () => {
    playChime();
    setGiftBoxOpened(true);
    triggerFireworksShower();

    // Sequentially light up constellation letters
    CONSTELLATION_LETTERS.forEach((_, i) => {
      setTimeout(() => {
        setLitStarLetters((prev) => Math.max(prev, i + 1));
        playPop(500 + i * 60);
      }, (i + 1) * 350);
    });
  };

  // Interactive sky firework on click
  const handleSkyClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    playPop(650);
    confetti({
      particleCount: 45,
      spread: 80,
      origin: { x, y },
      colors: ['#f472b6', '#38bdf8', '#facc15', '#ffffff', '#a855f7']
    });
  };

  // Restart Journey
  const restartJourney = () => {
    playPop(500);
    setScreen('cake');
    setCandlesLit([true, true, true, true, true]);
    setCandlesBlown(false);
    setCakeCut(false);
    setQIndex(0);
    setScore(0);
    setPickedAnswer(null);
    setShowFact(false);
    setLetterOpen(false);
    setGiftBoxOpened(false);
    setLitStarLetters(0);
  };

  // Step Number helper (1 to 5)
  const getStepNumber = () => {
    if (screen === 'cake') return 1;
    if (screen === 'quiz' || screen === 'quiz-result') return 2;
    if (screen === 'owl') return 3;
    if (screen === 'slayer' || screen === 'style-view') return 4;
    if (screen === 'finale') return 5;
    return 1;
  };

  const currentStep = getStepNumber();

  return (
    <div className="universe-root">
      {/* Magic Particle Cursor Trail */}
      <SparkleCursor />

      {/* Floating Demon Slayer & Harry Potter Chibi Doodles */}
      <DoodleUniverse />

      {/* Ambient Blobs */}
      <div className="ambient-blob blob-1" aria-hidden="true" />
      <div className="ambient-blob blob-2" aria-hidden="true" />
      <div className="ambient-blob blob-3" aria-hidden="true" />

      {/* Header Bar */}
      <header className="navbar">
        <div className="nav-brand" onClick={restartJourney}>
          <span className="brand-badge">A</span>
          <span className="brand-text">Advyeta ✦</span>
        </div>

        {/* Step Flow Tracker */}
        <div className="journey-tracker">
          <span className={`step-dot ${currentStep >= 1 ? 'active' : ''}`} title="Cake">🎂</span>
          <span className="step-line" />
          <span className={`step-dot ${currentStep >= 2 ? 'active' : ''}`} title="Cinema">🎬</span>
          <span className="step-line" />
          <span className={`step-dot ${currentStep >= 3 ? 'active' : ''}`} title="Letter">✉️</span>
          <span className="step-line" />
          <span className={`step-dot ${currentStep >= 4 ? 'active' : ''}`} title="Power-up">💫</span>
          <span className="step-line" />
          <span className={`step-dot ${currentStep >= 5 ? 'active' : ''}`} title="Galaxy Finale">🌟</span>
        </div>

        <div className="nav-controls">
          <button
            className={`nav-button audio-btn ${isPlayingMusic ? 'playing' : ''}`}
            onClick={toggleMusic}
            title={isPlayingMusic ? 'Mute Music' : 'Play Music'}
          >
            {isPlayingMusic ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span className="btn-label">{isPlayingMusic ? 'Music' : 'Muted'}</span>
            {isPlayingMusic && <span className="music-wave"><span></span><span></span><span></span></span>}
          </button>
        </div>
      </header>

      {/* ================= STEP 1: BIRTHDAY CAKE & CAKE CUTTING ================= */}
      {screen === 'cake' && (
        <main className="content-container intro-view">
          <div className="hero-badge-wrap">
            <span className="hero-badge">A DAY JUST FOR YOU</span>
          </div>

          <h1 className="hero-title">
            Happy Birthday, <br />
            <span className="name-highlight">Advyeta!</span>
          </h1>

          <p className="hero-subtitle">
            {!candlesBlown
              ? 'Make a wish and blow out your birthday candles ✨'
              : !cakeCut
              ? 'Now cut your birthday cake! 🎂🔪'
              : 'Yum! Enjoy your special slice 🍰✨'}
          </p>

          <div className="cake-stage">
            {/* Knife Slicing Animation */}
            {isCuttingAnimation && (
              <div className="cutting-knife-anim">
                <svg viewBox="0 0 100 120" width="60" height="90">
                  <path d="M 50 10 L 60 70 L 52 110 L 48 110 L 40 70 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
                  <rect x="46" y="2" width="8" height="24" rx="3" fill="#78350f" />
                  <polygon points="52,40 55,35 58,40 63,42 58,44 55,49 52,44 47,42" fill="#ffffff" />
                </svg>
              </div>
            )}

            <div className={`cake-plate ${cakeCut ? 'cake-is-cut' : ''}`}>
              {/* Candles */}
              <div className="candles-row">
                {candlesLit.map((isLit, i) => (
                  <div
                    key={i}
                    className={`candle-wrapper ${isLit ? 'lit' : 'out'}`}
                    onClick={() => {
                      if (!candlesBlown) {
                        playPop(480 + i * 40);
                        setCandlesLit((prev) => {
                          const c = [...prev];
                          c[i] = !c[i];
                          return c;
                        });
                      }
                    }}
                  >
                    <div className="candle-flame">
                      <div className="flame-core" />
                      <div className="flame-glow" />
                    </div>
                    <div className="candle-wick" />
                    <div className="candle-stick" />
                    {!isLit && <div className="candle-smoke" />}
                  </div>
                ))}
              </div>

              {/* Cake Body */}
              <div className="cake-body">
                <div className="cake-top-frosting">
                  <span className="berry">🍓</span>
                  <span className="frosting-dollop" />
                  <span className="frosting-dollop" />
                  <span className="berry">🍓</span>
                  <span className="frosting-dollop" />
                  <span className="frosting-dollop" />
                  <span className="berry">🍓</span>
                </div>

                <div className="cake-tier-1">
                  <div className="drip drip-1" />
                  <div className="drip drip-2" />
                  <div className="drip drip-3" />
                  <span className="cake-text">ADVYETA</span>

                  {cakeCut && (
                    <div className="cut-slice-reveal">
                      <span className="served-slice">🍰</span>
                      <span className="cut-sparkle">✨</span>
                    </div>
                  )}
                </div>

                <div className="cake-tier-2" />
              </div>
            </div>

            {/* Cake Controls */}
            <div className="cake-actions">
              {!candlesBlown ? (
                <button className="primary-pill-btn blow-btn" onClick={handleBlowCandles}>
                  <Flame size={18} /> Make a Wish & Blow Candles 🎂
                </button>
              ) : !cakeCut ? (
                <button className="primary-pill-btn cut-cake-btn" onClick={handleCutCake}>
                  Cut the Cake 🍰🔪
                </button>
              ) : (
                <button
                  className="primary-pill-btn next-advance-btn"
                  onClick={() => { playPop(520); setScreen('quiz'); }}
                >
                  <span>Next Surprise: Cinema Challenge</span>
                  <ChevronRight size={18} />
                </button>
              )}
            </div>

            {cakeCut && (
              <div className="wish-card-toast cake-cut-toast">
                <h3>Your slice is ready! 🍰</h3>
                <p>Next up: a little Prabhas trivia.</p>
              </div>
            )}
          </div>
        </main>
      )}

      {/* ================= STEP 2: PRABHAS TRIVIA (5 QUESTIONS) ================= */}
      {screen === 'quiz' && (
        <main className="content-container quiz-view">
          <div className="view-top-bar">
            <span className="section-step-indicator">Step 2 of 5 · Cinema Challenge</span>
            <span className="quiz-status-pill">
              Question {qIndex + 1} of {QUIZ_QUESTIONS.length}
            </span>
          </div>

          <div className="quiz-glass-card">
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${((qIndex + (pickedAnswer ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>

            <div className="question-header">
              <h2 className="question-title">{QUIZ_QUESTIONS[qIndex].q}</h2>
            </div>

            <div className="options-grid">
              {QUIZ_QUESTIONS[qIndex].options.map((opt, i) => {
                const isSelected = pickedAnswer === opt;
                const isCorrect = opt === QUIZ_QUESTIONS[qIndex].answer;
                let btnClass = 'option-btn';
                if (pickedAnswer) {
                  if (isSelected && isCorrect) btnClass += ' opt-correct';
                  else if (isSelected && !isCorrect) btnClass += ' opt-wrong';
                  else if (isCorrect) btnClass += ' opt-show-correct';
                  else btnClass += ' opt-dimmed';
                }

                return (
                  <button
                    key={opt}
                    className={btnClass}
                    disabled={!!pickedAnswer}
                    onClick={() => handleAnswer(opt)}
                  >
                    <span className="option-index">{String.fromCharCode(65 + i)}</span>
                    <span className="option-text">{opt}</span>
                    {pickedAnswer && isCorrect && <span className="option-state-icon"><Check size={18} /></span>}
                    {isSelected && !isCorrect && <span className="option-state-icon">×</span>}
                  </button>
                );
              })}
            </div>

            {showFact && (
              <div className="quiz-fact-box">
                <div className="fact-title">
                  {pickedAnswer === QUIZ_QUESTIONS[qIndex].answer ? '✨ Spot On!' : '💡 Movie Fact'}
                </div>
                <p className="fact-text">{QUIZ_QUESTIONS[qIndex].fact}</p>
                <button className="primary-pill-btn next-q-btn" onClick={handleNextQuestion}>
                  {qIndex === QUIZ_QUESTIONS.length - 1 ? 'See Score 🏆' : 'Next Question →'}
                </button>
              </div>
            )}
          </div>
        </main>
      )}

      {/* QUIZ RESULT */}
      {screen === 'quiz-result' && (
        <main className="content-container result-view">
          <div className="result-glass-card">
            <div className="result-trophy">🏆</div>
            <h2 className="result-rank-title">
              {score >= 4 ? 'Prabhas superfan!' : 'Nice one!'}
            </h2>
            <div className="score-display">
              <span className="score-num">{score}</span>
              <span className="score-total">/ {QUIZ_QUESTIONS.length}</span>
            </div>
            <p className="result-summary">
              {score >= 4
                ? 'You know your Prabhas films. That was impressive.'
                : 'A few tricky ones in there. Looks like it is time for a movie night.'}
            </p>

            <button
              className="primary-pill-btn big-forward-btn"
              onClick={() => { playPop(500); setScreen('owl'); }}
            >
              <span>Next Surprise: Hogwarts Delivery</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </main>
      )}

      {/* ================= STEP 3: HOGWARTS OWL POST ================= */}
      {screen === 'owl' && (
        <main className="content-container owl-view">
          <div className="view-top-bar">
            <span className="section-step-indicator">Step 3 of 5 · Wizarding Post</span>
            <span className="quiz-status-pill">Special Delivery</span>
          </div>

          {!letterOpen ? (
            <div className="envelope-container">
              <div
                className="interactive-envelope"
                onClick={() => { playPop(600); playChime(); setLetterOpen(true); }}
                title="Tap to open letter"
              >
                <div className="envelope-flap" />
                <div className="envelope-pocket" />
                <div className="wax-seal">
                  <span>H</span>
                </div>
              </div>
              <p className="envelope-hint">Tap the wax seal to open your letter ✉️</p>
            </div>
          ) : (
            <div className="parchment-letter-card">
              <div className="letter-header">
                <span className="crest-icon">⚡</span>
                <h3>HOGWARTS SCHOOL OF WITCHCRAFT & WIZARDRY</h3>
              </div>

              <div className="letter-body">
                <p className="letter-salutation">Dear Advyeta,</p>

                <p>Happy birthday! Hope your day is full of your favorite people, stories, and something delicious.</p>

                <ul className="letter-bullets">
                  <li>May the year ahead bring you new adventures.</li>
                  <li>May there always be a good film or anime waiting for you.</li>
                  <li>And may you find plenty of reasons to laugh.</li>
                </ul>

                <p className="letter-sign">
                  Have the loveliest birthday, Advyeta. 🦉
                </p>
              </div>

              <div className="letter-footer">
                <button
                  className="primary-pill-btn big-forward-btn"
                  onClick={() => { playPop(500); setScreen('slayer'); }}
                >
                  <span>Next Surprise: Your Anime Power-Up</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
        </main>
      )}

      {/* ================= STEP 4: BIRTHDAY ANIME POWER-UP ================= */}
      {screen === 'slayer' && (
        <main className="content-container slayer-view">
          <div className="view-top-bar">
            <span className="section-step-indicator">Step 4 of 5 · Anime Power-Up</span>
            <span className="quiz-status-pill">Birthday Edition ✦</span>
          </div>

          <div className="slayer-header">
            <span className="power-up-kicker">PICK YOUR VIBE</span>
            <h2>Choose your birthday superpower</h2>
            <p>Which one sounds most like you?</p>
          </div>

          <div className="styles-grid">
            {Object.entries(BIRTHDAY_POWERS).map(([key, item], index) => (
              <button
                key={key}
                className="style-card power-card"
                style={{ '--power-color': item.color, '--power-index': index }}
                onClick={() => chooseBirthdayPower(key)}
              >
                <span className="style-card-icon">
                  {item.icon}
                </span>
                <span className="style-card-content">
                  <span className="power-card-tagline">{item.tagline}</span>
                  <span className="style-names">{item.name}</span>
                  <span className="power-card-desc">{item.desc}</span>
                </span>
                <span className="style-card-cta" aria-hidden="true">UNLOCK ↗</span>
              </button>
            ))}
          </div>
        </main>
      )}

      {/* BIRTHDAY POWER-UP CARD */}
      {screen === 'style-view' && (
        <main className="content-container style-detail-view">
          <div className="view-top-bar">
            <span className="section-step-indicator">Step 4 of 5 · Anime Power-Up</span>
            <span className="quiz-status-pill">Power Unlocked ✦</span>
          </div>

          <div
            className="birthday-power-card"
            style={{
              '--style-color': BIRTHDAY_POWERS[selectedPower].color
            }}
          >
            <div className="power-card-orbit" aria-hidden="true">✦　✧　⋆</div>
            <p className="power-card-eyebrow">ADVYETA'S BIRTHDAY POWER</p>
            <div className="power-card-emblem" aria-hidden="true">
              {BIRTHDAY_POWERS[selectedPower].icon}
            </div>
            <span className="birthday-power-tagline">{BIRTHDAY_POWERS[selectedPower].tagline}</span>
            <h2 className="birthday-power-title">{BIRTHDAY_POWERS[selectedPower].name}</h2>
            <p className="birthday-power-description">{BIRTHDAY_POWERS[selectedPower].desc}</p>

            <div className="power-card-stats">
              <div>
                <span>SIGNATURE MOVE</span>
                <strong>{BIRTHDAY_POWERS[selectedPower].move}</strong>
              </div>
              <div>
                <span>PASSIVE PERK</span>
                <strong>{BIRTHDAY_POWERS[selectedPower].perk}</strong>
              </div>
            </div>

            <div className="birthday-power-actions">
              <button
                className="secondary-pill-btn"
                onClick={() => { playPop(480); setScreen('slayer'); }}
              >
                Choose another power ✨
              </button>
              <button
                className="primary-pill-btn big-forward-btn"
                onClick={() => { playPop(500); setScreen('finale'); }}
              >
                <span>Final Surprise: The Birthday Universe 🌟</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </main>
      )}

      {/* ================= STEP 5: GRAND CRAZY FINALE - THE UNIVERSE OF ADVYETA ================= */}
      {screen === 'finale' && (
        <main className="content-container grand-finale-view" onClick={giftBoxOpened ? handleSkyClick : undefined}>
          <div className="view-top-bar">
            <span className="section-step-indicator">The last surprise</span>
          </div>

          {!giftBoxOpened ? (
            <div className="gift-box-stage">
              <div
                className="magical-gift-box"
                onClick={handleOpenGiftBox}
                title="Tap to unwrap your birthday surprise"
              >
                <div className="gift-lid">
                  <div className="ribbon-bow">🎀</div>
                </div>
                <div className="gift-box-body">
                  <div className="ribbon-vertical" />
                  <div className="ribbon-horizontal" />
                  <span className="gift-label">FOR YOU</span>
                </div>
              </div>
              <h2 className="gift-prompt-title">One last thing...</h2>
              <p className="gift-prompt-sub">Open your present 🎁</p>
            </div>
          ) : (
            <div className="finale-unlocked-container">
              <div className="constellation-sky">
                <span className="constellation-header">A LITTLE BIRTHDAY SKY FOR YOU</span>
                <div className="star-letters-row">
                  {CONSTELLATION_LETTERS.map((letter, idx) => (
                    <div
                      key={idx}
                      className={`constellation-star ${idx < litStarLetters ? 'star-lit' : ''}`}
                    >
                      <div className="star-sparkle-dot" />
                      <span className="star-char">{letter}</span>
                      {idx < CONSTELLATION_LETTERS.length - 1 && <div className="constellation-beam" />}
                    </div>
                  ))}
                </div>
                <p className="sky-hint">Tap the sky for fireworks</p>
              </div>

              <div className="final-birthday-note" onClick={(e) => e.stopPropagation()}>
                <h2>Happy Birthday, Advyeta! 🎀💗</h2>
                <p>
                  I hope this year brings you so many little moments that make you smile and memories you'll look back on happily.
                  <br />
                  Stay the same crazy, fun and lovely person you are. Have the happiest birthday 🫶🏻✨
                </p>

                <div className="card-actions-row">
                  <button className="primary-pill-btn firework-boost-btn" onClick={triggerFireworksShower}>
                    <Sparkles size={18} /> More fireworks
                  </button>
                  <button className="secondary-pill-btn" onClick={restartJourney}>
                    <RefreshCw size={15} /> Start over
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      )}

    </div>
  );
}
