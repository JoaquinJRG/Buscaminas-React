import { useState, useEffect } from "react";

export function Cell({children, setGameOver, newCover, coverMatrix ,setCoverMatrix, i, j, revealEmptyCells}) {

  const [flag, setFlag] = useState(""); 

  const addFlag = (event) => {
    event.preventDefault(); 
    if (flag === "") {
      setFlag("🚩"); 
    } else {
      setFlag(""); 
    }
  }

  const handleClick = () => {

    if (children === "💥") {
      setGameOver(true); 
    }

    revealEmptyCells(i,j); 
  }

  const addColor = (children) => {
    if (children === 1) return "blue";
    if (children === 2) return "green";
    if (children === 3) return "red";
    if (children >= 4 ) return "purple"; 
  }

  return (
    <div className="flex justify-center items-center bg-white border border-gray-300 rounded-md w-10 h-10 select-none text-2xl">
      {newCover && 
      <div 
        onContextMenu={addFlag} 
        onClick={handleClick} 
        className="flex justify-center items-center bg-gray-300 w-10 h-10 z-10 rounded-md absolute cursor-pointer hover:bg-gray-400">
        {flag}
      </div>}
      <span className="text-2xl" style={{color: addColor(children)}}>{children === 0 ? "" : children}</span>
    </div>
  )
}