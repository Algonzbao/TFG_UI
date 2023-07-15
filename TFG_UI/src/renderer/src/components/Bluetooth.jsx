import { ArrowPathIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

export default function Bluetooth() {

  const [devices, setDevices] = useState([]);
  const [active, setActive] = useState(false);

  const executeShellCommand = () => {
    const { ipcRenderer } = window.electron;
    ipcRenderer.send('get-bluetooth-devices', 'cat ./devices');
    ipcRenderer.on('command-result', (event, result) => {
      if (result.error) {
        console.error(`Error ejecutando el comando: ${result.error}`);
        console.error('Errores del comando:', result.stderr);
      } else {
        console.log('Salida del comando:', result.stdout);
        setDevices(result.stdout.split('\n'));
      }
    });
  };

  return (
    <section className="flex flex-col px-8">
      <h1 className="text-white text-3xl mt-5"> Bluetooth </h1>
      <div className="bg-gray-700 flex items-center justify-between mt-5 p-4 px-12 rounded-full">
        {active ?
          <span className="text-[#4296f4] text-xl">Activado</span>
          :
          <span className="text-xl">Desactivado</span>
        }
        <label className="switch pt-2">
          <input type="checkbox" onChange={() => setActive(!active)} />
          <span className="slider"></span>
        </label>
      </div>
      {active ?
        <>
          <div className="flex flex-col">
            <h2 className="text-white text-lg mt-5">Dispositivos vinculados</h2>
            <div className='flex justify-center mt-10'>
              <p className="text-sm mt-5">No hay dispositivos vinculados</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-lg mt-5">Dispositivos disponibles</h3>
            <div className='flex flex-col mt-10'>
              {devices.length === 0 &&
                <div className="flex justify-center">
                  <p className="text-sm mt-5">No se encontraron dispositivos cercanos</p>
                </div>
              }
              <div className="grid grid-cols-4">
                {devices.map((device, index) => {
                  return (
                    <div key={index} className="bg-gray-700 hover:bg-gray-600 rounded-xl p-2 m-2">
                      <p className="text-white text-sm">{device}</p>
                    </div>
                  )
                })}
              </div>
              <div className='flex justify-center mt-10'>
                <button className="bg-pink-500 text-white flex gap-4 w-fit rounded-xl p-2" onClick={executeShellCommand}>
                  <span>Refrescar</span>
                  <ArrowPathIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </>
        :
        <div className="flex justify-center items-center h-64">
          <p>Activa la función Blueetooth para escanear dispositivos cercanos</p>
        </div>
      }
    </section>
  )
}
