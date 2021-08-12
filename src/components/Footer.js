
import '../App.css'

// footer w/GitHub and LinkedIn icons
function Footer() {
    return (
        <footer className="portfolio-footer">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a
                        href="https://github.com/tedheikkila"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => ('')}
                    >
                        <img id="nav-icon" src="./assets/icons/github.png" width="60" height="60" alt="GitHub Profile" />
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="https://www.linkedin.com/in/ted-heikkila-96b60520b/"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => ('')}
                    >
                        <img id="nav-icon" src="./assets/icons/linkedin.png" width="60" height="60" alt="LinkedIn Profile" />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;