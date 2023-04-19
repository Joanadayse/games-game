import { BarraImage } from "./styled";
import imagemdiv from "../../assests/imagem-div.png"
import imagemdois from "../../assests/imagem-div-dois.png"

export default function TerceiraSessao(){
    return(
        <BarraImage>
        <div>
          <img src={imagemdiv} />
        </div>
        <div>
          <img src={imagemdois} />
        </div>
      </BarraImage>
    )
}