import { BarraLancamento } from "./styled";
import vetor from "../../assests/Vector 1.png";
import texto1 from "../../assests/LANÇAMENTOS.png";

export default function SetimaSessão(){
return(
  <BarraLancamento>
  <ul>
    <li>
      <img src={vetor} />
    </li>
    <li>
      <img src={texto1} />
    </li>
    <li>
      <img src={vetor} />
    </li>
  </ul>
</BarraLancamento>
)
}