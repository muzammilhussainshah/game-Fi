import './index.scss';
import ButnField from '../../components/ButnField';

const Blog = () => {
    return (
        <>
            <div className='bg_img_blog'>
                <div className="bg_img_blog-heading">
                    <h1>BLOG</h1>
                    <p>
                        Find out how GameFi connect the world through blockchain gaming
                    </p>
                </div>
                <div className='bg_img_btn'>
                    <img className="blog_icons" src={`/assets/blogIcon.png`} />
                </div>
            </div>
        </>
    )
}
export default Blog;