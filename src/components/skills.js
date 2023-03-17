import React, { memo } from "react";

import styled, { css } from "styled-components";

import { connect } from "react-redux";
const MapStateToProps = (state) => ({
  tema: state.tema,
});

class SkillsComponent extends React.Component {
  render() {
    this.Screen = styled.ul`
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
      ${(props) => css`
        li {
          cursor: default;
          user-select: none;
          margin: 2.15rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          list-style: none;
          color: ${props.tema.color};
          animation: float 3s infinite linear;
          img {
            transition-duration: 600ms;
            width: 50px;
            height: auto;
            display: block;
          }
          span {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1.2rem;
            transition-duration: 600ms;
          }
        }
        @media screen and (max-width: 720px) {
          li {
            img {
              width: 40px;
            }
            span {
              font-size: 1.1rem;
            }
          }
        }
      `}
      @keyframes float {
        0% {
          transform: translate(0, 0px);
        }
        50% {
          transform: translate(0, 8px);
        }
        100% {
          transform: translate(0, -0px);
        }
      }
    `;
    return (
      <this.Screen tema={this.props.tema}>
        {this.props.data?.map((skill, i) => (
          <li key={i}>
            <img src={skill.img} alt={skill.Name} />
            <span>{skill.Name}</span>
          </li>
        ))}
      </this.Screen>
    );
  }
}

export default connect(MapStateToProps)(memo(SkillsComponent));
