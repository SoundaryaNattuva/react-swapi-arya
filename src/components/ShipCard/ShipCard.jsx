import './ShipCard.css'
import { Link } from "react-router-dom"
import ShipDetails from '../ShipDetails/ShipDetail';

const ShipCard = (props) => {
  return ( 

      <section className="each-card">
        <Link 
          to={`/shipdetails/${props.ship.url.replace('https://swapi.dev/api/starships/',"")}`}
        >
            <h2>{props.ship.name}</h2>
        </Link>
      </section>

  );
}
 
export default ShipCard;