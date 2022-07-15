import { BoxButtonShadow } from "./BoxButtonShadow";

export const ButtonAction = ({ styleButton, title }) => (
  <div className="contain-button">
    <BoxButtonShadow styleShadow="buttonSelector">
      <button className={styleButton}> <h2 className="title-start-button">{title}</h2> </button>
    </BoxButtonShadow>
    </div>)