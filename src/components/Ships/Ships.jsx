import ShipCard from "../ShipCard/ShipCard";
import getStarShips from '../../services/sw-api'
import { useEffect, useState } from "react";

const Ship = () => {
  const [ships, setShips] = useState ([])

  useEffect (() => {
    const fetchShipData = async () => {
      const shipData = await getStarShips()
      setShips(shipData.results)
    }
    fetchShipData()
  },[])
  console.log(ships)
  return (
    <ul>
      <h1>All Ship Cards</h1>
      {ships.map((ship) => (
        <ShipCard
          className="container" 
          key={ship._id}
          ship = {ship}
        />
      ))}
    </ul>
  );
}

export default Ship;