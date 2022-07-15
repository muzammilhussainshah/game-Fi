import ButnField from '../ButnField';
import './index.scss';

const ScreenFooter = () => {
    return (
        <>
            <div className='main_footer'>
                <h1>GET OUR LATEST UPDATES AND NEWS FIRST</h1>
                <input type="text" placeholder='Enter your email' className="footer-input" />
                <ButnField title="SUBSCRIBE" className="footer_btn" />
            </div>
            <div className="footer">
                <div>
                    <img className='footer_logo' src={`/assets/logo.png`} />
                </div>
                <img className='footer_icons' src={`/assets/socialIcons.png`} />
                <div></div>
                <div className="footer_para">
                    <p>Copyright ©2022 HK Gamefi Association, Inc.</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </>
    )
}
export default ScreenFooter;