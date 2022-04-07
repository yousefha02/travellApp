import img from '../images/header-bg-2.png'
import Header from '../Header'
import Data from '../Data'
import Package from '../Home/Package'
import { useState } from 'react'
type vars=
{
    img:string,
    desc:String,
    title:string
}
export default function Pack()
{
    const [info,setInfo] = useState(Data[0].Packages)
    const [part,setPart]= useState(info.slice(0,6))
    const [cond,setCond] = useState(true)

    function click()
    {
        const len = part.length
        setPart(info.slice(0,len+3))
        len==info.length-3?setCond(false):setCond(true)
    }
    return(
        <div>
            <Header image={img} title="Packages"/>
            <div className='container mx-auto text-center xl:px-10'>
                <h2 className='uppercase text-5xl font-bold mb-10 py-9'>Top Destinations</h2>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto mb-6'>
                    {
                    part.map((box,index)=><Package {...box} key={index}/>)
                    }
                </div>
                {cond&&<button onClick={click} className="bg-black text-white px-4 pt-1 pb-2 hover:bg-main duration-300 mb-6">Load More</button>}
            </div>
        </div>
    )
}