import React from 'react'
import classes from './PortfolioItem.module.css';
function ItemDetailsSecond() {
  return (
    <div  className={classes.item_details_second}>
        <div className={classes.item_card}>
        <h2>Item Details</h2>
        <hr/>
        <div className={classes.item_card_container}>
         <h6>Designer Name</h6><a>Aya Tarek</a>
         <h6>Views</h6><p>10</p>
         <h6>Likes</h6><p>5</p>
         <h6>Date</h6><p>3/3/2024</p>
        </div>
        </div>

        <div  className={classes.item_share}>
            <h2>Share the work</h2>
            <hr/>
            <div className={classes.item_link}><a>https://mostaql.com/portfolio/1906</a></div>
            <div className={classes.sharebtn}>
                <button>Linkedin<i className="fa-brands fa-linkedin-in"></i></button>
                <button>Facebook<i className="fa-brands fa-facebook-f"></i></button>
                <button>Twitter<i className="fa-brands fa-twitter"></i></button>
            </div>
        </div>
    </div>
  )
}

export default ItemDetailsSecond