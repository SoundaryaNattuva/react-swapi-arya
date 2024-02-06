import './ShipDetail.css'
import { useEffect, useState } from "react";

const ShipDetails = (props) => {
  useEffect (() => {
    const fetchShipData = async () => {
      const shipData = await getStarShips()
      setShips(shipData.results)
    }
    fetchShipData()
  },[])
  
  console.log(props)
  
  
  return ( 
    <div>
      <h1> {props.name} Details</h1>
      <h3></h3>
    </div>
  );
}

export default ShipDetails;