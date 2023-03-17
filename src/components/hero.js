import React from "react";

import styled, { css } from "styled-components";

export default class HeroComponent extends React.Component {
  render() {
    this.Screen = styled.div`
      width: 100%;
      height: 500px;
      display: flex;
      align-items: center;
      ${(props) => css`
        height: 500px;
        background-repeat: no-repeat;
        background-blend-mode: darken;
        background: url(${props.img}), rgba(255, 50, 50, 0.4);
        background-position: 100%;
        background-size: cover;
        border-radius: 0 0 12px 12px;
        box-shadow: inset 2em 0 12em black;
        background-attachment: fixed;

        article {
          padding: 10px;
          margin-left: 70px;
          display: flex;
          flex-direction: column;
          position: absolute;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
          h2 {
            color: white;
            font-size: 2.75rem;
            max-width: 120px;
            position: relative;
            right: 20px;
            bottom: 5px;
            &::after {
              content: "_";
              font-weight: bold;
              animation: Code 820ms infinite linear;
            }
          }
          p {
            font-size: 1.25rem;
            max-width: 340px;
            text-align: justify;
          }
          @keyframes Code {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        }
      `}

      @media screen and (max-width: 1140px) {
        article {
          h2 {
            font-size: 2.4rem;
          }
          p {
            font-size: 1.15rem;
          }
        }
      }
      @media screen and (max-width: 800px) {
        article {
          margin-left: 25px;
        }
      }
      @media screen and (max-width: 720px) {
        background-position: 20%;
        height: 400px;
        article {
          h2 {
            font-size: 2rem;
          }
        }
      }
      @media screen and (max-width: 640px) {
        article {
          h2 {
            font-size: 1.9rem;
          }
          p {
            font-size: 1rem;
          }
        }
      }
    `;
    return (
      <this.Screen img={this.props.img} tema={this.props.tema}>
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </article>
      </this.Screen>
    );
  }
}
