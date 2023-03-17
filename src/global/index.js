import { createGlobalStyle, css } from "styled-components";

import { connect } from "react-redux";
const MapStateToProps = (state) => ({
  tema: state.tema,
});

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
body{
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    ${(props) => css`
      background-color: ${props.tema.background};
    `}
    #tsparticles{
        position: fixed;
        width: 100%;
        z-index: -5;
    }
    .container{
        z-index: 2;
        width: 1240px;
        max-width: 1240px;
    }
    footer{
        width: 100%;
    }
}
@media screen and (max-width: 1240px){
    body{
        .container{
            max-width: 1140px;
        }
    }
}
@media screen and (max-width: 1140px){
    body{
        .container{
            max-width: 912px;
        }
    }
}
@media screen and (max-width: 912px){
    body{
        .container{
            max-width: 800px;
        }
    }
}
@media screen and (max-width: 800px){
    body{
        .container{
            max-width: 720px;
        }
    }
}
@media screen and (max-width: 720px){
    body{
        .container{
            max-width: 640px;
        }
    }
}
@media screen and (max-width: 640px){
    body{
        .container{
            max-width: 500px;
        }
    }
}
`;
export default connect(MapStateToProps)(GlobalStyle);
