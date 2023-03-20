import { MainButtonStyled } from "./MainButton.style";
import Button from "@mui/material/Button";
import { ButtonProps } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";

// @ts-ignore
interface IButtonProps extends ButtonProps {
     typeBtn?: string;
     title?: string | React.ReactNode;
}

const MainButton: React.FC<IButtonProps> = ({ typeBtn, title, ...props }) => {
     return (
          <MainButtonStyled variant={props.variant} typeBtn={typeBtn || ""}>
               <Button
                    {...props}
                    color="primary"
                    endIcon={props.disabled && <CircularProgress size={25} />}
               >
                    {title}
               </Button>
          </MainButtonStyled>
     );
};

export default MainButton;
