import { BarraLogo } from "./styled";
import image1 from "../../assests/image 7.png";
import image2 from "../../assests/image 8.png";
import image3 from "../../assests/image 5.png";
import image4 from "../../assests/image 6.png";


export default function QuintaSessao(){
    return(
        <BarraLogo>
        <ul>
          <li>
            <img src={image1} />
          </li>
          <li>
            <img src={image2} />
          </li>
          <li>
            <img src={image3} />
          </li>
          <li>
            <img src={image4} />
          </li>
        </ul>
      </BarraLogo>
    )
}