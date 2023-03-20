import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import { TransitionProps } from "@mui/material/transitions";
import Typography from "@mui/material/Typography";

const Transition = React.forwardRef(function Transition(
     props: TransitionProps & {
          children: React.ReactElement;
     },
     ref: React.Ref<unknown>
) {
     return <Slide direction="up" ref={ref} {...props} />;
});
interface IFullScreen {
     open: boolean;
     setOpen: any;
     children: React.ReactNode;
}

const FullScreenDialog: React.FC<IFullScreen> = ({
     open,
     setOpen,
     children,
}) => {
     const handleClickOpen = () => {
          setOpen(true);
     };

     const handleClose = () => {
          setOpen(false);
     };

     return (
          <div>
               <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
               >
                    {/* <AppBar sx={{ position: "relative" }}>
                         <Toolbar>
                              <IconButton
                                   edge="start"
                                   color="inherit"
                                   onClick={handleClose}
                                   aria-label="close"
                              >
                                   <CloseIcon />
                              </IconButton>
                              <Typography
                                   sx={{ ml: 2, flex: 1 }}
                                   variant="h6"
                                   component="div"
                              >
                                   Sound
                              </Typography>
                              <Button
                                   autoFocus
                                   color="inherit"
                                   onClick={handleClose}
                              >
                                   save
                              </Button>
                         </Toolbar>
                    </AppBar>
                    <List>
                         <ListItem button>
                              <ListItemText
                                   primary="Phone ringtone"
                                   secondary="Titania"
                              />
                         </ListItem>
                         <Divider />
                         <ListItem button>
                              <ListItemText
                                   primary="Default notification ringtone"
                                   secondary="Tethys"
                              />
                         </ListItem>
                    </List> */}
                    {/* <Toolbar>
                         <IconButton
                              edge="start"
                              color="inherit"
                              onClick={handleClose}
                              aria-label="close"
                         >
                              <CloseIcon />
                         </IconButton>
                         <Typography
                              sx={{ ml: 2, flex: 1 }}
                              variant="h6"
                              component="div"
                         >
                              Sound
                         </Typography>
                         <Button
                              autoFocus
                              color="inherit"
                              onClick={handleClose}
                         >
                              save
                         </Button>
                    </Toolbar> */}
                    {children}
               </Dialog>
          </div>
     );
};
export default FullScreenDialog;
