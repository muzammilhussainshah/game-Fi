import ButnField from '../../components/ButnField';
import './index.scss';
import About from '../About';
import Products from '../Products';
import News from '../News';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='Home'>
                <div className='bg_img'>
                    <div className="bg_img_heading">
                        <h1>WE CREATE  BLOCKCHAIN GAMES </h1>
                        <h6 className="p-img" >NFT <span> &</span> GameFi</h6>
                        <h1 className='earn'>PLAY-to-Earn  </h1>
                    </div>
                    <div className='bg_img_btn'>
                        <ButnField title="ABOUT US" className="home_btn" onClick={() => navigate("/about")}/>
                        <ButnField title="OUR PRODUCTS" className="home_btn" onClick={() => navigate("/products")}/>
                    </div>
                </div>
                <div className='latest_detail'>
                    <div className='post'>
                        <h3 className='latest_detail_heading'>LATEST POSTS</h3>
                        <div className='post_div'>
                            <img className='images' src={`/assets/animoca.png`} />
                            <div>
                                <h4>Thunderball Players Earn Over $700 A Week</h4>
                                <p>Animoca Brands, a crypto software and venture
                                    capital firm, announced the acquisition of Notre Game,
                                    a gaming company that mixes physical and digital things into its products, on Friday.</p>
                                <a>READ MORE</a>
                            </div>
                        </div>
                        <div className='post_div'>
                            <img className='images' src={`/assets/sandbox.png`} />
                            <div>
                                <h4>Thunderball Players Earn Over $700 A Week</h4>
                                <p>The Sandbox Announces Multiple Hong Kong Partnerships to Create Mega City in the Metaverse.</p>
                                <a>READ MORE</a>
                            </div>
                        </div>
                        <div className='post_div'>
                            <img className='images' src={`/assets/park.png`} />
                            <div>
                                <h4>NFT Games at Theme Parks: Ocean Park Hong Kong</h4>
                                <p>For the upcoming season, when Ocean Park Hong Kong celebrates its 45th anniversary,.</p>
                                <a>READ MORE</a>
                            </div>
                        </div>
                        <ButnField title="VIEW ALL POSTS" className="post_btn" onClick={() => navigate("/news")}/>
                    </div>
                    <div className='coverage'>
                        <h3 className='latest_detail_heading'>LATEST COVERAGE</h3>
                        <div className='coverage_div'>

                            <p className='heading'>GAMING TOKENS CONTINUE TO OUTPERFORM, WILL INVESTORS KEEP BULLISH ON AXS?</p>
                            <p className='para'>The Crypto Prophecies is probably one of the most approachable entries into the world of blockchain
                                gaming. It centers around price prediction, a simple concept, but incorporates aspects such as NFTs in the 
                                form of unique Crypto Prophets. For newcomers, this is likely an ideal starting point.</p>
                            <a>READ MORE</a>
                        </div>
                        <div className='coverage_div'>

                            <p className='heading'>THE CRYPTO PROPHECIES: PRICE PREDICTION TRADING WITH NFTS</p>
                            <p className='para'>The NFT-based price prediction game, The Crypto
                                Prophecies is looking to capitalize on both, combining the benefits of a rapidly growing interest in NFT collectibles
                                and a form of gamified peer-to-peer trading in one of the
                                most exciting frontiers of the crypto space...</p>
                            <a>READ MORE</a>
                        </div>
                        <ButnField title="VIEW ALL COVERAGES" className="coverage_btn" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;