import { useState } from "react"
import { Board } from "./components/Board"
import { Button } from "./components/Button";

function App() {

  const [play, setPlay] = useState(false);

  return (
    <main className="m-auto min-h-screen flex flex-col justify-start items-center">
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <h1 className="text-3xl font-bold my-10 ">Buscaminas 💣 </h1>
      <section className="flex items-center mb-4">
        {!play && <Button clickFunction={() => setPlay(true)}>Jugar</Button>}
      </section>
      {play && <Board rows={9} cols={9} mines={10} setPlay={setPlay}/>}

    </main>
  )
}

export default App
