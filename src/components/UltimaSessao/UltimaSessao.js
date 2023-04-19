import { BarraUltima } from "./styled";
import brinquedo1 from "../../assests/brinquedo1.png";
import brinquedo2 from "../../assests/brinquedo2.png";
import brinquedo3 from "../../assests/brinquedo3.png";
import brinquedo4 from "../../assests/brinquedo4.png";

export default function () {
  return (
    <BarraUltima>
      <div className="container-div">
        <ul>
          <li>
            <img src={brinquedo1} />
          </li>
          <li>
            <strong>FUNKO POP ROCKS </strong>
          </li>
          <li>
            <strong> KISS 124 THE CATMAN </strong>
          </li>
          <li>
            <strong>GLOWS EXCLUISIVE </strong>
          </li>
        </ul>

        <div className="info">
          <ul>
            <li style={{ color: "#9A9A9A", textDecoration: "line-through" }}>
              R$249
            </li>
            <li style={{ color: "#ffd700" }}>
              <strong> R$239,0</strong>
            </li>
          </ul>
        </div>

        <ul>
          <li style={{ color: "#9A9A9A" }}>
            <strong style={{ color: "black" }}>9x</strong>de{" "}
            <strong style={{ color: "black" }}>R$26,55</strong> sem juros
          </li>
          <li className="preco">R$215,08</li>
          <li style={{ color: "#9A9A9A" }}>no PIX,boleto ou deposito</li>
        </ul>
      </div>

      <div className="container-div">
        <ul>
          <li>
            <img src={brinquedo2} />
          </li>
          <li>
            <strong>MINICRAFT LEGENDS</strong>
          </li>
          <li>
            <strong>DELUXE</strong>
          </li>
          <li>
            <strong>EDITION-SWITCH</strong>
          </li>
        </ul>

        <div className="info">
          <ul>
            <li style={{ color: "#9A9A9A", textDecoration: "line-through" }}>
              R$500,00
            </li>
            <li style={{ color: "#ffd700" }}>
              <strong> R$496,00</strong>
            </li>
          </ul>
        </div>

        <ul>
          <li style={{ color: "#9A9A9A" }}>
            <strong style={{ color: "black" }}>9x</strong>de{" "}
            <strong style={{ color: "black" }}>R$55,11</strong> sem juros
          </li>
          <li className="preco">R$446,35</li>
          <li style={{ color: "#9A9A9A" }}>no PIX,boleto ou deposito</li>
        </ul>
      </div>


      <div className="container-div">
        <ul>
          <li>
            <img src={brinquedo3} />
          </li>
          <li>
            <strong>FUNKO POP</strong>
          </li>
          <li>
            <strong>THE FLASH 127 THE FLASH</strong>
          </li>
          <li>
            <strong>LIGHTS & SOUNDS</strong>
          </li>
        </ul>

        <div className="info">
          <ul>
            <li style={{ color: "#9A9A9A", textDecoration: "line-through" }}>
              R$359,00
            </li>
            <li style={{ color: "#ffd700" }}>
              <strong> R$339,00</strong>
            </li>
          </ul>
        </div>

        <ul>
          <li style={{ color: "#9A9A9A" }}>
            <strong style={{ color: "black" }}>9x</strong>de{" "}
            <strong style={{ color: "black" }}>R$37,66</strong> sem juros
          </li>
          <li className="preco">R$305,07</li>
          <li style={{ color: "#9A9A9A" }}>no PIX,boleto ou deposito</li>
        </ul>
      </div>


      <div className="container-div">
        <ul>
          <li>
            <img src={brinquedo4} />
          </li>
          <li>
            <strong>FUNGO POP </strong>
          </li>
          <li>
            <strong>DISNEY 222 CINDERELA</strong>
          </li>
          <li>
            <strong>GLITTER EXCLUISIVE</strong>
          </li>
        </ul>

        <div className="info">
          <ul>
            <li style={{ color: "#9A9A9A", textDecoration: "line-through" }}>
              R$391,00
            </li>
            <li style={{ color: "#ffd700" }}>
              <strong> R$299</strong>
            </li>
          </ul>
        </div>

        <ul>
          <li style={{ color: "#9A9A9A" }}>
            <strong style={{ color: "black" }}>9x</strong>de{" "}
            <strong style={{ color: "black" }}>R$33,32</strong> sem juros
          </li>
          <li className="preco">R$269,22</li>
          <li style={{ color: "#9A9A9A" }}>no PIX,boleto ou deposito</li>
        </ul>
      </div>
    </BarraUltima>
  );
}
