import { FC, ReactNode, useEffect, useRef } from "react";
import { MenuItem, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import {
     SelectFormContainerStyled,
     SelectFormStyled,
} from "./SelectForm.style";
import useDebounce from "hooks/useDebounce";
import { IErrors, IFormNames, IOption } from "types/form";
import { firstErrorField, get } from "utils";
interface ISelectProps {
     name: string;
     control: any;
     label?: string;
     errors?: IErrors;
     className?: string;
     handleInputChange?: any;
     dataKey?: string;
     rules?: any;
     defaultValue?: any;
     defaultInputValue?: string;
     multiple?: boolean;
     onChangeSelect?: any;
     placeholder?: string;
     options?: IOption[];
     value?: any;
     FORM_NAMES?: IFormNames;
     disabled?: boolean;
     star?: boolean;
}

const Select: FC<ISelectProps> = ({
     label = "",
     options = [],
     errors,
     name = "",
     className = "",
     handleInputChange,
     control,

     multiple = false,
     rules = { required: false, message: "" },
     dataKey = "name",
     defaultInputValue = "",
     onChangeSelect,
     placeholder = "",
     FORM_NAMES,
     star,
     disabled,
     ...props
}) => {
     const onInputChange = useDebounce(handleInputChange, 400);
     const selectRef = useRef<HTMLDivElement>(null);

     const renderInput = (renderInputProps: any) => {
          return (
               <TextField
                    {...renderInputProps}
                    label=""
                    placeholder={placeholder}
                    onChange={onInputChange}
                    fullWidth
               />
          );
     };

     const renderOption = (renderOptionProps: any, option: any) => {
          return (
               <MenuItem {...renderOptionProps} key={option?._id}>
                    {get(option, `${dataKey}`, "")}
               </MenuItem>
          );
     };

     const focus = async () => {
          if (selectRef.current !== null) {
               let inputNode: any =
                    selectRef.current.childNodes[0]?.childNodes[0]
                         ?.childNodes[0];
               if (errors) {
                    if (!!get(errors, `${name}`, undefined)) {
                         // @ts-ignore
                         let key = firstErrorField(FORM_NAMES, errors);

                         if (key === name) {
                              inputNode?.focus();
                         }
                    }
               }
          }
     };

     useEffect(() => {
          focus();
     }, [errors && get<string>(errors, `${name}`, "")]);
     return (
          <SelectFormContainerStyled className={className}>
               <div className="label">
                    <label>{label}</label>
               </div>
               <Controller
                    control={control}
                    name={name}
                    rules={rules}
                    render={({ field: { onChange, value } }) => {
                         return (
                              <SelectFormStyled
                                   ref={selectRef}
                                   multiple={multiple}
                                   options={options}
                                   disabled={disabled}
                                   // defaultValue={defaultValue}
                                   // @ts-ignore
                                   className={
                                        errors &&
                                        !!get<string>(errors, `${name}`, "") &&
                                        "error"
                                   }
                                   getOptionLabel={(option: any) =>
                                        get(option, `${dataKey}`, "")
                                   }
                                   loadingText="Loading..."
                                   noOptionsText="Data not found"
                                   onChange={(event: any, dataItem: any) => {
                                        onChange(dataItem);

                                        if (onChangeSelect) {
                                             onChangeSelect(dataItem);
                                        }
                                   }}
                                   renderOption={renderOption}
                                   renderInput={renderInput}
                                   {...props}
                                   value={value || {}}
                              />
                         );
                    }}
               />
               {errors && !!get(errors, `${name}`, undefined) && (
                    <h6 className="text-error mt-1">{label} majburiy maydon</h6>
               )}
          </SelectFormContainerStyled>
     );
};

export default Select;
