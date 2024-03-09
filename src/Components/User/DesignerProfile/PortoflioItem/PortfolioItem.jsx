import React from 'react'
import classes from './PortfolioItem.module.css'
import { useLocation ,useNavigate,useParams} from 'react-router-dom';
import ItemDetails from './ItemDetails';
import ItemDetailsSecond from './ItemDetailsSecond';

function PortfolioItem({data}) {
  const loc = useLocation();
  const nav=useNavigate();
  console.log(loc.state);
  const prams = useParams();
  console.log(prams.id);

function editPortfolio(){
   
    nav(`/designerprofile/gallary${data.id}`, { state: data });
}

function deletePortfolio(){
   
  nav(`/designerprofile/gallary${data.id}`, { state: data });
}


  return (
    <div className={classes.container}>
        <div className={classes.pagetitle}>
         <h1>Design home</h1>
         <select>
            <option onClick={editPortfolio}>Edit Item</option>
            <option  onClick={deletePortfolio}>Delete Item</option>
         </select>
        </div>
        <div  className={classes.item_container}>
        <ItemDetails/>
       <ItemDetailsSecond/>
        </div>
       
        
        
    </div>
  )
}

export default PortfolioItem