import React from "react";

// Assets
import FirstPerson from "../../assets/personagens/rickandmorty.png";
import SecondPerson from "../../assets/personagens/duplerick.png";
import HeroImage from "../../assets/hero.jpg";

// Data
import Skills from "../../data/skills";

// Components
import HeroComponent from "../../components/hero";
import NewSection from "../../components/newSection";
import WithPerson from "../../components/withPerson";
import SkillsComponents from "../../components/skills";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <HeroComponent
          img={HeroImage}
          alt={"Rick de Rick and morty"}
          title={"Victor"}
          text={
            "Sou um desenvolvedor que gosta de explorar novas tecnologias, amo o back-end, assim como o front-end. "
          }
        />
        <NewSection area={"right"} title={"Me"} animation={true}>
          <WithPerson
            img={FirstPerson}
            alt={"Rick and Morty"}
            text={`No começo de tudo, comecei estudando python, logo após conheci o JavaScript, pratiquei durante 6 meses JavaScript e Python mesclando com HTML e CSS, depois fui conhecendo "novas" linguagens de programação e frameworks, logo conheci um pouco de tudo. Porém JavaScript me encantou!`}
            area={"left"}
          />
        </NewSection>
        <NewSection area={"left"} title={"Skills"} animation={true}>
          <SkillsComponents data={Skills.Skills} />
        </NewSection>
        <NewSection area={"right"} title={"Hard Skills"} animation={true}>
          <SkillsComponents data={Skills.HardSkills} />
        </NewSection>
        <NewSection area={"left"} title={"More"} animation={true}>
          <WithPerson
            img={SecondPerson}
            alt={"Rick and Morty"}
            text={`Hoje o meu foco é mais voltado para a área de desenvolvimento web, tenho experiência com gateway de pagamento, APIs em real-time, APIs Rest e Restful. Sempre utilizando o React para front-end e Node para back-end.`}
            area={"right"}
          />
        </NewSection>
      </div>
    );
  }
}
