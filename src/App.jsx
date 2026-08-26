import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import WorkDetail from './pages/WorkDetail'
import NotFound from './pages/NotFound'
import './App.css'

function ScrollToTopOnNavigate() {
  const location = useLocation()

  useEffect(() => {
    // ハッシュ付き遷移（アンカーリンク）ではトップに戻さない
    if (location.hash) return
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <a href="#main-content" className="skip-link">
          本文へ移動
        </a>
        <ScrollToTopOnNavigate />
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works/:slug" element={<WorkDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
