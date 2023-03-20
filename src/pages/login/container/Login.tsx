import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { BirzumLogin, LogoLogin } from "assets/svgs";
import { MainButton, TextInput } from "components";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { LoginContainer } from "./LoginContainer.style";
const Login = () => {
     // ? Hook form
     const {
          control,
          handleSubmit,
          reset,
          formState: { errors },
     } = useForm<any>();

     const submitHandler = (data: any) => {};
     return (
          <LoginContainer>
               <motion.div className="login-content">
                    <div className="login-header">
                         <div className="first-header">
                              <LogoLogin />
                              <BirzumLogin />
                         </div>

                         <div className="second-header">
                              <h2>Xush kelibsiz!</h2>
                              <p>Login va Parolingizni kiriting</p>
                         </div>
                         <form
                              className="login-form"
                              id="login-form"
                              onSubmit={handleSubmit(submitHandler)}
                         >
                              <TextInput
                                   control={control}
                                   labelText="Telefon raqam"
                                   placeholder="Telefone raqam"
                                   name="phoneNumber"
                                   star={false}
                                   errors={errors}
                                   type="number"
                                   rules={{
                                        required: true,
                                   }}
                              />

                              <TextInput
                                   control={control}
                                   name="password"
                                   labelText="Password"
                                   placeholder="******"
                                   star={false}
                                   errors={errors}
                                   type="password"
                                   rules={{
                                        required: true,
                                   }}
                              />

                              <div>
                                   <FormControlLabel
                                        control={<Checkbox />}
                                        label="Remember me"
                                   />
                              </div>
                              <MainButton
                                   variant="contained"
                                   type="submit"
                                   title="Login"
                                   fullWidth
                              />
                         </form>
                    </div>
               </motion.div>
          </LoginContainer>
     );
};

export default Login;
