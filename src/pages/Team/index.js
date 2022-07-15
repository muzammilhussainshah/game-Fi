import './index.scss';
import ButnField from '../../components/ButnField';
import team from '../../mock/team';

const Team = () => {
    console.log(window.location.origin)
    return (
        <>
            <div className='bg_img'>
                <div className="bg_img_abt-Heading">
                    <h1>OUR TEAM</h1>
                    <p>
                        We’re a multi-disciplined team of highly skilled, passionate professionals from around the world.
                        Individually we bring something unique to the team so that collectively we can inspire and innovate.
                    </p>
                </div>
                <div className='bg_img_btn'>
                    <ButnField title="CAREERS" className="home_btn" />
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