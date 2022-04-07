type vars =
{
    image:string,
    title:string
}

export default function Home(props:vars)
{
    const styles = 
    {
        backgroundImage:`url(${props.image})`
    }

    return(
        <div className="box bg-cover bg-center" style={styles}>
            <div className="flex justify-center items-center flex-col h-[80vh] text-center">
                <p className=" text-ligh_white">Explore,Discover,Travel</p>
                <h1 className="text-6xl lg:text-7xl font-bold md:w-8/12 text-white mb-5 uppercase" >{props.title}</h1>
                <button className=" bg-black/60 text-white px-4 py-1">Discover Tour</button>
            </div>
        </div>
    )
}