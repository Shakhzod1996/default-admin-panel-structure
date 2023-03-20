import React from "react";
import { useNavigate } from "react-router-dom";
import MainButton from "../button/MainButton";
import { SaveCancelStyled } from "./SaveCancelButton.style";
import { ButtonProps } from "@material-ui/core";

interface IBtnProps extends ButtonProps {
     cancelTitle?: string;
     SubmitTitle?: string;
     isCancelFromRoute?: boolean;
     cancelClick?: any;
}
const SaveCancelBtn = ({
     cancelTitle = "Ortga qaytish",
     SubmitTitle = "Saqlash",
     isCancelFromRoute = true,
     cancelClick,
     ...props
}: IBtnProps) => {
     const navigate = useNavigate();

     const cancelClickHandler = () => {
          if (isCancelFromRoute) {
               navigate(-1);
          } else {
               cancelClick();
          }
     };
     return (
          <SaveCancelStyled>
               <div className="btns-container">
                    <MainButton
                         onClick={cancelClickHandler}
                         title={cancelTitle}
                         variant="outlined"
                    />
                    <MainButton
                         type="submit"
                         title={SubmitTitle}
                         variant="contained"
                         {...props}
                    />
               </div>
          </SaveCancelStyled>
     );
};

export default SaveCancelBtn;
