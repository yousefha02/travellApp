import { useState } from "react"
import Data from "../Data"
import Package from "./Package"
import { useNavigate } from "react-router-dom"
export default function Packages()
{
    const [data,setData] = useState(Data[0].Packages)
    const navig = useNavigate();
    return(
        <div className="services text-center py-10 xl:px-10 bg-light_bg">
            <h2 className="uppercase text-4xl font-bold mb-10">Our Packages</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
            {
            data.slice(0,3).map((box,index)=><Package {...box} key={index}/>)
            }
        </div>
        <button onClick={()=>navig('/packages')} className="bg-black text-white px-4 pt-1 pb-2 hover:bg-main duration-300 mt-6">Load More</button>
        </div>
    )
}