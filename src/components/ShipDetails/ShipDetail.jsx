import './ShipDetail.css'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const ShipDetails = (props) => {
  const { shipId } = useParams()
  const [ship, setShip] = useState ({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://swapi.dev/api/starships/${shipId}`);
      const jsonData = await response.json();
      setShip(jsonData)
      console.log(jsonData.model)
      console.log(jsonData.manufacturer)
    }
    fetchData();
  }, []);
  
  return ( 
    <div>
      <div className="details-card">
          <p>Name: {ship.name} </p>
          <p>Model: {ship.model} </p>
          <Link to='/ships'> Return </Link>
      </div>
    </div>
  );
}

export default ShipDetails;