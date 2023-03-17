import React from "react";

import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
const MapStateToProps = (state) => ({
  tema: state.tema,
});

class NotFound extends React.Component {
  render() {
    this.Content = styled.div`
      margin-top: 150px;
      width: 100%;
      height: 100px;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      ${(props) => css`
        h2 {
          cursor: default;
          font-size: 2.75rem;
          font-family: Arial, Helvetica, sans-serif;
          color: ${props.tema.special};
          ${props.tema.mode === "light" && "color: black;"}
        }
        a {
          font-weight: bold;
          margin-top: 20px;
          font-size: 1.75rem;
          text-decoration: none;
          font-family: Arial, Helvetica, sans-serif;
          color: ${props.tema.special};
          ${props.tema.mode === "light" && "color: black;"}
          animation: clickMe 900ms infinite linear;
        }
        @keyframes clickMe {
          0% {
            color:  ${props.tema.special};
          transform: translate(0, 0px);
        }
        25% {

          color:  white;
          transform: translate(0, 4px);
        }
        50% {

          color:  ${props.tema.special};
          transform: translate(0, -0px);
        }
        }
        @media screen and (max-width: 800px) {
          h2 {
            font-size: 2.45rem;
          }
        }
        @media screen and (max-width: 640px) {
          h2 {
            font-size: 2.25rem;
          }
        }
      `}
    `;
    return (
      <this.Content tema={this.props.tema}>
        <h2>Página não encontrada!</h2>
        <Link to={"/"} replace={true}>Voltar</Link>
      </this.Content>
    );
  }
}

export default connect(MapStateToProps)(NotFound);
