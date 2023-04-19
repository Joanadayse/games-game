import styled from "styled-components";

export const BarraTerceira = styled.div`
  width: 100%;
  background-color: #0e0e0e;
  box-shadow: 0px -20px 40px 0px rgb(0 0 0 / 50%);
  margin: 0 auto;
  color: white;
  font-weight: bold;
  font-size: large;
  height: 80px;
  padding: 10px;

  ul {
    margin: auto;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }

  .div-ul {
    display: flex;
    justify-content: center;
    padding: 30px;
  }

  li {
    border: none;
    padding: 10px 15px 0;
    list-style-type: none;
    float: left;
  }
`;