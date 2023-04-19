import { ContainerHeader } from "./styled";
import UltimaSessao from "../components/UltimaSessao/UltimaSessao";
import PrimeiraSessa from "../components/barraInicial/PrimeiraSessa";
import SegundaSessa from "../components/barraMarcas/SegundaSessa";
import BarraInicial from "../components/barraPix/BarraInicial";
import TerceiraSessao from "../components/barraImagem/TerceiraSessa";
import QuartaSessao from "../components/barraClear/QuartaSessao";
import QuintaSessao from "../components/barraLogos/QuintaSessao";
import SextaSessao from "../components/barraFolder/SextaSessao";
import SetimaSessão from "../components/barraLancamento/SetimaSesao";

export default function Main() {
  return (
    <ContainerHeader>
      <BarraInicial />

      <PrimeiraSessa />

      <SegundaSessa />

      <TerceiraSessao />

      <QuartaSessao />

      <QuintaSessao />

      <SextaSessao />

      <SetimaSessão />

      <UltimaSessao />
    </ContainerHeader>
  );
}
