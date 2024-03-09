import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPortfolio, getPortfolio } from '../../../Redux/Slices/portfolioSlice'
import PortfolioCard from './PortfolioCard'; 
import classes from'./Portfolio.module.scss';
function Portfolio() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const portfolios = useSelector(state => state.portfolioReducer.portfolios);
  const loading = useSelector(state => state.portfolioReducer.loading);
   console.log(portfolios)
  useEffect(() => {
    dispatch(getPortfolio());
  }, [dispatch]);

  function addPortfolio() {
    nav('/designerprofile/gallary');
    
  
}


  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-secondary my-5 mydiv" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
       
        <div className={classes.container}>
            <div className={classes.portfolio_title}>
            <h1>My Portfolio</h1>
            <button className={classes.add_button}    onClick={addPortfolio}>Add</button>
            </div>
          <ul className={classes.cards}>
            {portfolios.map(item => (
              <li key={item.id} className='col-12'>
                <PortfolioCard data={item} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Portfolio;
