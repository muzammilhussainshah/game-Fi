import './index.scss';
import ButnField from '../../components/ButnField';
import product from '../../mock/product';
import About from '../About';
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg_img_prdt'>
                <div className="bg_img_prdt-Heading">
                    <h1>THE CRYPTO PROPHECIES</h1>
                    <p>
                        A decentralised peer-to-peer price prediction game that has NFT characters.
                        Players go head-to-head and battle it out over the trading candles, predicting how each one will close.
                        It's a wager based game and it's against the clock, so be quick and watch out for your opponents magic
                        spells!
                    </p>
                </div>
                <div className='bg_img_prdt_btn'>
                    <ButnField title="LEARN MORE" className="home_btn" onClick={() => navigate("/about")}/>
                </div>
            </div>
            <div className='prdt_vid_container'>
                <div className='vid'>
                    <img src={`/assets/prdt_vid.png`} />
                </div>
                <div>
                    <img className='prdt_sidebar' src={`/assets/prdt_slider.png`} />
                </div>
                <div className="product_container">
                {
                    product.map((item) => (

                        <div key={item.id} className="product_div">
                            {/* {<div > */}
                               { <img className="product_img" src={`${window.location.origin}/${item.image}`} />}
                            {/* </div>} */}
                            <div className='content'>
                                <h1 className="name">{item.name}</h1>
                            </div>
                        </div>)
                    )}
            </div>
            </div>
        </>
    )
}
export default Products;