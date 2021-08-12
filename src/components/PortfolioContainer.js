import { useState } from 'react';
import NavTabs from './Nav';
import Bio from './pages/Bio';
import Apps from './pages/Apps';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import '../App.css'

// injects proper page component using currentPage
export default function PortfolioContainer() {
  // default/home page set to Bio page
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

  // changes to different page
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
