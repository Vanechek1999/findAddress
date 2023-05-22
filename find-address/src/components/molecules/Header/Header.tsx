import TextWithIcon from "../TextWithIcon/TextWithIcon";
import Paper from "../../atoms/Paper/Paper";

import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <Paper
        top={{ all: 16 }}
        right={{ all: 32 }}
        bottom={{ all: 16 }}
        left={{ all: 32 }}
        display="flex"
        className="Header-Content"
      >
        <a href="/">
          <TextWithIcon
            color="white"
            leftSide
            padding={{ all: 24 }}
            iconSize={48}
            textSize={20}
            textWeight={700}
            svgType="logo"
          >
            Wrench CRM
          </TextWithIcon>
        </a>
        <TextWithIcon
          color="white"
          leftSide
          padding={{ all: 16 }}
          iconSize={48}
          textSize={20}
          textWeight={700}
          svgType="person"
        >
          Имя Фамилия
        </TextWithIcon>
      </Paper>
    </header>
  );
};

export default Header;
