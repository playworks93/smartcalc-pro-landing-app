import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import InputPanel from './components/InputPanel'
import GraphingTool from './components/GraphingTool'
import HistoryLog from './components/HistoryLog'
import SettingsPanel from './components/SettingsPanel'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>SmartCalc Pro</h1>
          <p className="tagline">Your Advanced Calculation Companion</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>Basic Arithmetic Operations</li>
          <li>Graphing and Plotting Functions</li>
          <li>AI-Powered Suggestions</li>
          <li>Advanced Statistical Analysis</li>
          <li>Real-Time Collaboration</li>
          <li>Customizable User Interface</li>
          </ul>
        </div>
        <p>&copy; 2025 SmartCalc Pro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App