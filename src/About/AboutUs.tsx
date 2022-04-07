import Header from '../Header'
import image from '../images/header-bg-1.png'
import image2 from '../images/about-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import Clients from './Clients'
export default function AboutUs()
{
    return(
        <div>
            <Header image={image} title={"About Us"} />
            <div className='container mx-auto py-8 xl:px-10 grid xl:grid-cols-2 items-center'>
                <img src={image2}/>
                <div className='text-center p-5'>
                    <h2 className='text-3xl mb-3'>Why Choose Us?</h2>
                    <p className='text-sm text-ligh_black leading-7 mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                    <p className='text-sm text-ligh_black leading-7 mb-5'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>
                    <div className='grid grid-cols-3 gap-3'>
                        <div className='bg-light_bg flex flex-col py-5'>
                        <FontAwesomeIcon icon={faMap} className="text-main text-4xl mb-3"/>
                        <span>Best Destinations</span>
                        </div>
                        <div className='bg-light_bg flex flex-col py-5'>
                        <FontAwesomeIcon icon={faHandHoldingUsd}  className="text-main text-4xl mb-3"/>
                        <span>Affordable Prices</span>
                        </div>
                        <div className='bg-light_bg flex flex-col py-5'>
                        <FontAwesomeIcon icon={faHeadset} className="text-main text-4xl mb-3"/>
                        <span>24/7supports</span>
                        </div>
                    </div>
                </div>
            </div>
            <Clients/>
        </div>
    )
}