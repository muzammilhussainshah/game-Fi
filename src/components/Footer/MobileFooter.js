import ButnField from '../ButnField';
import './index.scss';

const MobileFooter = () => {
    return (
        <>
            <div className='main_footer'>
                <h1>GET OUR LATEST UPDATES AND NEWS FIRST</h1>
                <input type="text" placeholder='Enter your email' className="footer-input" />
                <ButnField title="SUBSCRIBE" className="footer_btn" />
            </div>
            <div className="footer_Mob">
                <img className='footer_Mob_logo' src={`/assets/logo.png`} />
                <div className='footer_sidebar'>
                    <img className='footer_Mob_icons' src={`/assets/socialIcons.png`} />
                    <p className="footer_Mob_para">Copyright ©2022 HK Gamefi Association, Inc.</p>
                    <p className="footer_Mob_para">Privacy Policy</p>
                </div>
            </div>
        </>
    )
}
export default MobileFooter;