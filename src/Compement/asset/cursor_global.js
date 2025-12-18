import { useEffect, useState } from "react"
import explore from "../../assets/ICONE/explore.png"
export default function Cursor({ isHovering , text, title }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
  className={`fixed top-0 left-0 z-[9999] pointer-events-none
              flex items-center justify-center
              transition-all duration-300 ease-out
              ${isHovering 
                ? "w-1/3 p-4 rounded-3xl bg-white  scale-110" 
                : "w-6 h-6 border border-yellow-400 rounded-full scale-100"}`
  }
  style={{
    transform: `translate(${pos.x - (isHovering ? 56 : 12)}px, ${pos.y - (isHovering ? 56 : 12)}px)`
  }}
>
  {isHovering && (
<div className="flex flex-col" >
   <h2 className="text-center font-semibold  text-xl"> {title} </h2> 
    <p className="text-black text-lg tracking-wider select-none pointer-events-none text-center">
   {text}
    </p> 
    
    </div>
  )}
</div>

  )
}
