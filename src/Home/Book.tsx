import { useNavigate } from "react-router-dom"
export default function Book()
{
    const navig = useNavigate();
return(
<div className="container mx-auto text-center py-8">
    <h2 className="font-bold text-3xl mb-5">Upto 50% Off</h2>
    <p className="mb-5 text-sm text-ligh_black leading-8 w-10/12 mx-auto">Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy simply dummy text typesetting industry</p>
    <button onClick={()=>navig('/book')} className="bg-black text-white px-4 pt-1 pb-2 hover:bg-main duration-300">Book Now</button>
</div>
)
}