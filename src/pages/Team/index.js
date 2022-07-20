import './index.scss';
import ButnField from '../../components/ButnField';
import team from '../../mock/team';
import Career from '../Careers';
import { useNavigate } from "react-router-dom";

const Team = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg_img_team'>
                <div className="bg_img_team_heading">
                    <h1>OUR TEAM</h1>
                    <p>
                        We’re a multi-disciplined team of highly skilled, passionate professionals from around the world.
                        Individually we bring something unique to the team so that collectively we can inspire and innovate.
                    </p>
                </div>
                <div className='bg_img_team_btn'>
                    <ButnField title="CAREERS" className="home_btn" onClick={() => navigate("/career")}/>
                </div>
            </div>
            <div className="team_container">
                {
                    team.map((item) => (

                        <div key={item.id} className="team_div">
                            {<div >
                                <img className="team_img" src={`${window.location.origin}/${item.image}`} />
                            </div>}
                            <div className='content'>
                                <h1 className="name">{item.name}</h1>
                                <p className='title'>{item.title}</p>
                            </div>
                        </div>)
                    )}
            </div>

        </>
    )
}
export default Team;