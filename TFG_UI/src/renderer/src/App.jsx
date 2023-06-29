import Home from './components/Home'
import WiFi from './components/WiFi'
import Bluetooth from './components/Bluetooth'
import Settings from './components/Settings'

import {
  HashRouter,
  Route
} from "react-router-dom";

function App() {
  return (
  <HashRouter basename ="/Home">
    <div>
      <Route path="/" exact component={ Home } />
      <Route path="/WiFi"  component={ WiFi } />
      <Route path="/Bluetooth" component={ Bluetooth } />
      <Route path="/Settings" component={ Settings } />
    </div>
</HashRouter>
  )
}

export default App
