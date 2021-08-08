import { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import Bio from './pages/Bio';
import Apps from './pages/Apps';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './portfolioContainer.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Bio');

  const renderPage = () => {

    if (currentPage === 'Bio') {
      return <Bio />;
    }
    if (currentPage === 'Apps') {
      return <Apps />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );


}
