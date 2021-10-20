import React from 'react';
import cardImage from '../../assets/img/cards.png'
import { Link } from 'react-router-dom';

const SideBar = ( { itemId, index } ) => {
    return (
        <>
            <div className="row g-0">
                <div className="col-md-4">
                    <Link to={`/contest-detail-page/${itemId}`}><img src={cardImage} className="img-fluid rounded-start" alt="..." /></Link>
                </div>
                <div className="col-md-8">
                    <div className="card-body p-0 ps-3">
                        <p className="card-text mb-0">This is a wider card with little bit longer.</p>
                        <div className="pills">
                            <span className="badge rounded-pill bg-light text-dark p-2"><i className="bi bi-hand-thumbs-up" />&nbsp; Si <span style={{ color: '#091947' }}>1.4</span></span>
                            <span className="badge rounded-pill bg-light text-dark p-2"><i className="bi bi-hand-thumbs-down" />&nbsp; No <span style={{ color: '#EC3D3C' }}>2.4</span></span>
                        </div>
                    </div>
                </div>
            </div>
           {(index < 2) && <hr /> } 
        </>
    );
}

export default SideBar;