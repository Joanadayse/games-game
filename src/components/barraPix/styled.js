import styled from "styled-components";

export const BarraPix = styled.div`
  width: 100%;
  background-color: #ffd700;
  text-align: center;
  height: 70px;

  img {
    width: 40px;
    height: 40px;
    filter: invert(1);
    display: inline;
    float: left;
    margin-left: 43%;
    margin-top: 10px;
  }

  p {
    color: white;
    font-family: "Open Sans", sans-serif;
    float: left;
    margin-left: 30px;
    font-size: 30px;
    margin-bottom: 80px;
    margin-top: 13px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
