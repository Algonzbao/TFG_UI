import screen from "../assets/screen.png"; 
import language from "../assets/language.jpeg"; 
import performance from "../assets/rendimiento.png"; 
import updates from "../assets/update.png"; 


export default function Settings() {
  return (
    <section className="px-8">
      <h1 className="text-white text-3xl mt-5"> Ajustes </h1>
      <div className="grid grid-cols-2 gap-4 mt-16">
        <div className=" h-48 rounded-xl bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${screen})` }}>
          <div className="bg-black bg-opacity-70 h-48 flex rounded-xl">
            <span className="text-white text-xl px-8 py-4"> Pantalla </span>
          </div> 
        </div>
        <div className=" h-48 rounded-xl bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${language})` }}>
          <div className="bg-black bg-opacity-70 h-48 flex rounded-xl">
            <span className="text-white text-xl px-8 py-4"> Idioma </span>
          </div> 
        </div>
        <div className=" h-48 rounded-xl bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${performance})` }}>
          <div className="bg-black bg-opacity-70 h-48 flex rounded-xl">
            <span className="text-white text-xl px-8 py-4"> Rendimiento </span>
          </div> 
        </div>
        <div className=" h-48 rounded-xl bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${updates})` }}>
          <div className="bg-black bg-opacity-70 h-48 flex rounded-xl">
            <span className="text-white text-xl px-8 py-4"> Actualizaciones </span>
          </div> 
        </div>
      </div>
    </section>
  )
}
