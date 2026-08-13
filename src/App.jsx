import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [combo, setCombo] = useState(0)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (combo === 0) return;

    const comboTimer = setTimeout(() => {
      setCombo(0);
    }, 1000);

    return () => clearTimeout(comboTimer);
  }, [combo]);

  const handleTyping = (e) => {
    setText(e.target.value)
    setCombo(prev => prev + 1)
  }

  return (
    <div className="container">
      <header>
        <h1>ComboPad</h1>
        <div className={`combo-meter ${combo > 20 ? 'high-combo' : ''}`}>
          Combo: {combo}x
        </div>
      </header>
      
      <div className="editor-wrapper">
        <textarea 
          value={text}
          onChange={handleTyping}
          placeholder="Start mashing keys to build your combo..."
          autoFocus
        />
        {}
        <canvas ref={canvasRef} className="particle-canvas" />
      </div>
    </div>
  )
}

export default App