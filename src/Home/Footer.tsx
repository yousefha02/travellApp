import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import img from '../images/footer-bg.jpg'


const styles = 
{
    backgroundImage:`url(${img})`
}

export default function Footer()
{
    return(
        <footer style={styles} className="py-8">
            <div className='container mx-auto text-white grid md:grid-cols-4 sm:grid-cols-2 px-4 xl:px-10 '>
                <div>
                    <h3 className='mb-5 font-semibold text-xl'>Quick Links</h3>
                    <ul>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faAngleRight} className="text-main mr-2"/>
                            Home
                        </li>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faAngleRight} className="text-main mr-2"/>
                            About
                        </li>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faAngleRight} className="text-main mr-2"/>
                            Package
                        </li>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faAngleRight} className="text-main mr-2"/>
                            Book
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-5 font-semibold text-xl'>Extra Links</h3>
                    <ul>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faAngleRight} className="text-main mr-2"/>
                            Need Help?
                        </li>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faAngleRight} className="text-main mr-2"/>
                            About Us
                        </li>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faAngleRight} className="text-main mr-2"/>
                            Privacy Policy
                        </li>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faAngleRight} className="text-main mr-2"/>
                            Terms Of Use
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-5 font-semibold text-xl'>Contact Info</h3>
                    <ul>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faPhone} className="text-main mr-2"/>
                            +123-456-789
                        </li>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faPhone} className="text-main mr-2"/>
                            +111-222-333
                        </li>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faEnvelope} className="text-main mr-2"/>
                            yousef@gmail.com
                        </li>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faAddressCard} className="text-main mr-2"/>
                            Palestine-Gaza
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-5 font-semibold text-xl'>Contact Info</h3>
                    <ul>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faPhone} className="text-main mr-2"/>
                            Facebook
                        </li>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faPhone} className="text-main mr-2"/>
                            Twitter
                        </li>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faEnvelope} className="text-main mr-2"/>
                            Instgrame
                        </li>
                        <li className='text-sm text-ligh_white mb-3'>
                            <FontAwesomeIcon icon={faAddressCard} className="text-main mr-2"/>
                            Palestine-Gaza
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}