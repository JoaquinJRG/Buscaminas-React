export function Button({ children, clickFunction, color }) {
  
  return (
    <button
      onClick={clickFunction}
      className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600
            border-b-[4px] hover:brightness-110 active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
    >
      {children}
    </button>
  )
}