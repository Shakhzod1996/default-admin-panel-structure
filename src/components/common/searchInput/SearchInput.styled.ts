import styled from "styled-components";

export const SearchInputStyled = styled.div`
     .search-box {
          width: fit-content;
          height: fit-content;
          position: relative;
     }
     .input-search {
          height: 43px;
          width: 43px;
          border-style: none;
          padding: 10px;
          font-size: 14px;
          letter-spacing: 2px;
          outline: none;
          border-radius: 4px;
          transition: all 0.5s ease-in-out;
          background-color: #fff;
          color: #333;
          padding-right: 30px;
          border: 1px solid #e0e0e7;
     }
     .input-search::placeholder {
          font-size: 14px;
          letter-spacing: 2px;
          font-weight: 100;
     }
     .btn-search {
          width: 43px;
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-style: none;
          /* font-size: 20px; */
          font-weight: bold;
          outline: none;
          cursor: pointer;
          border-radius: 4px;
          position: absolute;
          right: 0px;
          color: #ffffff;
          background-color: transparent;
          pointer-events: painted;
          svg {
               fill: #333;
               font-size: 20px;

          }
     }
     .btn-search:focus ~ .input-search {
          width: 300px;
          padding-left: 1rem;
          border-radius: 0px;
          transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
     }
     .input-search:focus {
          width: 300px;
          transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
          padding-left: 1rem;
     }
`;
