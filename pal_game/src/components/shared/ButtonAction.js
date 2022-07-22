import { BoxButtonShadow } from "./BoxButtonShadow";

export const ButtonAction = ({ styleButton, title }) => (
    <BoxButtonShadow styleShadow="buttonSelector">
      <button className={styleButton}> <h2 className="title-start-button">{title}</h2> </button>
    </BoxButtonShadow>
    )