

import './footer.css'

function Footer() {
    return (
        <footer className="portfolio-footer">
            <ul className="nav">
                <li className="nav-item">
                    <a
                        href="#/"
                        onClick={() => ('')}
                    >
                        GitHub
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#/"
                        onClick={() => ('')}
                    >
                        LinkedIn
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#/"
                        onClick={() => ('')}
                    >
                        Instagram
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;