import './index.scss';
import ButnField from '../../components/ButnField';
import career from '../../mock/career';

const Career = () => {
    return (
        <>
            <div className='bg_img_career'>
                <div className="bg_img_career-Heading">
                    <h1>CAREERS</h1>
                    <p>
                        We are always looking for exceptional talent to join our team.
                        If you believe you can bring something new to the table and inspire us, then drop us an email and tell us how.
                    </p>
                </div>
                <div className='bg_img_career_btn'>
                    <ButnField title="CONTACT US" className="home_btn" />
                </div>
            </div>
            <div className='career'>
                <div className="career_container">
                    {
                        career.map(career => <div className="career_div">
                            <div className='career_heading'>
                                <h4 className="career-title">{career.name}</h4>
                                <img className='sideLogo' src={`/assets/side.png`} />
                            </div>
                            <p className='career-para'>{career.para}</p>
                            <p className='career-para'>{career.para2}</p>
                        </div>)
                    }
                </div>
            </div>

        </>
    )
}
export default Career;