import styled from "styled-components";
interface IMainBtnStyled {
     typeBtn: string;
     variant?: "text" | "outlined" | "contained";
}
export const MainButtonStyled = styled.div<IMainBtnStyled>`
     button {
          /* background: ${(prop) =>
               prop.typeBtn === "outlined" ? "" : "#0086ff"};
               color: ${(prop) =>
               prop.typeBtn === "outlined" ? "#fff" : "#0086ff"}; */
          border-radius: 4px;
          padding: 10px 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          background-color: ${(props) =>
               props.variant === "contained" ? "#0086FF" : ""};
     }
`;
