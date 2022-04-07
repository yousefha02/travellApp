type vars =
{
    img:string,
    title:string
}
export default function Service(props:vars)
{
    return(
        <div className="bg-main p-3 hover:bg-black duration-100">
            <img src={props.img} className="mx-auto mb-3"/>
            <h4 className="text-white font-semibold">{props.title}</h4>
        </div>
    )
}