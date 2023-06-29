import Home from './components/Home'
import WiFi from './components/WiFi'
import Bluetooth from './components/Bluetooth'
import Settings from './components/Settings'
import { WifiIcon, HomeIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

import { HashRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  const [hora, setHora] = useState(
    new Date().toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Madrid'
    })
  )

  useEffect(() => {
    setInterval(() => {
      setHora(
        new Date().toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Europe/Madrid'
        })
      )
    }, 1000)
  }, [])

  return (
    <>
      <HashRouter basename="/">
        <div className="fixed left-[750px]">
          <div className="text-white p-4 h-16 flex items-center gap-2">
            <p className="mr-5 text-[#9feaf9] text-lg">{hora}</p>
            <Link to="/">
              <HomeIcon className="h-8 w-8" />
            </Link>
            <Link to="/WiFi">
              <WifiIcon className="h-8 w-8 ml-1" />
            </Link>
            <Link to="/Bluetooth">
              <svg
                className="h-6 w-8"
                fill="#9feaf9"
                height="800px"
                width="800px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 217.499 217.499"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M123.264,108.749l45.597-44.488c1.736-1.693,2.715-4.016,2.715-6.441s-0.979-4.748-2.715-6.441l-50.038-48.82
		c-2.591-2.528-6.444-3.255-9.78-1.853c-3.336,1.406-5.505,4.674-5.505,8.294v80.504l-42.331-41.3
		c-3.558-3.471-9.255-3.402-12.727,0.156c-3.471,3.558-3.401,9.256,0.157,12.727l48.851,47.663l-48.851,47.663
		c-3.558,3.471-3.628,9.169-0.157,12.727s9.17,3.628,12.727,0.156l42.331-41.3v80.504c0,3.62,2.169,6.888,5.505,8.294
		c1.128,0.476,2.315,0.706,3.493,0.706c2.305,0,4.572-0.886,6.287-2.559l50.038-48.82c1.736-1.693,2.715-4.016,2.715-6.441
		s-0.979-4.748-2.715-6.441L123.264,108.749z M121.539,30.354l28.15,27.465l-28.15,27.465V30.354z M121.539,187.143v-54.93
		l28.15,27.465L121.539,187.143z"
                  />
                </g>
              </svg>
            </Link>
            <Link to="/Settings">
              <Cog8ToothIcon className="h-8 w-8" />
            </Link>
          </div>
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
