import { BrowserRouter  as Router } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import ProtectedRouter from './router/ProtectedRouter'
import AppRouter from './router/AppRouter'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Router>
      <div className='app'>
        {isAuthenticated ? <ProtectedRouter /> : <AppRouter />}
        <Footer />
      </div>
    </Router>
  )
}

export default App
