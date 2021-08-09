import { useState } from 'react';
import NavTabs from './Nav';
import Bio from './pages/Bio';
import Apps from './pages/Apps';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import '../App.css'

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
      <div>
        <Footer />
      </div>
    </>
  );


}
