import React from 'react'
import img from '../../../assets/images/background-02.jpg'
// import './DesignerProfile.scss'
import { useNavigate } from 'react-router-dom'
import classes from './Portfolio.module.scss'
function PortfolioCard({data}) {
  const nav = useNavigate();

  function itemDetails() {
    nav(`/itemdetails/${data.id}`, { state: data });
    
  
}
 
  return (
    <>

  
    <a href="" className={classes.card}>
	<img src={img} className={classes.card_image} alt="" />
      <div className={classes.card_overlay}>
        <div className={classes.card_header}>
          <svg className={classes.card_arc} xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className={classes.card_thumb} src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div className={classes.card_header_text}>
            <h6 className={classes.card_title}>Design Home</h6>            
            <span className={classes.card_status}>1 hour ago</span>
			<div className={classes.card_status}><i className="fa fa-eye "></i></div>
          </div>
        </div>
		<div className={classes.read_more}>
        <button className={classes.card_btn}  onClick={itemDetails}>Read More</button>
		</div>
      </div>
    </a>      
 
 


{/* ////////////////////card2 */}

{/* <article className={classes.card}>
  <img className={classes.card_background}
    src={img}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div className={`${classes.card__content} ${classes.flow}`}>
    <div className={`${classes.card_content}_container ${classes.flow}`}>
      <h2 className={classes.card_title}>Colombia</h2>
      <p className={classes.card_description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button className={classes.card_button}>Read more</button>
  </div>
</article> */}









</>
  )
}

export default PortfolioCard