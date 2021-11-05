/**
 *
 * ContestDetailPage
 *
 */

import React, { useState } from 'react';
import thirdImage from '../../assets/img/3rd.png';
import Currency from '../../assets/img/currency.png';
import chartImage from '../../assets/img/chart1.png';

import mainImage from '../../assets/img/main.png';
import facebookImage from '../../assets/img/fb.png';
import twitterImage from '../../assets/img/tw.png';
import instaImage from '../../assets/img/inst.png';
import newImage from '../../assets/img/new.png';
import docImage from '../../assets/img/doc.png';
import groupImage from '../../assets/img/group.png';
import commentOne from '../../assets/img/com-1.png';
import commentTwo from '../../assets/img/com-2.png';
import commentThree from '../../assets/img/com-3.png';
import replyImage from '../../assets/img/reply.png';
import dropdownImage from '../../assets/img/dropdown.png';
import { useApi } from '../../components/customHooks/useApi';
import {
  doughnutOptions,
} from './constants';
import { Line } from 'react-chartjs-2';
import ReactTimeAgo from 'react-time-ago';

const ContestDetailPage = ({ history }) => {
  const { location: { pathname = '' } = {} } = history || {};
  const id = pathname.split('/')[2] || '';

  const url = `/admin/contests-id?id=${id}`;
  const betsUrl = `/admin/all-bets/${id}`;
  const oddHistoryUrl = `/admin/get-odd-history?id=${id}`

  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [selected, setSelection] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const popularBetUrl = '/admin/get-popular-contest-bets';
  const createBetUrl = '/admin/bet/create';
  const getAllApiUrl = '/admin/contests/all';
  const [data] = useApi(url, false, { method: 'GET' });
  const [allContests] = useApi(getAllApiUrl, false, { method: 'GET' });
  const [oddHistoryDataApi] = useApi(oddHistoryUrl, false, { method: 'GET' });
  const [betsData] = useApi(betsUrl, false, { method: 'GET' });
  const [popularBets] = useApi(popularBetUrl, false, { method: 'GET' });
  const [, createBet] = useApi(createBetUrl, {}, { method: 'POST' }, false);
  const { responseData } = data || {};
  const { responseData: responseBetsData } = betsData || {};
  const { responseData: oddsHistoryData } = oddHistoryDataApi || {};
  const {oddHistory } = oddsHistoryData || {};
  const { responseData: responsePopularBetsData } = popularBets || {};
  const { contestDetails } = responseData || {};
  const { bets } = responseBetsData || {};
  const { popularBets: popularBetsFromApi } = responsePopularBetsData || {};
  const { responseData: allContestDetails} = allContests || {};
  const { contestDetails: all } = allContestDetails || {};
  const { name, options = [], rules, contestNewsLink } = contestDetails || {};
  const getClass = explantion => {
    if (explantion === 'SI') {
      return {
        class: 'bi-hand-thumbs-up',
        color: '#3867E7',
      };
    }
    return {
      class: 'bi-hand-thumbs-down',
      color: '#EC3D3C',
    };
  };
  console.log('================================')
  console.log('oddHistory', oddHistory)
  console.log('================================')
 
  const pickLastTen = (arr) => {
    return arr.slice(Math.max(arr.length - 5, 0))
  }

  const chartDataMapping = (data) => {
    const filterRequiredDataYes = data && data.length > 0 && data.map(item => item.odd_SI);
    const filterRequiredDataNo = data && data.length > 0 && data.map(item => item.odd_No);
    const labelArray = data && data.length > 0 && data.map(item => item.createdAt.split('T')[0]);
   

    const dataChart = {
      labels: pickLastTen(labelArray),
      datasets: [
        {
          label: 'Option SI',
          data: pickLastTen(filterRequiredDataYes),
          fill: false,
          backgroundColor: '#3867E7',
          borderColor: '#3867E7',
          yAxisID: 'y-axis-1',
        },
        {
          label: 'Option No',
          data: pickLastTen(filterRequiredDataNo),
          fill: false,
          backgroundColor: '#EC3D3C',
          borderColor: '#EC3D3C',
          yAxisID: 'y-axis-2',
        },
      ],
    };
    
    const optionsChart = {
      scales: {
        yAxes: [
          {
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
          },
          {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
              drawOnArea: false,
            },
          },
        ],
      },
    };
    return {
      dataChart, optionsChart
    }
  }
  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const requestObj = {
      amount: +amount,
      potentialGain: +(amount) * +(selected),
      contestId: id,
      option: selectedOption,
      userId:
        JSON.parse(localStorage.getItem('user')) &&
        JSON.parse(localStorage.getItem('user'))._id,
    };
    const { responseData, isLoading } = await createBet(requestObj);
    setLoading(isLoading);
    setAmount('');
    document.getElementById('success').click();
  };

  const handleSelection = (sel, option) => {
    setSelectedOption(option);
    setSelection(sel);
  }
  return (
    <>
      <div>
        <div
          className={`modal modal-input fade`}
          id="exampleModal3"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-heading p-3 pb-0">
                <button
                  type="button"
                  className="btn-close float-end btn-warning"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div className="modal-title text-center">
                  <h3 id="exampleModalLabel">
                    <img src={thirdImage} alt />
                  </h3>
                  <h6
                    style={{
                      fontSize: 26,
                      fontWeight: 'bold',
                      color: '#091947',
                      fontFamily: 'poppins',
                    }}
                  >
                    Apuesta Confirmada!
                  </h6>
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                      color: '#091947',
                      fontFamily: 'poppins',
                    }}
                  >
                    Compártelo en tus redes sociales
                  </p>
                </div>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="social-media-confirm text-center mb-4">
                        <a href="#" className="btn-social btn-facebook mx-2">
                          <img src={facebookImage} alt />
                        </a>
                        <a href="#" className="btn-social btn-twitter mx-2">
                          <img src={twitterImage} alt />
                        </a>
                        <a href="#" className="btn-social btn-twitter mx-2">
                          <img src={instaImage} alt />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="container mb-4">
            <div className="row">
              <div className="col col-lg-12 col-md-12 col-sm-12">
                <div className="card outer mt-4 pb-3">
                  <div className="card-body">
                    <div className="container">
                      <div className="row">
                        <div className="col col-lg-6 col-md-6 col-sm-12">
                          <div className="card-heading-contest">
                            {name ||
                              'Será vacado el Gabinete Bellido en el 2021?'}
                          </div>
                          <div className="row">

                            {options &&
                              options.length > 0 &&
                              options.map(item => (
                                <div className="col col-lg-5 col-md-12 col-sm-12">
                                  <div className="card text-center first p-4">
                                    <div className="percentage">
                                      <h3>{item.odd} </h3>
                                    </div>
                                    <div className="si-thumbs-up">
                                      <p>
                                        <i
                                          className={`bi ${
                                            getClass(item.option_explanation).class
                                          }`}
                                        />
                                        {item.option_explanation}
                                      </p>
                                    </div>
                                    <div className="apostar">
                                      <button
                                        onClick={e =>
                                          handleSelection(item.odd, item.option_explanation)
                                        }
                                        value={item.probablity}
                                        className={`btn ${
                                          item.option_explanation === 'SI'
                                            ? 'btn-outline-primary btn-1'
                                            : 'btn-outline-danger btn-2'
                                        }`}
                                        data-bs-toggle="modal"
                                        data-bs-target={'#exampleModal1'}
                                      >
                                        Apostar
                                      </button>
                                    </div>
                                    {/* modal 3 start*/}

                                    <form onSubmit={onSubmit}>
                                      <div
                                        className={`modal modal-input fade`}
                                        id="exampleModal1"
                                        tabIndex={-1}
                                        aria-labelledby="exampleModalLabel"
                                        aria-hidden="true"
                                      >
                                        <div className="modal-dialog">
                                          <div className="modal-content">
                                            <div className="modal-heading p-3">
                                              <button
                                                type="button"
                                                className="btn-close float-end btn-warning"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                              />
                                              <div className="modal-title text-center mt-3">
                                                <h3 id="exampleModalLabel">
                                                  <img
                                                    src={thirdImage}
                                                    width="7%"
                                                    style={{
                                                      marginTop: '-5px',
                                                      marginRight: 10,
                                                    }}
                                                    alt
                                                  />{' '}
                                                  Apuesta Simple
                                                </h3>
                                                <h6 style={{ fontSize: 20 }}>
                                                  Estas apostando a que el
                                                  gabinete Bellido setra vacado
                                                  antes de que termine el ano
                                                  2021
                                                </h6>
                                              </div>
                                            </div>

                                            <div className="modal-body">
                                              <div className="container">
                                                <div className="row height d-flex justify-content-center align-items-center">
                                                  <div className="col">
                                                    <label
                                                      htmlFor
                                                      style={{
                                                        fontWeight: 500,
                                                        marginLeft: '-363px',
                                                        marginBottom: 5,
                                                      }}
                                                    >
                                                      Monto
                                                    </label>
                                                    <div className="form">
                                                      {' '}
                                                      <img
                                                        src={Currency}
                                                        alt
                                                      />{' '}
                                                      <input
                                                        type="number"
                                                        className="form-control form-input"
                                                        value={amount}
                                                        placeholder="Enter Monto"
                                                        onChange={e =>
                                                          setAmount(
                                                            e.target.value,
                                                          )
                                                        }
                                                        required
                                                      />
                                                    </div>
                                                    <label
                                                      htmlFor
                                                      style={{
                                                        fontWeight: 500,
                                                        marginLeft: '-293px',
                                                        marginBottom: 5,
                                                      }}
                                                    >
                                                      Ganancia Posible
                                                    </label>
                                                    <div className="form">
                                                      {' '}
                                                      <img
                                                        src={chartImage}
                                                        alt
                                                      />{' '}
                                                      <input
                                                        type="number"
                                                        className="form-control form-input"
                                                        placeholder="Enter Ganancia Posible"
                                                        disabled
                                                        value={
                                                          (+(amount) * +(selected)).toFixed(1)
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="row">
                                                  <div className="col">
                                                    <p
                                                      className="ms-start"
                                                      style={{
                                                        fontSize: 15,
                                                        fontFamily: 'poppins',
                                                      }}
                                                    >
                                                      <input
                                                        type="checkbox"
                                                        name="checkbox"
                                                        id
                                                      />{' '}
                                                      Estoy de acuerdo con los
                                                      términos y condiciones de
                                                      la apuesta.
                                                    </p>
                                                  </div>
                                                </div>
                                                <div className="row">
                                                  <div className="d-grid gap-2 col-12 mx-auto ">
                                                    {loading ? (
                                                      <button
                                                        class="btn btn-primary login-btn"
                                                        type="button"
                                                        disabled
                                                      >
                                                        <span
                                                          class="spinner-border spinner-border-sm"
                                                          role="status"
                                                          aria-hidden="true"
                                                        />
                                                        Loading...
                                                      </button>
                                                    ) : (
                                                      <input
                                                        type="submit"
                                                        className="btn btn-primary login-btn"
                                                        value="Make a Bet"
                                                      />
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="apostar" hidden>
                                              <button
                                                id="success"
                                                data-bs-toggle="modal"
                                                data-bs-target={
                                                  '#exampleModal3'
                                                }
                                              >
                                                success
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </form>

                                    {/*modal 3 end*/}
                                  </div>
                                </div>
                              ))}

                            <div className="col col-lg-2" />
                          </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12">
                          <div className="card-heading-contest">
                            Como se han comportado los pagos de esta apuesta?
                          </div>
                         {oddHistory && oddHistory.length > 0 ? <div className="chart">
                            <Line data={chartDataMapping(oddHistory).dataChart} options={chartDataMapping(oddHistory).optionsChart} />
                          </div> : 'No Data for chart available'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*charts ends*/}
        <div className="container">
          <div className="row">
            <div className="col col-lg-6 col-md-6 col-sm-12">
              <div className="card p-4">
                <div className="card-heading ps-3">
                  Condiciones de la apuesta
                </div>
                <div className="card-body">{rules}</div>
              </div>
              <div className="card p-4 mt-2">
                <div className="card-heading ps-3">
                  Condiciones de la apuesta
                </div>
                <div className="card-body">
                  <div
                    id="carouselExampleDark"
                    className="carousel carousel-dark slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      />
                      <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                      />
                      <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                      />
                    </div>
                    <div className="carousel-inner">
                      {contestNewsLink && contestNewsLink.length > 0 && contestNewsLink.map((i, index) =>(
                          <div
                            className="carousel-item active"
                            data-bs-interval={10000}
                          >
                            <iframe width={560} height={315} src={`${i.news_link}`} title={i.news_name} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            <div className="carousel-caption d-none d-md-block">
                              <h5 style={{ color: 'white' }}>
                                {i.news_name}
                              </h5>
                            </div>
                          </div>
                        ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-6">
              <div className="card">
                <div className="container">
                  <div className="row p-4">
                    <div className="card-heading">APUESTAS MÁS POPULARES</div>
                  </div>
                  <div className="row">
                    <div
                      id="carouselExampleDark"
                      className="carousel carousel-dark slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="0"
                          class="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        />
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        />
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        />
                      </div>
                  
                      <div className="carousel-inner">
                        {all && all.length > 0 && all[0].contestNewsName &&
                          all[0].contestNewsName.length > 0 &&
                          all[0].contestNewsName.map((item, index) => (
                            <div
                              className={`carousel-item ${index === 0 &&
                                'active'}`}
                              data-bs-interval={50000}
                            >
                              <img
                                src={
                                 
                                  newImage
                                }
                                className="d-block w-100"
                                alt="..."
                              />
                             
                              <div className="carousel-caption d-none d-md-block">
                              <h5 style={{ color: 'white' }}>
                                <i className="bi bi-clock" />{' '}
                                {item.news_name}
                              </h5>
                              <p style={{ color: 'white' }}>
                                  {item.news_link}
                              </p>
                            </div>  
                        
                            
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  {/* <div class="row"> */}
                  {/* <div class="card mb-3 p-3" style="border-radius: 15px;"> */}
                  {all && all.length > 0 && all[0].contestNewsName &&
                          all[0].contestNewsName.length > 0 &&
                          all[0].contestNewsName.map((item, index) => (
                      <>
                        <div className="row g-0 mt-3">
                          <div className="col-md-8">
                            <div className="card-body p-0">
                              <p
                                className="card-title mb-0"
                                style={{ fontSize: '18px', lineHeight: '30px' }}
                              >
                                {item &&
                                  item.news_name}
                              </p>
                              <p  className="card-title mb-0"
                                style={{ fontSize: '15px', lineHeight: '30px' }}>
                                {item && item.news_link}
                              </p>
                              {item && (
                                <div className="time">
                                  <p>
                                    <i className="bi bi-clock" />{' '}
                                    <ReactTimeAgo
                                      date={
                                        (item &&
                                          item.news_date) ||
                                        new Date()
                                      }
                                      locale="en-US"
                                    />
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                          {item && (
                            <div className="col-md-4">
                              <img
                                src={
                                  docImage
                                }
                                className="img-fluid rounded-start"
                                width="239px"
                                height={166}
                                alt="..."
                              />
                            </div>
                          )}
                        </div>
                        {index > 1 && <hr />}
                      </>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-4">
            <div className="col col-lg-12 col-md-12 col-sm-12">
              <div className="card p-3 pb-5 px-4">
                <div className="card-heading ps-3">Comentarios</div>
                <div className="card mt-2 p-0">
                  <div className="container">
                    <div className="row pb-4">
                      <div className="col">
                        <div className="mt-3 d-flex flex-row align-items-center p-3 form-color">
                          {' '}
                          <img
                            src={commentOne}
                            width={50}
                            className="rounded-circle mr-2"
                            style={{ marginRight: 15 }}
                          />
                          <input
                            type="text"
                            className="form-control"
                            style={{ borderRadius: 15 }}
                            placeholder="Únete a la conversación..."
                          />
                        </div>
                        <div
                          className="d-flex flex-start"
                          style={{ marginLeft: 15 }}
                        >
                          <img
                            className="rounded-circle shadow-1-strong me-3"
                            src={commentTwo}
                            alt="avatar"
                            width={50}
                            height={50}
                          />
                          <div className="flex-grow-1 flex-shrink-1">
                            <div>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="name">
                                  Phill Gav{' '}
                                  <span className="small">
                                    {' '}
                                    <span className="circle">.</span> Hace una
                                    hora
                                  </span>
                                </p>
                              </div>
                              <p className="text">
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                              </p>
                              <a
                                href="#"
                                style={{
                                  color: '#091947',
                                  textDecoration: 'none',
                                  fontWeight: 300,
                                  fontFamily: 'poppins',
                                }}
                              >
                                1 respuesta <img src={dropdownImage} alt />
                              </a>
                              &nbsp;
                              <h5
                                className="small d-inline"
                                style={{
                                  color: '#091947',
                                  textDecoration: 'none',
                                  fontWeight: 500,
                                  fontFamily: 'poppins',
                                }}
                              >
                                Responder
                              </h5>
                              <span className="circle">.</span>
                              <h5
                                className="small d-inline"
                                style={{
                                  color: '#091947',
                                  textDecoration: 'none',
                                  fontWeight: 500,
                                  fontFamily: 'poppins',
                                }}
                              >
                                Compartir
                              </h5>
                            </div>
                            <div className="d-flex flex-start mt-4">
                              <a className="me-3" href="#">
                                <img
                                  className="rounded-circle shadow-1-strong me-3"
                                  src={commentThree}
                                  alt="avatar"
                                  width={50}
                                  height={50}
                                />
                              </a>
                              <div className="flex-grow-1 flex-shrink-1">
                                <div>
                                  <div className="d-flex justify-content-between align-items-center">
                                    <p className="name">
                                      John Doe{' '}
                                      <a
                                        href="#!"
                                        className="reply"
                                        style={{ color: '#091947' }}
                                      >
                                        &nbsp; <img src={replyImage} alt />
                                        <span>@PhilGav</span>
                                      </a>
                                      <span className="small">
                                        <span className>
                                          {' '}
                                          <span className="circle">
                                            &nbsp;.&nbsp;
                                          </span>{' '}
                                          Hace 8 mins
                                        </span>
                                      </span>
                                    </p>
                                  </div>
                                  <p className="text">
                                    letters, as opposed to using 'Content here,
                                    content here', making it look like readable
                                    English.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="d-flex flex-start mt-4"
                          style={{ marginLeft: 15 }}
                        >
                          <img
                            className="rounded-circle shadow-1-strong me-3"
                            src={commentThree}
                            alt="avatar"
                            width={50}
                            height={50}
                          />
                          <div className="flex-grow-1 flex-shrink-1">
                            <div>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="name">
                                  Michael Green{' '}
                                  <span className="small">
                                    <span className="circle">.</span> Hace una
                                    hora
                                  </span>
                                </p>
                              </div>
                              <p className="text">
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContestDetailPage;
