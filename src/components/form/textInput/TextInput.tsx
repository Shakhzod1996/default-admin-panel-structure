import React, { useEffect, useRef } from "react";
import { TextFieldProps } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { Control, RegisterOptions } from "react-hook-form/dist/types";
import { IFieldError, IFormNames } from "types/form";
import { firstErrorField, get } from "utils";
import { TextInputStyled } from "./TextInput.style";
import { FormControl, BaseTextFieldProps } from "@mui/material";
import moment from "moment";
interface ITextField {
     control?: Control<any>;
     labelText?: string;
     star?: boolean;
     name?: string;
     FORM_NAMES?: IFormNames;
     rules?: Omit<
          RegisterOptions<any, any>,
          "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
     >;
     errors:
          | {
                 [key: string]: IFieldError;
            }
          | {};
}
export type TFieldErrorType = "required" | "pattern" | "min" | "max";

const TextInput: React.FC<ITextField & BaseTextFieldProps> = ({
     labelText,
     errors,
     control,
     name,
     rules = { required: false },
     FORM_NAMES,
     star = true,
     ...props
}) => {
     return (
          <TextInputStyled
               isError={!!errors && !!get(errors, `${name}`, undefined)}
          >
               <>
                    <Controller
                         name={name}
                         control={control}
                         rules={rules}
                         render={({
                              field: { onChange, onBlur, value, name, ref },
                              fieldState: { error },
                         }) => {
                              return (
                                   <FormControl>
                                        <label htmlFor="outlined-basic">
                                             {labelText}
                                             {star && <span>*</span>}
                                        </label>
                                        <TextField
                                             onChange={(val) => onChange(val)}
                                             onBlur={onBlur}
                                             value={value}
                                             name={name}
                                             ref={ref}
                                             id="outlined-basic"
                                             variant="outlined"
                                             {...props}
                                        />
                                        {error /* &&
                                             get(
                                                  error,
                                                  `${name}`,
                                                  undefined
                                             ) */ && (
                                             <>
                                                  <h6 className="text-error mt-1">
                                                       {labelText} majburiy
                                                       maydon
                                                  </h6>
                                             </>
                                        )}
                                   </FormControl>
                              );
                         }}
                    />
               </>
          </TextInputStyled>
     );
};

export default TextInput;
