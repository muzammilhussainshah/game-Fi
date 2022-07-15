import './index.scss';
import ButnField from '../../components/ButnField';
import values from '../../mock/values';

const About = () => {
    return (
        <>
                <div className='bg_img_abt'>
                    <div className="bg_img_abt-Heading">
                        <h1>ABOUT GAMEFI</h1>
                        <p>
                            An independent Blockchain game development studio with a passion for
                     creating financial gaming products and player owned economies
                        </p>
                    </div>
                    <div className='bg_img_abt_btn'>
                        <ButnField title="OUR TEAM" className="home_btn" />
                    </div>
                </div>
                <div className='mission'>
                    <h1>OUR MISSION</h1>
                    <p>
                        To accelerate Blockchain adoption through financial gaming and give
                        <br /> players true ownership of the economy and their items.
                    </p>
                </div>
                <div className='vision'>
                    <h1>OUR VISION</h1>
                    <p>
                        We aim to create a world where players can invest their time and money into gaming,
                        rather than simply spending it.<br />We want to make investing a game that anyone can win.
                    </p>
                </div>
                <div className='values'>
                    <h1>OUR VALUES</h1>
                    <div className="values_container">
                        {
                            values.map(values => <div className="values_div">
                                <div className='values_heading'>
                                    <h4 className="values-title">{values.name}</h4>
                                    <img className='sideLogo' src={`/assets/side.png`} />
                                </div>
                                <p className='values-para'>{values.para}</p>
                            </div>)
                        }
                    </div>
                </div>
        </>
    )
}
export default About;