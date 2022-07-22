import React from "react";
import { Link } from "react-router-dom";
import { ButtonAction } from "../shared/ButtonAction";
import { ConsumingFirstSlice } from "./redux_toolkit_impl/components/ConsumingFirstSlice";
import { ConsumingSecondSlice } from "./redux_toolkit_impl/components/ConsumingSecondSlice";
import { ConsumingThirdSlice } from "./redux_toolkit_impl/components/ConsumingThirdSlice";
import '../../styles/css/GoHome.css'

export const ReduxToolkit = () => {

  return (
    <>
      <ConsumingFirstSlice />
      <ConsumingSecondSlice />
      <div className="go-home">
      <ConsumingThirdSlice />
      <Link to="/"><ButtonAction styleButton="button-27" title="Go home" /></Link>
      </div>
    </>
  );
};
