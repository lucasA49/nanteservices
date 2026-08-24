import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
