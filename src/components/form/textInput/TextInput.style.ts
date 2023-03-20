import styled from "styled-components";

interface ITextInputStyled {
     isError?: boolean;
}

export const TextInputStyled = styled.div<ITextInputStyled>`
     display: flex;
     flex-direction: column;
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
     input {
          padding: 10px 16px;
          border-radius: 4px;
          border: 1px solid ${(props) => (props.isError ? "red" : "#dcdce4")};
          &::placeholder {
               font-weight: 400;
               font-size: 14px;
               line-height: 20px;
               color: #8e8ea9;
          }
     }
`;
