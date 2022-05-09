import React from "react";
import { ErrorMessage } from "formik";

const CErrorMessage = ({name}) =>
{
return(
  <div style={{color:"red"}}>
   <ErrorMessage name="{name}"></ErrorMessage>
  </div>
)
}

export default CErrorMessage;