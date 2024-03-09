import React from 'react'
import classes from './PortfolioItem.module.css';
function ItemDetails() {
  return (
    <div className={classes.item_details}>
        <h2>Item Details</h2>
        <hr/>
        <div className={classes.item_details_container}>
          {/* <img src={}/> */}
        </div>
    </div>
  )
}

export default ItemDetails