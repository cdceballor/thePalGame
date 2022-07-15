import React, { useState } from "react";
import { ButtonAction } from "../shared/ButtonAction";
import { Link, useNavigate } from "react-router-dom";

export const ReduxHome = () => {
  const navigate = useNavigate();
  return (
    <Link to="redux-classic">
      <ButtonAction styleButton="button-51" title="Redux classic" />
    </Link>
  );
};
