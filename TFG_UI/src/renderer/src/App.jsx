import Home from './components/Home'
import WiFi from './components/WiFi'
import Bluetooth from './components/Bluetooth'
import Settings from './components/Settings'

import { HashRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <HashRouter basename="/">
        <div className="text-white flex gap-2 p-4">
          <Link to="/">Home</Link>
          <Link to="/WiFi">WiFi</Link>
          <Link to="/Bluetooth">Bluetooth</Link>
          <Link to="/Settings">Settings</Link>
        </div>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/WiFi" element={<WiFi />} />
          <Route path="/Bluetooth" element={<Bluetooth />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
