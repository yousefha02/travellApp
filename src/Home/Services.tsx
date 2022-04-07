import { useState } from "react"
import Data from "../Data"
import Service from "./Service"
export default function Services()
{
    const [info,setInfo]= useState(Data[0].serivce)

    return(
        <div className="services text-center container mx-auto py-10 xl:px-10">
            <h2 className=" uppercase text-4xl font-bold mb-10">Our Serivces</h2>
            <div className="grid md:grid-cols-6 gap-3 sm:grid-cols-3 grid-cols-2">
                {
                    info.map((box,index)=><Service {...box} key={index}/>)
                }
            </div>
        </div>
    )
}