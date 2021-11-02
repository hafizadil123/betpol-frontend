import React from 'react';
import cardImage from '../../assets/img/cards.png'
import { Link } from 'react-router-dom';

const SideBar = ({ item, index }) => {
    const getClass = (explantion) => {
        if (explantion === 'SI') {
            return {
                class: 'bi-hand-thumbs-up',
                color: '#091947'
            }
        }
        return {
            class: 'bi-hand-thumbs-down',
            color: '#EC3D3C'
        }
    }
    const isValueExist = (item) => {
        if(item && item.contestDetails && item.contestDetails[0]) {
          return true;
        } else {
          return false;
        }
      }

    return (
        <>
            <div className="row g-0">
                <div className="col-md-4">
                    <Link to={`/contest-detail-page/${item._id}`}><img src={isValueExist(item) && item.contestDetails[0].urlPicture || cardImage} style={{height: "100px"}} className="img-fluid rounded-start" alt="..." /></Link>
                </div>
                <div className="col-md-8">
                    <div className="card-body p-0 ps-3">
                        <p className="card-text mb-0">{isValueExist(item) && item.contestDetails[0].explanation || isValueExist(item) && item.contestDetails[0].name}</p>
                        <div className="pills">
                            {isValueExist(item) && item.contestDetails[0].options && isValueExist(item) && item.contestDetails[0].options.length > 0 && isValueExist(item) && item.contestDetails[0].options.map(el => <span className="badge rounded-pill bg-light text-dark p-2"><i className={`bi ${getClass(el.option_explanation).class}`} />&nbsp; {el.option_explanation}{'  '}<span style={{ color: getClass(el.option_explanation).color }}>{el.odd}</span></span>)}
                        </div>
                    </div>
                </div>
            </div>
            {(index < 2) && <hr />}
        </>
    );
}

export default SideBar;