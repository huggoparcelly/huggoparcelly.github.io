
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './page/Home'

import NotFound from './page/NotFound'
import About from './page/About'
import Contacts from './components/Contacts'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        {/* <Route path="/projects" Component={Projects} /> */}
        <Route path="/contacts" Component={Contacts} />
        <Route path="/*" Component={NotFound} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
