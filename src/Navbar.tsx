import { useState } from "react"
import { Link } from "react-router-dom"
export default function Navbar()
{
    const [change,setChange] = useState(false)
    return(
    <div className=" bg-white fixed top-0 left-0 right-0 z-10 w-full ">
    <nav className="flex items-center justify-between flex-wrap p-6 container mx-auto">
   <div className="flex items-center flex-shrink-0 text-white mr-6">
    <span className="font-semibold tracking-tight text-ligh_black text-2xl"> Travel.</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded"
    onClick={()=>setChange(back=>!back)}>
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${!change?"hidden":"block"} justify-end`}>
    <div className={`text-sm lg:flex-grow}`}>
      <Link to={'/'} className="block mt-4 lg:inline-block lg:mt-0 text-ligh_black mr-5  font-semibold text-base hover:text-main duration-150	">
        Home
      </Link>
      <Link to={'/about'}  className="block mt-4 lg:inline-block lg:mt-0 text-ligh_black mr-5 font-semibold  text-base hover:text-main duration-150	">
        About
      </Link>
      <Link to={'/packages'}  className="block mt-4 lg:inline-block lg:mt-0  text-ligh_black mr-5 font-semibold  text-base hover:text-main duration-150	">
        Packages
      </Link>
      <Link to={'/book'}  className="block mt-4 lg:inline-block lg:mt-0 text-ligh_black mr-5 font-semibold  text-base hover:text-main duration-150	">
        Book
      </Link>
    </div>
    <div>
    </div>
  </div>
</nav>
</div>
    )
}