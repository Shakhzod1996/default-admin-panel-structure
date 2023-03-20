import styled from "styled-components";
import { Autocomplete } from "@mui/material";

interface ISelectFormStyled {
     isError: boolean;
}

export const SelectFormStyled = styled(Autocomplete)<ISelectFormStyled>`
     pointer-events: ${(props) => (props.disabled ? " none" : "initial")};
     .MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root {
          ${(props) => (props.isError ? "red" : "#ababab")};
          border-radius: 4px;
          background: #fff;
          text-transform: capitalize;
          width: 100%;
          .MuiOutlinedInput-root.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot {
               padding: 0;
               .MuiOutlinedInput-input.MuiInputBase-input {
                    width: 100% !important ;
                    padding: 10px 12px;
                    font-size: 17px;

                    &::placeholder {
                         color: #666 !important;
                    }
               }
          }
          .MuiOutlinedInput-notchedOutline {
               border: 1px solid
                    ${(props) => (props.isError ? "red" : "#ababab")};
               border-radius: 4px;
               padding: 10px 12px;
          }
     }
     &.error {
          .MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root {
               .MuiOutlinedInput-notchedOutline {
                    border-color: red !important;
               }
          }
     }
`;

export const SelectFormContainerStyled = styled.div`
     .label {
          margin-bottom: 4px;
          label {
               font-weight: 600;
               font-size: 12px;
               line-height: 16px;
               color: #32324d;
               margin-bottom: 6px;
               span {
                    color: red;
               }
          }
     }
`;
