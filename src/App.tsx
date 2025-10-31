import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import CalculatorButtons from './components/CalculatorButtons'
import HistoryPanel from './components/HistoryPanel'
import GraphingComponent from './components/GraphingComponent'
import SettingsModal from './components/SettingsModal'

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
          <p className="tagline">Revolutionizing Calculation for the Tech-Savvy</p>
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
          <li>Graphing Capabilities</li>
          <li>Scientific Calculations</li>
          <li>History Tracking</li>
          <li>Collaborative Calculation Sessions</li>
          <li>Customizable Themes</li>
          </ul>
        </div>
        <p>&copy; 2025 SmartCalc Pro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App