import Button from "@material-ui/core/Button";
import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const EditButton = ({ onClick }: any) => {
     return (
          <div>
               <Button  onClick={onClick}>
                    <BorderColorIcon color="info" />
               </Button>
          </div>
     );
};

export default EditButton;
