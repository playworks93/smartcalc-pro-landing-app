import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import InputPanel from './components/InputPanel'
import HistoryPanel from './components/HistoryPanel'
import GraphingTool from './components/GraphingTool'
import UserAccountManager from './components/UserAccountManager'

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
          <p className="tagline">Advanced Calculations Made Simple</p>
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
          <li>Data Import and Export</li>
          <li>Collaboration Tools (Share Calculations)</li>
          <li>Custom Formula Builder</li>
          <li>Data Visualization (Charts, Tables)</li>
          </ul>
        </div>
        <p>&copy; 2025 SmartCalc Pro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App