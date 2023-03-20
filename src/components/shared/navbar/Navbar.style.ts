import styled from "styled-components";

export const NavbarContainer = styled.div`
     .navbar-content {
          position: fixed;
          top: 0;
          right: 0;
          height: 72px;
          background-color: #fff;
          border-bottom: 1px solid #eaeaef;
          justify-content: space-between;
          display: flex;
          align-items: center;
          padding-left: 24px;
          padding-right: 24px;
          z-index: 444;

          .title {
               font-size: 20px;
               font-weight: 500;
               text-transform: capitalize;
          }

          .navbar-right-container {
               display: flex;
               align-items: center;
               gap: 1.5rem;
          }

          .user-icon-container {
               width: 40px;
               height: 40px;
               border-radius: 50%;
               border: 1px solid #dcdce4;
               display: flex;
               align-items: center;
               justify-content: center;
               transition: border 0.3s ease;

               img {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    object-fit: cover;
               }

               &:hover {
                    border: 1px solid #999;
                    cursor: pointer;
               }
          }
     }

     .navbar-right-container {
          li {
               svg {
                    color: #666687;
               }
          }
     }

     .MuiOutlinedInput-notchedOutline {
          border: none;
     }
`;
