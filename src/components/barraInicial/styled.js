import styled from "styled-components";

export const BarraInicial = styled.div`
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-image: linear-gradient(#000, #222);

  .div-image {
    text-align: center;
  }


  .div-input {
    width: 100%;
    background: transparent;
    border: 1px solid #c7c7c7;
    line-height: 50px;
    height: 5px 0px 5px 5px;
    text-align: center;
    float: right;
    background-color: white;
    margin: 0 auto;
  


  }


  .input {
    width: 90%;
    border: #c7c7c7;
    border-radius: none;
    height: 8vh;
    margin-top: 10px;

  }

  .button {
    position: relative;
    right: 30px;
    top: unset;
    background: transparent;
    border: none;
    color: #000 !important;
    font-size: 18px;
    padding: 0;
  }

  .icones {
    margin-left: 10vh;
  }
`;