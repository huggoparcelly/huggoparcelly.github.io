
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './page/Home'
import About from './components/About'
import NotFound from './page/NotFound'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        {/* <Route path="/projects" Component={Projects} /> */}
        {/* <Route path="/contact" Component={Contact} /> */}
        <Route path="/*" Component={NotFound} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
