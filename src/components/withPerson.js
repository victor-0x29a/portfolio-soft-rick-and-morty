import React from "react";
import styled, { css } from "styled-components";

import { connect } from "react-redux";
const MapStateToProps = (state) => ({
  tema: state.tema,
});

class WithPerson extends React.Component {
  render() {
    this.Screen = styled.div`
      ${(props) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        ${props.area === "left" && "flex-direction:  row;"}
        ${props.area === "right" && "flex-direction:  row-reverse;"}
        img {
          width: 400px;
          height: 400px;
          object-fit: cover;
          object-position: 0 10%;
        }
        p {
          color: ${props.tema};
          text-align: justify;
          ${props.area === "left" && "margin-left: 200px;"}
          ${props.area === "right" && "margin-right: 200px;"}
          max-width: 400px;
          font-size: 1.75rem;
        }
        @media screen and (max-width: 1140px) {
          p {
            margin-right: 50px;
            ${props.area === "left" && "margin-left: 150px;"}
            ${props.area === "left" && "margin-right: 50px;"}
            ${props.area === "right" && "margin-right: 150px;"}
            ${props.area === "right" && "margin-left: 50px;"}
          }
        }
        @media screen and (max-width: 1140px) {
          p {
            font-size: 1.45rem;
            ${props.area === "left" && "margin-left: 100px;"}
            ${props.area === "right" && "margin-right: 100px;"}
          }
        }
        @media screen and (max-width: 800px) {
          img {
            width: 350px;
          }
          p {
            ${props.area === "left" && "margin-left: 50px;"}
            ${props.area === "right" && "margin-right: 50px;"}
          }
        }
        @media screen and (max-width: 720px) {
          p {
            font-size: 1.1rem;
          }
        }
        @media screen and (max-width: 640px) {
          flex-direction: column;
          p {
            margin-top: 50px;
            font-size: 1.25rem;
          }
        }
      `}
    `;
    return (
      <this.Screen area={this.props.area} tema={this.props.tema}>
        <img src={this.props.img} alt={this.props.alt} />
        <p>{this.props.text}</p>
      </this.Screen>
    );
  }
}

export default connect(MapStateToProps)(WithPerson);
