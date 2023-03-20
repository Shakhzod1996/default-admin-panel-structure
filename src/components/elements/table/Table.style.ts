import styled from "styled-components";

export const TableContainerMain = styled.div`
     .MuiPaginationItem-root {
          background-color: #fff;
     }
     .MuiDataGrid-root .MuiPaginationItem-root.Mui-selected {
          color: #0086ff;
          border: 1px solid #0086ff;
          background-color: #fff;
     }

     .table-header-right {
          display: flex;
          align-items: center;
          gap: 1rem;
          label {
               margin-bottom: 0;
          }
     }

     border-radius: 0.5rem;
     height: auto;
     width: 100%;

     .grid-container {
          height: 65vh;
          background-color: #fff;
          border-radius: 4px;
     }

     .MuiDataGrid-root {
          border: none;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          &.secondary-design {
               .MuiDataGrid-row {
                    &:nth-of-type(even) {
                         background-color: red;
                    }
                    &:nth-of-type(odd) {
                         background-color: blue;
                    }
               }
          }
     }
     .no-data-found {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 1.5rem;
          h2 {
               font-size: 1rem;
               font-weight: 600;
               color: #666687;
          }
     }

     .user-info {
          color: #666687;
          font-size: 14px;
          font-weight: 400;
          margin-bottom: 12px;
     }

     .pagination-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          /* background-color: red; */
          margin-top: 50px;
     }
     .table-header {
          text-transform: uppercase;
          .MuiDataGrid-columnHeaderTitle {
               font-weight: 700 !important;
               color: #666687;
          }
     }
     .row-hover {
          &:hover {
               cursor: pointer;
          }
     }
`;

export const TableHeadContainer = styled.div`
     margin-bottom: 12px;
     display: flex;
     justify-content: right;
     flex-direction: column;
     .header-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;

          /* padding-bottom: 10px; */

          .actions {
               display: flex;
               align-items: center;
               gap: 1rem;
               .Mui-disabled > svg {
                    cursor: pointer !important;
               }
               button {
                    height: 43px;
               }

               svg {
                    transition: all 0.3s ease;
                    font-size: 20px;
               }
          }
     }

     .searchable {
          padding-top: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 10px;

          input {
               border: none;
               padding: 10px;
               width: 100%;
               font-size: 1rem;
          }
     }
`;
