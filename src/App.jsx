import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Pages/Home'
import './App.css'
import FooterComp from './Component/FooterComp'
import Gallery from './Pages/Gallery'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </>
  )
}

export default App
