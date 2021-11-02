/**
 *
 * UserHistory
 *
 */

import React from 'react';
import { useApi } from '../../components/customHooks/useApi';
import { Link } from 'react-router-dom';
import { isContestClosed } from '../../utils/index';

export default function UserHistory() {
  const userId = JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user'))._id;
  const apiUrl = `/user/history/get/${userId}`;
  const [userHistory] = useApi(apiUrl, false, { method: 'GET' });
  const { responseData } = userHistory || {};
  console.log({responseData})
  const { historyData = [] } = responseData || {};
  const filterClosedContests = historyData.length > 0 && historyData.filter(el => isContestClosed(el.contestId.closeDate, new Date()));
  const filterActiveContests = historyData.length > 0 && historyData.filter(el => !isContestClosed(el.contestId.closeDate, new Date()));
  console.log({filterClosedContests})
  return (
    <>
 <div>
  <div className="container">
    <div className="row mt-4 mb-4">
      <div className="col col-lg-6">
        <div className="heading-top text-start">
          <h4>Apuestas activas</h4>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
    {filterActiveContests && filterActiveContests.length === 0 && <h5>No Data Found!</h5>}

      {filterActiveContests && filterActiveContests.length > 0 && filterActiveContests.map(item => 
      <div className="col col-lg-6 col-md-3 col-sm-12">
      <div className="card mb-3 pb-4">
        <div className="row g-0">
          <div className="col-md-7">
            <div className="card-body">
              <p><i className="bi bi-calendar2-plus" />&nbsp; {item.createdAt && item.createdAt.split(':')[0].split('T')[0].replaceAll('-', '/')}</p>
              <h6 className="card-title"> {item.contestId && item.contestId.name}</h6>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card-body text-center p-2">
              <p className="top-right">Potencial Ganancia</p>
              <span className="badge rounded-pill bg-light text-dark p-2" style={{backgroundColor: 'rgba(9, 25, 71, 0.05) !important'}}>s./{item.probability}</span>
            </div>  
          </div>
        </div>
        <div className="row g-0">
          <div className="col col-lg-4 col-md-3 col-sm-12 ms-3 grey-brdr">
            <p className="heading">Apuestas &nbsp;<span className="badge rounded-pill bg-light text-dark p-2 si">{item.option}</span></p>
          </div>
          <div className="col col-lg-7 col-md-3 col-sm-12">
            <p className="monto">Monto Apostado &nbsp;<span className="badge rounded-pill bg-light text-dark p-2 si">s./{item.amount}</span></p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <Link className="btn btn-primary" to={`/contest-detail-page/${item.contestId._id}`}>Ir a página de apuesta</Link>                            
          </div>
        </div>
      </div>
    </div>  
        )}
      
    </div>
  </div>
  <div className="container">
    <div className="row mt-4 mb-4">
      <div className="col col-lg-6">
        <div className="heading-top text-start">
          <h4>Apuestas terminadas</h4>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      {filterClosedContests && filterClosedContests.length === 0 && <h5>No Data Found!</h5>}
    {filterClosedContests && filterClosedContests.length > 0 && filterClosedContests.map(item => 
      <div className="col col-lg-6 col-md-3 col-sm-12">
      <div className="card mb-3 pb-4">
        <div className="row g-0">
          <div className="col-md-7">
            <div className="card-body">
              {console.log('item', item)}
              <p><i className="bi bi-calendar2-plus" />&nbsp; {item.createdAt && item.createdAt.split(':')[0].split('T')[0].replaceAll('-', '/')}</p>
              <h6 className="card-title"> {item.contestId && item.contestId.name}</h6>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card-body text-center p-2">
              <p className="top-right">Potencial Ganancia</p>
              <span className="badge rounded-pill bg-light text-dark p-2" style={{backgroundColor: 'rgba(9, 25, 71, 0.05) !important'}}>s./{item.probability}</span>
            </div>  
          </div>
        </div>
        <div className="row g-0">
          <div className="col col-lg-4 col-md-3 col-sm-12 ms-3 grey-brdr">
            <p className="heading">Apuestas &nbsp;<span className="badge rounded-pill bg-light text-dark p-2 si">{item.option}</span></p>
          </div>
          <div className="col col-lg-7 col-md-3 col-sm-12">
            <p className="monto">Monto Apostado &nbsp;<span className="badge rounded-pill bg-light text-dark p-2 si">s./{item.amount}</span></p>
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

