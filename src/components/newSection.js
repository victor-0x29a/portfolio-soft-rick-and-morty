import React from "react";

import styled, { css } from "styled-components";

import { connect } from "react-redux";
const MapStateToProps = (state) => ({
  tema: state.tema,
});

class NewSection extends React.Component {
  render() {
    this.Area = styled.section`
      width: 100%;
      display: flex;
      font-family: Arial, Helvetica, sans-serif;
      margin-top: 2rem;
      margin-bottom: 1rem;
      flex-direction: column;
      ${(props) => css`
        color: ${props.tema.color};
        span {
          display: flex;
          justify-content: ${props.area === "left" ? "start" : "end"};
          flex-direction: ${props.area === "left" ? "row-reverse" : "row"};
          margin-bottom: 2rem;
        }
        h2 {
          font-size: 2.75rem;
          margin-left: ${props.area === "left" && "30px"};
          margin-right: ${props.area === "right" && "30px"};
          ${props.animation && "animation: textAnim 4s infinite linear;"}
        }
        @keyframes textAnim {
          0% {
            color: ${props.tema.color};
          }
          25% {
            color: ${props.tema.special};
          }
          50% {
            color: ${props.tema.color};
          }
          75% {
            color: ${props.tema.special};
          }
          100% {
            color: ${props.tema.color};
          }
        }
      `}
      @media screen and (max-width: 1140px) {
        h2 {
          font-size: 2.4rem;
        }
      }
      @media screen and (max-width: 720px) {
        h2 {
          font-size: 2rem;
        }
      }
      @media screen and (max-width: 640px) {
        h2 {
          font-size: 1.9rem;
        }
      }
    `;
    return (
      <this.Area
        area={this.props.area}
        animation={this.props.animation}
        tema={this.props.tema}
      >
        <span>
          <h2>{this.props.title}</h2>
          <hr />
        </span>
        {this.props.children}
      </this.Area>
    );
  }
}

export default connect(MapStateToProps)(NewSection);
