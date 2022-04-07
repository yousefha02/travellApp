import Header from '../Header'
import image from '../images/header-bg-3.png'
import Form from './Form'
export default function BookNow()
{
    return(
        <div>
            <Header image={image} title="Book Now"/>
            <div className='container mx-auto xl:px-10 text-center'>
            <h2 className='uppercase text-5xl font-bold mb-2 py-9'>Book Your Trip!</h2>
            <Form/>
            </div>
        </div>
    )
}