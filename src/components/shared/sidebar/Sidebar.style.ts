import styled from "styled-components";
interface IValueProps {
     value: boolean;
}
export const SidebarContainer = styled.div<IValueProps>`
     .sidebar-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          margin-bottom: 0.1rem;
          transition: all 0.3s ease;
          height: ${(props) => (props.value ? "auto" : "50px")};


          svg {
               color: #666687;
          transition: all 0.3s ease;

          }

          color: #666687;
          font-size: 14px;
          font-weight: 400;
          &:hover {
               cursor: pointer !important;
               background-color: rgba(0, 134, 255, 0.1);
               border-radius: 4px;
               color: #0086ff;
          }
          &:hover svg {
               color: #0086ff;
               transition: all 0.3s ease;
          }
     }

     .sidebar-item-parent {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          color: #666687;
          font-size: 14px;
          font-weight: 400;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
          height: ${(props) => (props.value ? "auto" : "50px")};
          svg {
               color: #666687;
          transition: all 0.3s ease;

          }

          &:hover {
               cursor: pointer !important;
               background-color: rgba(0, 134, 255, 0.1);
               border-radius: 4px;
               color: #0086ff;
          }
          &:hover svg {
               color: #0086ff;
               transition: all 0.3s ease;
          }
     }

     .sideBar-active {
          cursor: pointer !important;
          background-color: rgba(0, 134, 255, 0.1);
          border-radius: 4px;
          color: #0086ff;

          svg {
               color: #0086ff;
          }
     }
     position: relative;
     overflow: hidden;
     .MuiListItemIcon-root {
          min-width: ${(props) => (props.value ? "30px" : "70px")};
     }
     .MuiListItem-button {
          padding-left: 10px !important;
          
          a {
               color: #666687;
          }
          span {
               font-size: 14px;
               font-weight: 400;
               /* color: #666687; */
          }
          svg {
               color: #666687;
          }
          white-space: nowrap;
     }
     .sidebar-content {
          background-color: #ffffff;
          width: 100%;
          left: 0;
          top: 0;
          height: 100vh;
          position: fixed;
          bottom: 0;
          border-right: 1px solid #eaeaef;
     }

     .sidebar-top {
          height: 72px;
          border-bottom: 1px solid #eaeaef;
          display: flex;
          align-items: center;
          padding-right: 12px;
          padding-left: 12px;
          gap: ${(props) => (props.value ? "12px" : "0")};
     }

     .sidebar-top-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: ${(props) => (props.value ? "auto" : "100%")};
     }

     .sidebar-main {
          padding-right: 12px;
          padding-left: 12px;
          padding-top: 24px;
          overflow-x: hidden;
          overflow-y: auto !important;
          height: calc(100vh - 72px);
          padding-bottom: 70px;

          /* width */
          ::-webkit-scrollbar {
               width: 4px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
               background: #f1f1f1;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
               background: #888;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
               background: #555;
          }
     }

     .asosiy {
          margin-bottom: 10px;
          h3 {
               font-size: 11px;
               font-weight: 600;
               text-transform: uppercase;
               color: #666687;
               margin-bottom: 8px;
          }
     }

     .sidebar-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60px;
          border-top: 1px solid #eaeaef;
          background-color: #fff;
          display: flex;
          justify-content: right;
          align-items: right;
          padding: 1rem;
     }

     .sidebar-bottom {
          li {
               svg {
                    transition: all 0.4s ease;

                    transform: ${(props) =>
                         props.value ? "rotateZ(0)" : "rotateZ(180deg)"};
               }
          }
     }
`;
