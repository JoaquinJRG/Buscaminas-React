import { Button } from "./Button"

export function Modal ({ text, clickFunction }) {
  return (
    <section className="flex justify-center items-center absolute z-10 top-0 bottom-0 left-0 right-0 border bg-black/80" >
      <div className="flex flex-col justify-center items-center gap-5 z-20 bg-white p-16 border rounded-xl">
        <h1>{text}</h1>
        <Button clickFunction={clickFunction}>Volver a jugar</Button>
      </div>
    </section>
  )
}