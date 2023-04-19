import { BarraPix } from "./styled";
import icone from "../../assests/icone-pix.svg"

export default function BarraInicial (){
    return(
        <BarraPix>
        <img src={icone} />
        <p>ACEITAMOS PIX</p>
      </BarraPix> 
    )
}