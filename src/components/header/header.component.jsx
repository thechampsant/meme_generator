import "./header.scss"
import Logo from '../../assets/img/meme.png';
import Photo from '../../assets/img/profile.jpg'

const header = () => (
    <div className="header">
        <div className="header__logo">
            <img src={Logo} alt="logo" className="header__logo-pic" />
        </div>
        <nav className="header__navigation">
            <ul className="header__navigation-list">
                <li className="header__navigation-item"><a href="#" className="header__navigation-link">Home</a></li>
                <li className="header__navigation-item"><a href="#popup_about" className="header__navigation-link">About</a></li>
                <li className="header__navigation-item"><a href="#" className="header__navigation-link">Social</a></li>
            </ul>      
        </nav>
        <div className="popup_about" id="popup_about">
            <div className="popup_about-box">
                <div className="popup_about-close">
                    <a href="#">&times;</a>
                </div>
                <div className="left">
                    <img src={Photo} alt="photo" className="popup_about-profile" />
                </div>
                <div className="right">
                    <h1>Hi! My name is Santosh and my pronouns are He/Him. I am a Computer Science & Engineerng graduate from SRM Institute of Science and Technology, securing 75.38%. Coding is my passion. Apart from coding and development I do indulge myself in several other activites such as watching IMDb top rated movies or series or making beautiful latte arts.</h1>
                </div>
            </div>
        </div>
    </div>
)

export default header;