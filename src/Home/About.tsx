import img from '../images/about-img.jpg'
import { useNavigate } from 'react-router-dom'
export default function About()
{
    const navig = useNavigate()

    return(
        <div className="container mx-auto py-8 xl:px-10 grid md:grid-cols-2 items-center">
            <img src={img}/>
            <div className='bg-light_bg p-5'>
                <h3 className=' text-2xl font-semo mb-3'>About Us</h3>
                <p className='mb-5 text-sm text-ligh_black leading-8'>Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy simply dummy text typesetting industry</p>
                <button onClick={()=>navig('/about')} className='bg-black text-white px-4 pt-1 pb-2 hover:bg-main duration-300'>Read More</button>
            </div>
        </div>
    )
}