import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";

interface IProps {
     onclickHandler: ()=> void
}

const DeleteButton = ({onclickHandler}:IProps) => {
     return (
          <div>
               {" "}
               <Button
                    onClick={onclickHandler}
                    sx={{
                         padding: "0 !important",
                         width: "40px !important",
                         height: "40px",
                         minWidth: "auto",
                         borderRadius: "50%",
                        marginTop: "22px"
                    }}
                    variant="outlined"
                    color="error"
               >
                    <DeleteIcon />
               </Button>
          </div>
     );
};

export default DeleteButton;
