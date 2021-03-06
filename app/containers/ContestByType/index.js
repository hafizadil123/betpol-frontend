/**
 *
 * ContestByType
 *
 */

import React from 'react';
import CardImage from '../../assets/img/card-1.png';
import { useApi } from '../../components/customHooks/useApi';

export default function ContestByType({ history }) { 
  


  const { location: { pathname = '' } = {}  } = history || {}; 
  const type = pathname.split('/')[2] || '';
  const url = `/admin/contests-type/${type}`;
  const [data] = useApi(url, false, { method: 'GET' });
  const { responseData } = data || {};
  const { contestDetails } = responseData || {}

  const getClass = (explantion) => {
    if (explantion === 'SI') {
        return {
            class: 'si',
            color: '#3867E7'
        }
    }
    return {
        class: 'no',
        color: '#EC3D3C'
    }
}

  return (
    <>
     <div>
  <div className="container mt-3 mb-3">
    <div className="row">
      {/* <nav className="navbar navbar-expand-lg navbar-light nav-3">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav navbar-3 ms-auto">
              <a className="nav-link px-3 disabled" style={{color: 'grey !important'}} href="#"><i className="bi bi-filter-square" />&nbsp; Filtrar por</a>
              <div className="dropdown">
                <a className="nav-link px-3 dropdown-toggle " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" href="#">Fecha creación</a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div className="dropdown">
                <a className="nav-link px-3 dropdown-toggle brdr" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" href="#">Volumen transacciones</a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div className="dropdown">
                <a className="nav-link px-3 dropdown-toggle " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" href="#">Finalización</a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
    </div>
  </div>
  {/*navbar 3 ends*/}
  {/*body*/}
  <div className="container">
    <div className="row">
      {contestDetails && contestDetails.length === 0  && <h5>Contests Not Found :)</h5>}
        {contestDetails && contestDetails.length > 0 && contestDetails.map(item => 
          <div className="col col-lg-4 col-md-3 col-sm-12">
          <div className="card mb-3 pb-3">
          <div className="row g-0">
            <div className="col-md-7">
              <div className="card-body">
                <h6 className="card-title">{item.explanation || 'Será vacado el Gabinete Bellido en el 2022?'}</h6>
                {/* <span className="badge rounded-pill bg-light text-dark p-2" style={{marginTop: 55}}>245K apuestas</span> */}
              </div>
            </div>
            <div className="col-md-5">
              <div className="card-body text-end p-2">
                <img style={{height: '100px'}} src={ item.urlPicture || CardImage} className="img-fluid rounded-start" alt="..." />
              </div>  
            </div>
          </div>
          <div className="row g-0 text-center p-2 px-2">
            <div className="btn-group" role="group" aria-label="Basic example">
            {item.options && item.options.length > 0 && item.options.map(el => <button type="button" className={`btn btn-default ${getClass(el.option_explanation).class}`}>{el.probablity}%{'  '} <span style={{color:  getClass(el.option_explanation).color}}>{el.option_explanation}</span> </button>)}
      
            </div>
          </div>
        </div>
        </div>
          )}
       
   
    </div>
    
  </div>
</div>


    </>
  );
}

