/**
 *
 * AdminHistory
 *
 */

import React, { useEffect, useState } from 'react';
import cardImage from '../../assets/img/card-1.png';
import calImaage from '../../assets/img/cal.png';
import paperImage from '../../assets/img/Paper.png';
import phoneImage from '../../assets/img/phone.png';
import minusImage from '../../assets/img/minus.png';
import coinImage from '../../assets/img/coin.png';
import groupImage from '../../assets/img/Group 175967.png'
import cameraImage from '../../assets/img/camera.png';
import tickImage from '../../assets/img/tick.png';
import closeImage from '../../assets/img/close.png';
import { useApi } from '../../components/customHooks/useApi';
import { useDropzone } from 'react-dropzone';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from "react-hook-form";
import { PickerOverlay } from 'filestack-react';

const constestSchema = yup.object({
  name: yup.string().required('Nombre is required'),
  explanation: yup.string().required('explanation is required'),
  rules: yup.string().required('rules is required'),
  contestType: yup.string().required('contestType is required'),
  closeDate: yup.string().required('closeDate is required'),

}).required();

export default function AdminHistory() {
  const [countOption, setCountOption] = useState(1);
  const [optionsEl, setOptionsEl] = useState([{}]);
  const [choices, setChoices] = useState([]);
  const [newsChoices, setNewsChoices] = useState([]);
  const [newsAnalysisChoice, setNewsAnalysisChoice] = useState([]);
  const [probablity, setProbablity] = useState('');
  const [addBtnErrorMessage, setAddBtnErrorMessage] = useState('')
  const [odd, setOdd] = useState('');
  const [option_explanation, setOption_explanation] = useState('');
  const [newsName, setNewsName] = useState('');
  const [newsLink, setNewsLink] = useState('');
  const [newsDate, setNewsDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [newsOptionsEl, setNewsOptionEl] = useState([{}]);
  const [newsError, setAddBtnErrorMessageNews] = useState('');
  const [newsAnalysisName, setNewsAnalysisName] = useState('');
  const [newsAnalysisLink, setNewsAnalysisLink] = useState('');
  const [newsAnalysisOptionsEl, setNewsAnalysisOptionsEl] = useState([{}]);
  const [newsAnalysisErrorMessage, setAddBtnErrorMessageNewsAnalysis] = useState('');

  const userId = JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user'))._id;
  const apiUrl = `/admin/history/get/${userId}`;
  const oddHistoryUrl = `/admin/odd/history`;
  const [adminHistory] = useApi(apiUrl, false, { method: 'GET' });

  const contestApiUrl = '/admin/contest/create';
  const getEachContestUrl = `/admin/contests-id`;
  const [, createContest] = useApi(contestApiUrl, true, { method: 'POST' }, false);
  const [, getContesteData] = useApi(getEachContestUrl, true, { method: 'GET'}, false);
  const [, addOddHistory] = useApi(oddHistoryUrl, true, { method: 'POST'}, false);
  
  const { responseData } = adminHistory || {};
  const { historyData } = responseData || {};
  const [apiMessage, setApiMessage] = useState({});
  const [showDialog, setShowDialog] = useState(false);
  const [uploadedFile, setUploadedFile] = useState({});
  const [editResult, setEditResult] = useState({});
  const [editOdds, setEditOdds] = useState({});
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(constestSchema)
  });


  const onSubmit = async (data) => {
    setApiMessage({});
    const choiceObj = {
      option_explanation,
      odd,
      probablity
    };
    const newChoiceObj = {
      news_name: newsName,
      news_link: newsLink,
      news_date: newsDate
    }
    setChoices(choices.push(choiceObj));
    setNewsChoices(newsChoices.push(newChoiceObj))
    const requesObject = {
      urlPicture: uploadedFile.url || 'www.google.com',
      options: choices,
      name: data.name,
      rules: data.rules,
      closeDate: data.closeDate,
      explanation: data.explanation,
      contestNewsName: newsChoices,
      contestNewsLink: newsAnalysisChoice,
      userId: JSON.parse(localStorage.getItem('user'))._id,
      contestType: data.contestType,
    };
    const { responseData, hasError, errorMessage } = await createContest(requesObject);
    console.log('calleddd', hasError, errorMessage, responseData)
    if (!hasError) {
      setLoading(false);
      setApiMessage({
        color: 'green',
        message: 'contest has been created successful!'
      })
    } else {
      setLoading(false);
      setApiMessage({
        color: 'red',
        message: errorMessage || 'something went wrong!'
      })
    }
  }
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setEditOdds({
      ...editOdds,
      [e.target.name]: e.target.value
    })
  }
  const addChoices = () => {
    if (option_explanation && odd && probablity) {
      const choiceObj = {
        option_explanation,
        odd,
        probablity
      }
      setChoices([...choices, choiceObj])
      setOptionsEl([...optionsEl, {}])
      setAddBtnErrorMessage('');
    } else {
      setAddBtnErrorMessage('please fill values first to add more');
    }

  };
  const removeChoice = () => {
    optionsEl && optionsEl.length > 0 && optionsEl.pop();
    setOptionsEl([...optionsEl])
  }
  const addNews = (index) => {
    if (newsName && newsLink && newsDate) {
      const newChoiceObj = {
        news_name: newsName,
        news_link: newsLink,
        news_date: newsDate
      }
      setNewsChoices([...newsChoices, newChoiceObj])
      setNewsOptionEl([...newsOptionsEl, {}])
      setAddBtnErrorMessageNews('');
    } else {
      setAddBtnErrorMessageNews('please fill values first to add more');
    }
  };
  const removeNews = () => {
    optionsEl && optionsEl.length > 0 && optionsEl.pop();
    setNewsOptionEl([...newsOptionsEl])
  }

  const addNewsAnalysis = (index) => {

    if (newsAnalysisName && newsAnalysisLink) {
      const newChoiceObj = {
        news_name: newsAnalysisName,
        news_link: newsAnalysisLink,
      }
      setNewsAnalysisChoice([...newsAnalysisChoice, newChoiceObj])
      setNewsAnalysisOptionsEl([...newsAnalysisOptionsEl, {}])
      setAddBtnErrorMessageNewsAnalysis('');
    } else {
      setAddBtnErrorMessageNewsAnalysis('please fill values first to add more');
    }
  };
  const removeNewsAnalysis = () => {
    newsAnalysisOptionsEl && newsAnalysisOptionsEl.length > 0 && newsAnalysisOptionsEl.pop();
    setNewsAnalysisOptionsEl([...newsAnalysisOptionsEl])
  }

  const uploadFile = (res) => {
    setUploadedFile(res.filesUploaded[0])
    setShowDialog(false)
  }
  const handleDialog = () => {
    setShowDialog(true);
  }
  const invokeEditButton = async (item) => {
    const { responseData, hasError, errorMessage } = await getContesteData({id: item._id});
    if(!hasError) {
      setEditResult(responseData.contestDetails);
    }
  };
  const handleEdit = async(item) => {
    console.log('ssssss', editOdds);

    let oddsArray = [];
    console.log(editOdds);
    // const optionArray
    const reqObj = {
      contestId: item._id,
      ...editOdds,
      contestNewsName: item.contestNewsName || [],
      contestNewsLink: item.contestNewsLink || []

    }
   const {responseData, hasError, errorMessage} = await addOddHistory(reqObj)
    console.log('edit odds', editOdds);
  }
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
            <div className="col col-lg-6 text-end">
              <button onClick={() => setApiMessage({})} className="btn btn-primary top-right-admin" data-bs-toggle="modal" data-bs-target="#ModalNewBet">Crear apuesta</button>
            </div>
            {/* modal new bet starts here*/}
            <div className="modal fade" id="ModalNewBet" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-heading p-2">
                    <button type="button" className="btn-close float-end btn-warning" data-bs-dismiss="modal" aria-label="Close" />
                    <div className="modal-title text-center mt-3">
                      <h3 id="exampleModalLabel">Crear nueva apuesta</h3>
                    </div>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    
                      <div className="card pt-3">
                        <div className="container">
                          <div className="row height d-flex justify-content-center align-items-center">
                            <div className="col-12">
                              <label htmlFor>Nombre</label>
                              <div className="form"> <img src={calImaage} alt /> <input type="text" className="form-control form-input" {...register('name')} placeholder />
                                <p style={{ color: 'red' }}>{errors && errors.name && errors.name.message}</p>

                              </div>
                            </div>
                            <div className="col-12">
                              <label htmlFor>Explicación</label>
                              <div className="form"> <img src={paperImage} alt /> <input type="text" className="form-control form-input" {...register('explanation')} placeholder />
                                <p style={{ color: 'red' }}>{errors && errors.explanation && errors.explanation.message}</p>
                              </div>
                            </div>
                            <div className="col-12">
                              <label htmlFor>Reglas</label>
                              <div className="form"> <img src={phoneImage} alt /> <input type="text" className="form-control form-input" {...register('rules')} placeholder />
                                <p style={{ color: 'red' }}>{errors && errors.rules && errors.rules.message}</p>
                              </div>
                            </div>
                            <div className="col-12">
                              <label htmlFor>Tipo de apuesta</label>
                              <div className="form">
                                {/* <img src={coinImage} style={{top: 5, left: 6}} alt /> */}

                                <select className="form-select" aria-label="Default select example" {...register('contestType')}>
                                  <option selected />
                                  <option value={'politica-nacional'}>Politica Nacional</option>
                                  <option value={'political-regional'}>Political Regional</option>
                                  <option value={'politica-internacional'}>Politica Internacional</option>
                                  <option value={'otros'}>Otros</option>
                                </select>
                                <p style={{ color: 'red' }}>{errors && errors.contestType && errors.contestType.message}</p>
                              </div>
                            </div>
                            <div className="col-6">
                              <label htmlFor className="text-start">Fecha de cierre</label>
                              <div className="form"> <img src={phoneImage} alt /> <input type="date" className="form-control form-input" placeholder {...register('closeDate')} />
                                <p style={{ color: 'red' }}>{errors && errors.closeDate && errors.closeDate.message}</p>
                              </div>
                            </div>
                            <div className="col-6">
                              <label htmlFor className="text-start" style={{ fontSize: 17 }}>Numero de opciones</label>
                              <div className="form"> <img src={minusImage} className="img-minus customImage" onClick={e => countOption === 0 ? countOption : setCountOption(countOption - 1)} alt='' /> <input type="number" className="form-control form-input" min="0" onChange={e => setCountOption(e.target.value)} value={countOption} /> <span className="left-pan"><img src={groupImage} className="img-plus customImage" onClick={e => setCountOption(+countOption + 1)} alt='' /></span>

                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="d-flex justify-content-between">
                              <div>
                                <h6>Opciones</h6>
                              </div>
                              {optionsEl && optionsEl.length < countOption ?
                                <div onClick={addChoices}>
                                  <i className="bi bi-plus-circle" />
                                </div> :
                                <div onClick={removeChoice}>
                                  <i className="bi bi-dash-circle" />
                                </div>
                              }
                            </div>
                          </div>

                          {optionsEl && optionsEl.length > 0 && optionsEl.map((item, index) =>
                            <>
                              {addBtnErrorMessage && <span style={{ color: 'red' }}> {addBtnErrorMessage || ''}</span>}
                              <div className="row admin-label">
                                <div className="col-4">
                                  <label htmlFor>Nombre opción</label>
                                  <div className="form"><input type="text" className="form-control form-input" onChange={(e) => setOption_explanation(e.target.value)} placeholder />

                                  </div>
                                </div>
                                <div className="col-4">
                                  <label htmlFor>Probabilidad</label>
                                  <div className="form"><input type="text" className="form-control form-input" onChange={(e) => setProbablity(e.target.value)} placeholder />

                                  </div>
                                </div>
                                <div className="col-4">
                                  <label htmlFor>Odd</label>
                                  <div className="form"> <input type="text" className="form-control form-input" onChange={(e) => setOdd(e.target.value)} placeholder />

                                  </div>
                                </div>
                              </div>
                              <hr />
                            </>
                          )}

                          <div className="row">
                            <label htmlFor>Foto</label>
                            <div className="col-12 d-flex justify-content-center">
                              <div className="container" style={{ padding: '3px 9px' }}>
                                <div className="row">
                                  <div className="col-12 text-center upload-cam p-5">

                                   
                                    <section className="">
                                    <div onClick={() => handleDialog()}>
                                      {showDialog && <PickerOverlay
                                        apikey={'ASQ3ZpvfuQw2lGevDFs9lz'}
                                        onSuccess={(res) => uploadFile(res)}
                                        onUploadDone={(res) => uploadFile(res)}
                                      />}
                                    
                                      <img src={cameraImage} alt /><br />
                                      <p>{uploadedFile && uploadedFile.filename || 'Presiona para seleccionar una foto<'}</p>
                                    </div>
                                   
                                  </section>

                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                          <hr />
                          <div className="row">
                            <div className="d-flex justify-content-between">
                              <div>
                                <h6>Noticias</h6>
                              </div>
                              {newsOptionsEl && newsOptionsEl.length < 3 ?
                                <div onClick={addNews}>
                                  <i className="bi bi-plus-circle" />
                                </div> :
                                <div onClick={removeNews}>
                                  <i className="bi bi-dash-circle" />
                                </div>
                              }

                            </div>
                          </div>



                          {newsOptionsEl && newsOptionsEl.length > 0 && newsOptionsEl.map(item =>
                            <>
                              {newsError && <span style={{ color: 'red' }}>{newsError || ''}</span>}
                              <div className="row admin-label">
                                <div className="col-4">
                                  <label htmlFor>Nombre noticia</label>
                                  <div className="form"><input type="text" className="form-control form-input" onChange={(e) => setNewsName(e.target.value)} placeholder />

                                  </div>
                                </div>
                                <div className="col-3 gx-0">
                                  <label htmlFor>Link</label>
                                  <div className="form"><input type="text" className="form-control form-input" onChange={(e) => setNewsLink(e.target.value)} placeholder="www." />

                                  </div>
                                </div>
                                <div className="col-3">
                                  <label htmlFor>Fecha</label>
                                  <div className="form my-class"> <input type="date" className="form-control form-input" onChange={(e) => setNewsDate(e.target.value)} placeholder="MM/DD/YY" />

                                  </div>
                                </div>
                                <div className="col-2 m-auto">
                                  <label htmlFor />
                                </div>
                              </div>
                              <hr />
                            </>
                          )}



                          <div className="row">
                            <div className="d-flex justify-content-between">
                              <div>
                                <h6>Noticias</h6>
                              </div>
                              {newsAnalysisOptionsEl && newsAnalysisOptionsEl.length < 3 ?
                                <div onClick={addNewsAnalysis}>
                                  <i className="bi bi-plus-circle" />
                                </div> :
                                <div onClick={removeNewsAnalysis}>
                                  <i className="bi bi-dash-circle" />
                                </div>
                              }
                            </div>
                          </div>

                          {newsAnalysisOptionsEl && newsAnalysisOptionsEl.length > 0 && newsAnalysisOptionsEl.map(item =>
                            <div className="row admin-label">
                              {newsAnalysisErrorMessage && <span style={{ color: 'red' }}>{newsAnalysisErrorMessage || ''}</span>}
                              <div className="col-6">
                                <label htmlFor>Análisis</label>
                                <div className="form"><input type="text" className="form-control form-input" onChange={e => setNewsAnalysisName(e.target.value)} placeholder />

                                </div>
                              </div>
                              <div className="col-6 gs-0">
                                <label htmlFor>Link</label>
                                <div className="form"><input type="text" className="form-control form-input" onChange={e => setNewsAnalysisLink(e.target.value)} placeholder />

                                </div>
                              </div>
                            </div>

                          )}

                        </div>
                      </div>
                      {apiMessage && <span style={{ color: apiMessage.color }}>{apiMessage.message || ''}</span>}
                      <div className="row">
                        <div className="col-12">
                          <div className="d-grid gap-2 col-12 my-3 mx-auto">
                            {loading ? <button class="btn btn-primary login-btn" type="button" disabled>
                              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              Loading...
                            </button> : <input className="btn btn-primary login-btn mybutton" type="submit" value="Crear" />}


                          </div>
                        </div>
                        {/* <div class="col-5">
                  <div class="d-grid gap-2 col-12 mx-auto my-3">
                    <button class="btn btn-primary login-btn-admin" type="button">Cerrar apuesta</button>
                  </div> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* modal new bet ends here */}
        </div>
        <div className="container">
          <div className="row">
            {historyData && historyData.length > 0 && historyData.map(item =>

              <div className="col col-lg-6 col-md-3 col-sm-12">
                <div className="card mb-3 pb-3 p-2">
                  <div className="row g-0">
                    <div className="col-md-7">
                      <div className="card-body">
                        <p><i className="bi bi-calendar2-plus" />&nbsp; {item.createdAt && item.createdAt.split(':')[0].split('T')[0].replaceAll('-', '/')}</p>
                        <h6 className="card-title"> {item.explanation}</h6>
                        <a href={item.contestNewsLink && item.contestNewsLink[0] && item.contestNewsLink[0].news_link} className="link-admin"><i className="bi bi-link-45deg" />&nbsp; {item.contestNewsLink && item.contestNewsLink[0] && item.contestNewsLink[0].news_link}</a>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="card-body text-end p-2">
                        <img style={{height: '150px'}} src={item.urlPicture || cardImage} className="img-fluid rounded-start" alt="..." />
                      </div>
                    </div>
                  </div>
                  <div className="row text-center">
                    {/* <div className="col col-lg-3 col-md-3 col-sm-12 ms-3">
              <p className="heading-admin">Apuestas</p>
              <span className="badge rounded-pill badge-admin bg-light text-dark p-2 mt-3 count">24k</span>
            </div> */}
                    <p className="col col-lg-3 col-md-3 col-sm-12 side-si heading-admin">Opciones</p>
                    {item.options && item.options.length > 0 && item.options.map(el =>
                      <div className="col col-lg-3 col-md-3 col-sm-12">
                        <span className={`badge rounded-pill badge-admin bg-light text-dark p-2 mt-3 ${el.option_explanation === 'SI' ? 'si-admin' : 'no-admin'}`}>{el.option_explanation}</span>
                      </div>
                    )}

                    <div className="col col-lg-2 col-md-3 col-sm-12 p-0 text-end">
                      <br />
                      <button onClick={(e) => invokeEditButton(item)} className="btn btn-primary edit-admin ml-5" data-bs-toggle="modal" data-bs-target="#ModalEdit"><i className="bi bi-pencil-square" /></button>
                    </div>
                    {/* modal-Edit starts here*/}
                    <div className="modal fade" id="ModalEdit" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-heading p-3">
                            <button type="button" className="btn-close float-end btn-warning" data-bs-dismiss="modal" aria-label="Close" />
                            <div className="modal-title text-center mt-3">
                              <h3 id="exampleModalLabel">Modificar apuesta</h3>
                            </div>
                          </div>
                        {editResult && <div className="modal-body">
                         <h5 className="text-start top-heading-admin"> {editResult.explanation || ''}</h5>
                            <div className="card pt-4">
                              <div className="container">
                                {editResult && editResult.options && editResult.options.map((item, index) => 
                                <div className="row height d-flex justify-content-center align-items-center">
                                <h6 className="text-start">Odds de cada opción</h6>
                                <div className="col-6">
                                  <div className="form"> <img src={tickImage} alt /> <input type="text"  className="form-control form-input" name={`option_explanation_${index}_${item.option_explanation}`} placeholder={item.option_explanation} disabled /> </div>
                                </div>
                                <div className="col-3">
                                  <div className="form"><input type="text" className="form-control form-input" name={`odd_${item.option_explanation}`} placeholder={item.odd} onChange={(e) => handleChange(e)} /> </div>
                                </div>
                                <div className="col-3">
                                  <div className="form"> <input type="text" className="form-control form-input" name={`probablity_${item.option_explanation}`} placeholder={item.probablity} onChange={(e) => handleChange(e)}  /> </div>
                                </div>
                              </div>
                              )
                              }
                                
                                <hr />
                                <div className="row">
                                  <div className="d-flex justify-content-between">
                                    <div>
                                      <h6>Noticias</h6>
                                    </div>
                                    {/* <div>
                                      <i className="bi bi-plus-circle" />
                                    </div> */}
                                  </div>
                                </div>
                                {editResult && editResult.contestNewsName && editResult.contestNewsName.map((item, index) => 
                                <div className="row admin-label">
                                <div className="col-4">
                                  <label htmlFor>Nombre noticia</label>
                                  <div className="form"><input type="text" className="form-control myFormClass" name={`news_name_${index}_${item.news_name}`} placeholder={item.news_name}  onChange={(e) => handleChange(e)} disabled /> </div>
                                </div>
                                <div className="col-3 gx-0">
                                  <label htmlFor>Link</label>
                                  <div className="form"><input type="text" className="form-control myFormClass" name={`news_link_${index}_${item.news_link}`} placeholder={item.news_link} onChange={(e) => handleChange(e)}  disabled /> </div>
                                </div>
                                <div className="col-3">
                                  <label htmlFor>Fecha</label>
                                  <div className="form my-class"> <input type="date" className="form-control myFormClass" name={`news_date_${index}_${item.news_date}`} placeholder={item.news_date} onChange={(e) => handleChange(e)} disabled /> </div>
                                </div>
                                <div className="col-2 m-auto">
                                  <label htmlFor />
                                  <img src={cameraImage} className="img-cam" alt />
                                </div>
                              </div>
                                ) }
                                <hr />
                                <div className="row">
                                  <div className="d-flex justify-content-between">
                                    <div>
                                      <h6>Noticias</h6>
                                    </div>
                                    {/* <div>
                                      <i className="bi bi-plus-circle" />
                                    </div> */}
                                  </div>
                                </div>
                                {editResult && editResult.contestNewsLink && editResult.contestNewsLink.map((item, index) => 
                  
                                <div className="row admin-label">
                                  <div className="col-6">
                                    <label htmlFor>Nombre análisis</label>
                                    <div className="form"><input type="text" className="form-control myFormClass" name={`news_name_${index}_${item.news_name}`} placeholder={item.news_name} onChange={(e) => handleChange(e)} disabled /> </div>
                                  </div>
                                  <div className="col-6 gs-0">
                                    <label htmlFor>Link</label>
                                    <div className="form"><input type="text" className="form-control myFormClass" name={`news_link_${index}_${item.news_link}`} placeholder={item.news_link} onChange={(e) => handleChange(e)} disabled /> </div>
                                  </div>
                                </div>
                                )}
                                {/* <div class="row">
                                <div class="d-grid gap-2 col-12 mx-auto my-3">
                                  <button class="btn btn-primary login-btn" type="button">Log In</button>
                                </div>
                                <div class="strike mb-3">
                                  <span>or</span>
                                </div>
                              </div>
                              <div class="container">
                                <div class="row">
                                <div class="col-md-12">
                                  <div class="social-media text-center mt-3">
                                    <a href="#" class="btn-social btn-facebook mx-2"><i class="fa fa-facebook"></i></a>
                                    <a href="#" class="btn-social btn-twitter mx-2"><i class="fa fa-twitter"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-7">
                                <div className="d-grid gap-2 col-12 mx-auto my-3">
                                  <button className="btn btn-primary login-btn" type="button" onClick={() => handleEdit(item)}>Modificar</button>
                                </div>
                              </div>
                              <div className="col-5">
                                <div className="d-grid gap-2 col-12 mx-auto my-3">
                                  <button className="btn btn-primary login-btn-admin" type="button" data-bs-dismiss="modal">Cerrar apuesta</button>
                                </div>
                              </div>
                            </div>
                          </div>}
                        </div>
                      </div>
                    </div>
                    {/* modal edit ends here */}
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


