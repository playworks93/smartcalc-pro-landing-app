import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import CalculatorButton from './components/CalculatorButton'
import HistoryPanel from './components/HistoryPanel'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import CollaborationPanel from './components/CollaborationPanel'

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
          <p className="tagline">Revolutionizing Calculation Experience</p>
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
          <li>Advanced Scientific Calculations</li>
          <li>Data Visualization and Analytics</li>
          <li>Real-time Collaboration with Peers</li>
          <li>User-Customizable Interface</li>
          <li>History of Calculations</li>
          </ul>
        </div>
        <p>&copy; 2025 SmartCalc Pro. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App