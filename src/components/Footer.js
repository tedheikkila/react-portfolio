

import '../App.css'

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
                        GitHub
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="https://www.linkedin.com/in/ted-heikkila-96b60520b/"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => ('')}
                    >
                        LinkedIn
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;