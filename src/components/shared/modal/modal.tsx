import React from "react";
import { ModalUnstyledOwnProps } from "@mui/material/Modal";
import { ModalStyled } from "./modal.style";

const Modal: React.FC<ModalUnstyledOwnProps> = ({ children, ...props }) => {
     return (
          <>
               <ModalStyled {...props} className="modal-container">
                    {children}
               </ModalStyled>
          </>
     );
};

export default Modal;
