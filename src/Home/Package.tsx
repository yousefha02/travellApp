import AOS from 'aos';
import 'aos/dist/aos.css';
type vars=
{
    img:string,
    desc:String,
    title:string
}
export default function Package(props:vars)
{
    AOS.init();

    return(
        <div className="border border-black pb-4" data-aos="zoom-in-up">
            <div className="overflow-hidden mb-4">
                <img src={props.img} className="duration-300 hover:scale-110 w-full"/>
            </div>
            <h3 className="font-bold text-2xl">{props.title}</h3>
            <p className="mb-5 text-sm text-ligh_black leading-8 w-10/12 mx-auto">{props.desc}</p>
            <button className="bg-black text-white px-4 pt-1 pb-2 hover:bg-main duration-300">Book Now</button>
        </div>
    )
}