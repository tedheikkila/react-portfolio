import '../App.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="header">
      <h2 className="name-title">
        Ted Heikkila
      </h2>
      
      <ul className="nav nav-list justify-content-center">
        <li className="nav-item">
          <a
            href="#bio"
            onClick={() => handlePageChange('Bio')}
            className={currentPage === 'Bio' ? 'nav-link disabled' : 'nav-link'}
          >
            Bio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Apps"
            onClick={() => handlePageChange('Apps')}
            className={currentPage === 'Apps' ? 'nav-link disabled' : 'nav-link'}
          >
            Apps
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link disabled' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}

            className={currentPage === 'Resume' ? 'nav-link disabled' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
