import { BarraInicial } from "./styled";
import logo from "../../assests/logo.png";
import lupa from "../../assests/lupa.png";
import comments from "../../assests/comments.png";
import truck from "../../assests/truck.png";
import user from "../../assests/user .png";
import car from "../../assests/car.png";

export default function PrimeiraSessa(){
    return(
        <BarraInicial>
        <div className="div-image">
          <img className="image-logo" src={logo} />
        </div>

        <div className="div-input">
          <input className="input" placeholder="Precisa de alguma coisa ?" />
          <a href="#" className="button">
            <img src={lupa} />
          </a>
        </div>

        <div className="div-icones">
          <a href="#" className="icones">
            <img src={comments} />
          </a>
          <a href="#" className="icones">
            <img src={truck} />
          </a>
          <a href="#" className="icones">
            <img src={user} />
          </a>
          <a href="#" className="icones">
            <img src={car} />
          </a>
        </div>
     
      </BarraInicial>
    )
}