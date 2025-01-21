import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation();
  return (
    <nav>
      <Link to="/" className={currentPage.pathname === "/" ? "nav-Link active" : "nav-link"}>
        
          Home
        
      </Link>
      <Link to="/SavedCandidates" className={currentPage.pathname === '/SavedCandidates' ? "nav-link active" : "nav-link"}>
        
         Potential Candidates
        
      </Link>
    </nav>
  )
};

export default Nav;
