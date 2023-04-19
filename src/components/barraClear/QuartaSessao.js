import { BarraClear } from "./styled";
import vetor from "../../assests/Vector 1.png"
import texto from "../../assests/NAVEGUE PELAS MARCAS.png"

export default function QuartaSessao(){
    return(
        <BarraClear>
        <ul>
          <li>
            <img src={vetor} />
          </li>
          <li>
            <img src={texto} />
          </li>
          <li>
            <img src={vetor} />
          </li>
        </ul>
      </BarraClear>
    )
}