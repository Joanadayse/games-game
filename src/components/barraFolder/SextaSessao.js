import { BarraFolder } from "./styled";
import image5 from "../../assests/image 9.png";
import image6 from "../../assests/image 10.png";
import image7 from "../../assests/image 11.png";

export default function SextaSessao(){
    return(
        <BarraFolder>
        <ul>
          <li>
            <img src={image5} />
          </li>
          <li>
            <img src={image6} />
          </li>
          <li>
            <img src={image7} />
          </li>
        </ul>
      </BarraFolder>
    )
}