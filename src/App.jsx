import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [isPressed, setIsPressed] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [bestTime, setBestTime] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [shakeIntensity, setShakeIntensity] = useState(0)
  const [fakeButtons, setFakeButtons] = useState([])
  const [flashEffect, setFlashEffect] = useState(false)
  const [colorChange, setColorChange] = useState(false)
  const [soundAlert, setSoundAlert] = useState(false)
  const [buttonPosition, setButtonPosition] = useState({ x: 50, y: 50 })
  const [spinning, setSpinning] = useState(false)
  const [shrinking, setShrinking] = useState(false)
  const [multiplying, setMultiplying] = useState(false)
  const [invisibleMode, setInvisibleMode] = useState(false)
  const [cursorDisappear, setCursorDisappear] = useState(false)
  const [rotateScreen, setRotateScreen] = useState(0)
  const [glitchText, setGlitchText] = useState(false)
  
  const timeElapsedRef = useRef(0)

  useEffect(() => {
    timeElapsedRef.current = timeElapsed
  }, [timeElapsed])

  useEffect(() => {
    if (isPressed && gameStarted && !gameOver) {
      timerRef.current = setInterval(() => {
        setTimeElapsed(prev => prev + 0.1)
      }, 100)
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPressed, gameStarted, gameOver])

  // Efectos de distracción
  useEffect(() => {
    if (!gameStarted || gameOver) return

    let timeoutId;

    const runDistraction = () => {
      const currentTime = timeElapsedRef.current;
      const random = Math.random()
      
      // Dificultad progresiva basada en el tiempo
      const difficultyLevel = Math.min(currentTime / 10, 1) // 0 al inicio, 1 después de 10 segundos
      
      // Calcular intervalo dinámico
      // Base: entre 1500ms y 3500ms
      // Bonus velocidad: hasta 1000ms menos
      // Mínimo 500ms
      const intervalDelay = Math.max(500, 1500 + Math.random() * 2000 - (difficultyLevel * 1000));
      
      // Vibración de pantalla - suave al inicio, intensa después
      if (random < 0.15 && currentTime > 3) {
        const intensity = 10 + (difficultyLevel * 30) // 10-40
        setShakeIntensity(intensity)
        setTimeout(() => setShakeIntensity(0), 800)
      }
      
      // Mover el botón principal - solo después de 5 segundos
      if (random > 0.15 && random < 0.25 && currentTime > 5) {
        setButtonPosition({
          x: Math.random() * 60 + 20,
          y: Math.random() * 60 + 20
        })
        // Regresar al centro después de un tiempo variable según dificultad
        setTimeout(() => setButtonPosition({ x: 50, y: 50 }), 2000 - (difficultyLevel * 1000))
      }
      
      // Botones falsos - empiezan pocos, luego más
      if (random > 0.25 && random < 0.40 && currentTime > 2) {
        const count = Math.floor(1 + (difficultyLevel * 4)) // 1-5 botones según dificultad
        const newFakeButtons = Array.from({ length: count }, (_, i) => ({
          id: Math.random(),
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
          size: Math.random() * 80 + 170,
          delay: i * 0.15
        }))
        setFakeButtons(newFakeButtons)
        setTimeout(() => setFakeButtons([]), 2000)
      }
      
      // Flash de pantalla - solo después de 4 segundos
      if (random > 0.40 && random < 0.50 && currentTime > 4) {
        setFlashEffect(true)
        setTimeout(() => setFlashEffect(false), 150)
      }
      
      // Rotación del botón - solo después de 6 segundos
      if (random > 0.50 && random < 0.58 && currentTime > 6) {
        setSpinning(true)
        setTimeout(() => setSpinning(false), 2000)
      }
      
      // Botón se encoge y crece - después de 7 segundos
      if (random > 0.58 && random < 0.65 && currentTime > 7) {
        setShrinking(true)
        setTimeout(() => setShrinking(false), 1500)
      }
      
      // Cambio de color - después de 5 segundos
      if (random > 0.65 && random < 0.72 && currentTime > 5) {
        setColorChange(true)
        setTimeout(() => setColorChange(false), 1000)
      }
      
      // Modo invisible - solo después de 8 segundos
      if (random > 0.72 && random < 0.78 && currentTime > 8) {
        setInvisibleMode(true)
        setTimeout(() => setInvisibleMode(false), 1000)
      }
      
      // Multiplicar botones - después de 10 segundos
      if (random > 0.78 && random < 0.83 && currentTime > 10) {
        setMultiplying(true)
        setTimeout(() => setMultiplying(false), 2000)
      }
      
      // Rotar pantalla - solo después de 12 segundos
      if (random > 0.83 && random < 0.88 && currentTime > 12) {
        setRotateScreen(180)
        setTimeout(() => setRotateScreen(0), 1500)
      }
      
      // Cursor desaparece - después de 9 segundos
      if (random > 0.88 && random < 0.93 && currentTime > 9) {
        setCursorDisappear(true)
        setTimeout(() => setCursorDisappear(false), 1200)
      }
      
      // Texto glitch - después de 7 segundos
      if (random > 0.93 && random < 0.97 && currentTime > 7) {
        setGlitchText(true)
        setTimeout(() => setGlitchText(false), 800)
      }
      
      // Alerta de sonido - después de 4 segundos
      if (random > 0.97 && currentTime > 4) {
        setSoundAlert(true)
        playBeepSequence()
        setTimeout(() => setSoundAlert(false), 400)
      }

      // Schedule next distraction
      timeoutId = setTimeout(runDistraction, intervalDelay);
    };

    // Start loop
    timeoutId = setTimeout(runDistraction, 1000);

    return () => clearTimeout(timeoutId)
  }, [gameStarted, gameOver]) // Removed timeElapsed dependency to avoid restart loops

  const playBeep = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.value = 800
    oscillator.type = 'sine'
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.2)
  }

  const playBeepSequence = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const frequencies = [600, 800, 1000, 1200]
    
    frequencies.forEach((freq, index) => {
      setTimeout(() => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)
        
        oscillator.frequency.value = freq
        oscillator.type = 'square'
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
        
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.1)
      }, index * 100)
    })
  }

  const handleMouseDown = () => {
    if (!gameStarted) {
      setGameStarted(true)
      setGameOver(false)
      setTimeElapsed(0)
    }
    setIsPressed(true)
  }

  const handleMouseUp = () => {
    setIsPressed(false)
    if (gameStarted && !gameOver) {
      setGameOver(true)
      if (timeElapsed > bestTime) {
        setBestTime(timeElapsed)
      }
    }
  }

  const resetGame = () => {
    setGameStarted(false)
    setGameOver(false)
    setTimeElapsed(0)
    setIsPressed(false)
    setShakeIntensity(0)
    setFakeButtons([])
    setButtonPosition({ x: 50, y: 50 })
    setSpinning(false)
    setShrinking(false)
    setMultiplying(false)
    setInvisibleMode(false)
    setCursorDisappear(false)
    setRotateScreen(0)
    setGlitchText(false)
  }

  const formatTime = (time) => {
    return time.toFixed(1)
  }

  return (
    <div 
      className={`game-container ${flashEffect ? 'flash' : ''} ${cursorDisappear ? 'no-cursor' : ''}`}
      style={{
        transform: `translate(${Math.random() * shakeIntensity - shakeIntensity/2}px, ${Math.random() * shakeIntensity - shakeIntensity/2}px) rotate(${rotateScreen}deg)`,
        filter: colorChange ? 'hue-rotate(180deg) saturate(200%)' : 'none',
        transition: 'transform 0.1s, filter 0.3s'
      }}
    >
      <div className="header">
        <h1 className={`title ${glitchText ? 'glitch' : ''}`}>🎯 Enfoque Extremo</h1>
        <p className="subtitle">Mantén presionado el botón mientras resistes las distracciones</p>
      </div>

      <div className="stats">
        <div className="stat-box">
          <span className="stat-label">Tiempo actual</span>
          <span className="stat-value">{formatTime(timeElapsed)}s</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Mejor tiempo</span>
          <span className="stat-value best">{formatTime(bestTime)}s</span>
        </div>
      </div>

      <div className="game-area">
        <button
          className={`main-button ${isPressed ? 'pressed' : ''} ${!gameStarted ? 'pulse' : ''} ${spinning ? 'spin' : ''} ${shrinking ? 'shrink' : ''} ${invisibleMode ? 'invisible' : ''}`}
          style={{
            left: `${buttonPosition.x}%`,
            top: `${buttonPosition.y}%`,
            transform: `translate(-50%, -50%)`,
            transition: 'left 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55), top 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        >
          <span className="button-text">
            {!gameStarted ? '¡PRESIONA AQUÍ!' : isPressed ? '¡MANTÉN!' : '❌ FALLASTE'}
          </span>
          {isPressed && gameStarted && (
            <span className="timer-inside">{formatTime(timeElapsed)}s</span>
          )}
        </button>

        {/* Clones del botón cuando se multiplica */}
        {multiplying && [1, 2, 3, 4].map(i => (
          <button
            key={`clone-${i}`}
            className="main-button clone"
            style={{
              left: `${(buttonPosition.x + (i * 20)) % 90}%`,
              top: `${(buttonPosition.y + (i * 15)) % 90}%`,
              animationDelay: `${i * 0.1}s`
            }}
            onMouseDown={(e) => e.preventDefault()}
          >
            <span className="button-text">
              {isPressed ? '¡MANTÉN!' : '¡PRESIONA AQUÍ!'}
            </span>
          </button>
        ))}

        {fakeButtons.map(btn => (
          <button
            key={btn.id}
            className="fake-button"
            style={{
              left: `${btn.x}%`,
              top: `${btn.y}%`,
              width: `${btn.size}px`,
              height: `${btn.size}px`,
              animationDelay: `${btn.delay}s`
            }}
            onMouseDown={(e) => e.preventDefault()}
          >
            <span className="button-text">
              ¡PRESIONA AQUÍ!
            </span>
          </button>
        ))}
      </div>

      {gameOver && (
        <div className="game-over">
          <h2>¡Juego terminado!</h2>
          <p className="final-time">Duraste: <strong>{formatTime(timeElapsed)}s</strong></p>
          {timeElapsed === bestTime && timeElapsed > 0 && (
            <p className="new-record">🏆 ¡Nuevo récord!</p>
          )}
          <button className="restart-button" onClick={resetGame}>
            Intentar de nuevo
          </button>
        </div>
      )}

      {soundAlert && (
        <div className="sound-alert">
          � ¡ALERTA! 🚨
        </div>
      )}

    </div>
  )
}

export default App
