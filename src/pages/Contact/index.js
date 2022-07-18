import './index.scss';
import ButnField from '../../components/ButnField';

const Contact = () => {
    return (
        <>
            <div className='bg_img_contact'>
                <div className="bg_img_contact-Heading">
                    <h1>CONTACT</h1>
                    <p>
                        Want to team up or partner with us, or want to experiment on something new?
                        Send us a message and lets talk.
                    </p>
                </div>
                <div className='contact_container'>
                    <input type="text" className='form-group' placeholder="Your name" />
                    <input type="email" className='form-group' placeholder="myemail@domain.com" />
                    <input type="text" className='form-group' placeholder="Subject" />
                    <textarea className='form-group' rows="5" placeholder="Type your message"></textarea>
                    <div className='btn'>
                        <button type="submit">SEND</button>
                    </div>
                </div >
            </div >
        </>
    )
}
export default Contact;