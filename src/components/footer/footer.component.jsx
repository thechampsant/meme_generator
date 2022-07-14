import './footer.scss';

const footer = () => (
    <footer className="footer">
        <nav className="footer__navigation">
            <ul className="footer__navigation-list">
                <li className="footer__navigation-item"><a href="#" className="footer__navigation-link">Home</a></li>
                <li className="footer__navigation-item"><a href="#popup_about" className="footer__navigation-link">About</a></li>
                <li className="footer__navigation-item"><a href="#" className="footer__navigation-link">Socials</a></li>
            </ul>
        </nav>
        <div className="footer__copyright">
            All rights resevered &copy; This site is built by Santosh Kumar Prasad
        </div>
    </footer>
)

export default footer;