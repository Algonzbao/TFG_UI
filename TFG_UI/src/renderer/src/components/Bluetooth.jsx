import { useEffect } from 'react'

export default function Bluetooth() {
  async function testIt() {
    console.log(navigator.bluetooth)
    const device = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true
    })
    document.getElementById('device-name').innerHTML = device.name || `ID: ${device.id}`
  }

  useEffect(() => {
    testIt()
  }, [])

  return (
    <section>
      <h1 className="text-white text-3xl mt-5 px-8"> Bluetooth </h1>
      <div id="device-name"></div>
    </section>
  )
}
