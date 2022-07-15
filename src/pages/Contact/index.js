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
                {/* <div className='container-fluid bg'>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type="text" className='form-group' placeholder="Enter Name" />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="email" className='form-group' placeholder="Enter Email" />
                    </div>
                    <div className='form-group'>
                        <label>Subject of this message</label>
                        <input type="text" className='form-group' placeholder="Subject" />
                    </div>
                    <div className='form-group'>
                        <label>Message</label>
                        <textarea className='form-group' rows="5" placeholder="Type Message"></textarea>
                    </div>
                    <div className='form-group'>
                        <button type="submit" className='btn btn-primary btn-block'>Send</button>
                    </div >
                </div > */}
            </div >
        </>
    )
}
export default Contact;