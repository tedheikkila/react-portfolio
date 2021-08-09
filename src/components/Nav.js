import '../App.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="header">
      <h2 className="name-title">
        Ted Heikkila
      </h2>
      
      <ul className="nav nav-list">
        <li className="nav-item">
          <a
            href="#bio"
            onClick={() => handlePageChange('Bio')}
            className={currentPage === 'Bio' ? 'nav-link active' : 'nav-link'}
          >
            Bio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Apps"
            onClick={() => handlePageChange('Apps')}
            className={currentPage === 'Apps' ? 'nav-link active' : 'nav-link'}
          >
            Apps
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}

            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
