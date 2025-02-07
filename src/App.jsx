import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Pages/Home'
import './App.css'
import FooterComp from './Component/FooterComp'
import Matchdetail from './Pages/Matchdetail'
import Gallery from './Pages/Gallery'
import Trophy from './Pages/Trophy'
import Blog from './Pages/Blog'
import Play from './Pages/Play'
import Stat from './Pages/Stat'
import About from './Pages/About'
import Stats from './Pages/Stats'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/trophy" element={<Trophy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/play" element={<Play />} />
          <Route path="/matchdet" element={<Matchdetail />} />
          <Route path="/stats" element={<Stat />} />
          <Route path="/about" element={<About />} />
          <Route path="/stat" element={<Stats />} />
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </>
  )
}

export default App
