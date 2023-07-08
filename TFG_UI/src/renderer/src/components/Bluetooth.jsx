

export default function Bluetooth() {

  const executeShellCommand = () => {
    const { ipcRenderer } = window.electron;
    ipcRenderer.send('get-bluetooth-devices', 'ls -la');
    ipcRenderer.on('command-result', (event, result) => {
      if (result.error) {
        console.error(`Error ejecutando el comando: ${result.error}`);
        console.error('Errores del comando:', result.stderr);
      } else {
        console.log('Salida del comando:', result.stdout);
      }
    });
  };

  return (
    <section>
      <h1 className="text-white text-3xl mt-5 px-8"> Bluetooth </h1>
      <div className="flex justify-center mt-20">
        <button className="bg-pink-500 text-white rounded-xl p-2" onClick={executeShellCommand}>Buscar dispositivos</button>
      </div>
    </section>
  )
}
