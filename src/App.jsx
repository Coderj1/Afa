import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Pages/Home'
import './App.css'
import FooterComp from './Component/FooterComp'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </>
  )
}

export default App
