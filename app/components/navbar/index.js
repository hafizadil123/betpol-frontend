import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const constTypes = {
      political: 'politica-nacional',
      politicalRegional: 'political-regional',
      politicalInternational: 'politica-internacional',
      otros: 'otros'

    }
    return ( 
        <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light nav-2">
  <div className="container">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link sec px-3 temas" to="#">Temas</Link>
        <Link className="nav-link sec px-3" to={`/contests/${constTypes.political}`}>Politica Nacional</Link>
        <Link className="nav-link sec px-3" to={`/contests/${constTypes.politicalRegional}`}>Political Regional</Link>
        <Link className="nav-link sec px-3" to={`/contests/${constTypes.politicalInternational}`}>Politica Internacional</Link>
        <Link className="nav-link sec px-3" to={`/contests/${constTypes.otros}`}>Otros</Link>
      </div>
    </div>
  </div>
</nav>

        </>
      );
}
 
export default NavBar;