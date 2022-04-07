import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

type vars =
{
    image:string,
    stars:number,
    desc:string,
    name:String,
    job:string
}

export default function Client(props:vars)
{
    let content =[];
    for(let i=0; i<props.stars; i++)
    {
        content.push(i)
    }   

    return(
        <div className='bg-white border border-black p-5'>
            <div className='icons'>
                {
                 content.map(box=><FontAwesomeIcon icon={faStar} className="text-main"/>)
                }
            </div>
            <p className='mb-4 text-sm text-ligh_black leading-6'>{props.desc}</p>
            <h2 className=''>{props.name}</h2>
            <h4 className='text-main mb-3'>{props.job}</h4>
            <img src={props.image} className=" w-20 rounded-full mx-auto"/>
        </div>
    )
}