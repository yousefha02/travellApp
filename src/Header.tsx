type vars =
{
    image:string,
    title:string
}
export default function Ahome(props:vars)
{
    const styles =
    {
        backgroundImage:`url(${props.image})`
    }
    return(
        <div style={styles} className="h-[70vh] pt-20 bg-center bg-no-repeat bg-cover flex items-center justify-center">
            <h2 className="text-white text-7xl sm:text-8xl font-bold ">{props.title}</h2>
        </div>
    )
}