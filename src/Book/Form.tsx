import { useForm,SubmitHandler } from "react-hook-form";
type vars=
{
    name:String,
    email:string,
    phone:string,
    address:string,
    place:string,
    guests:string
    arrival:String,
    leaving:string
}
export default function Form()
{
    const { register, handleSubmit} = useForm<vars>();
    const onSubmit :SubmitHandler<vars>= data => console.log(data);
    return(
        <form className="mb-8 bg-light_bg p-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col text-left">
                <label className="mb-3 text-ligh_black">Full Name :</label>
                <input placeholder="enter your name" {...register('name')} className="border border-black p-2 focus:bg-black outline-none"/>
            </div>
            <div className="flex flex-col text-left">
                <label className="mb-3 text-ligh_black">Email :</label>
                <input placeholder="enter your email" {...register('email')} className="border border-black p-2 focus:bg-black outline-none"/>
            </div>
            <div className="flex flex-col text-left">
                <label className="mb-3 text-ligh_black">Phone :</label>
                <input placeholder="enter your number" {...register('phone')} className="border border-black p-2 focus:bg-black outline-none"/>
            </div>
            <div className="flex flex-col text-left"> 
                <label className="mb-3 text-ligh_black">Address :</label>
                <input placeholder="enter your address" {...register('address')} className="border border-black p-2 focus:bg-black outline-none"/>
            </div>
            <div className="flex flex-col text-left">
                <label className="mb-3 text-ligh_black">Where To :</label>
                <input placeholder="place you want to visit" {...register('place')} className="border border-black p-2 focus:bg-black outline-none"/>
            </div>
            <div className="flex flex-col text-left">
                <label className="mb-3 text-ligh_black">How Many :</label>
                <input placeholder="number of guests" {...register('guests')} className="border border-black p-2 focus:bg-black outline-none"/>
            </div>
            <div className="flex flex-col text-left">
                <label className="mb-3 text-ligh_black">Arrival :</label>
                <input {...register('arrival')} type="date" className="border border-black p-2 focus:bg-black outline-none"/>
            </div>
            <div className="flex flex-col text-left">
                <label className="mb-3 text-ligh_black">Leaving :</label>
                <input {...register('leaving')} type="date" className="border border-black p-2 focus:bg-black outline-none"/>
            </div>
            </div>
           <div className="text-left">
           <input type="submit" value="Save" className="bg-black mt-3 text-white px-5 pt-1 pb-2 hover:bg-main duration-300"/>
           </div>
        </form>
    )
}