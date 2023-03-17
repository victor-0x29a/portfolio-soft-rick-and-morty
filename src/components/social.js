import React from "react";

import styled from "styled-components";

import { connect } from "react-redux";
const MapStateToProps = (state) => ({
  tema: state.tema,
});
const MapActionsToProps = (dispatch) => ({
  setTheme: (value) => {
    dispatch({ type: "SET_THEME", value: value });
  },
});

class SocialArea extends React.Component {
  changeTheme() {
    this.props.tema.mode === "dark"
      ? this.props.setTheme("light")
      : this.props.setTheme("dark");
  }
  render() {
    this.Screen = styled.footer`
      border-radius: 12px 12px 0 0;
      position: absolute;
      left: 0;
      padding-top: 50px;
      padding-bottom: 50px;
      margin-top: 120px;
      background-color: #10100f;
      display: flex;
      justify-content: space-between;
      justify-content: center;
      font-family: Arial, Helvetica, sans-serif;
      p {
        margin-top: 4%;
        position: relative;
        width: 100%;
        height: 100%;
        text-align: justify;
        max-width: 400px;
        font-size: 1.45rem;
        color: gray;
        button {
          background-color: transparent;
          border: 0;
          outline: 0;
          margin-top: 20px;
          font-size: 2rem;
          cursor: pointer;
        }
      }
      ul {
        margin-left: 200px;
        width: 400px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        li {
          list-style: none;
          font-size: 2rem;
          font-weight: bold;
          cursor: pointer;
          a {
            transition-duration: 400ms;
            width: 155px;
            text-decoration: none;
            color: gray;
            &:hover {
              color: white;
            }
          }
        }
      }
      @media screen and (max-width: 1140px) {
        p {
          font-size: 1.35rem;
        }
        ul {
          margin-left: 50px;
        }
      }
      @media screen and (max-width: 912px) {
        p {
          font-size: 1.35rem;
        }
        ul {
          width: 300px;
          margin-left: 0px;
          li {
            font-size: 1.75rem;
          }
        }
      }
      @media screen and (max-width: 800px) {
        p {
          width: 250px;
          font-size: 1.35rem;
        }
        ul {
          width: 200px;
        }
      }
      @media screen and (max-width: 640px) {
        ul {
          li {
            font-size: 1.45rem;
          }
        }
      }
    `;
    return (
      <this.Screen tema={this.props.tema}>
        <p>
          Quer me conhecer mais um pouco!? Confira meu GitHub, sempre estarei
          postando projetos novos com React e Node! <br /> Caso queira conferir
          minhas certificações e um pouco mais sobre meu profissional, não deixe
          de conferir meu linkedin!
          <br />
          <button onClick={() => this.changeTheme()}>
            {this.props.tema.mode === "dark" ? "💡" : "🔌"}
          </button>
        </p>
        <ul>
          {this.props.data?.map((social, i) => (
            <li key={i}>
              <a href={social.Link}>{social.Name}</a>
            </li>
          ))}
        </ul>
      </this.Screen>
    );
  }
}

export default connect(MapStateToProps, MapActionsToProps)(SocialArea);
