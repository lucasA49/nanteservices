import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import MentionsLegales from './pages/MentionsLegales.jsx'
import Confidentialite from './pages/Confidentialite.jsx'
import CGU from './pages/CGU.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentions-legales" element={<MentionsLegales />} />
        <Route path="confidentialite" element={<Confidentialite />} />
        <Route path="cgu" element={<CGU />} />
      </Route>
    </Routes>
  )
}

export default App
