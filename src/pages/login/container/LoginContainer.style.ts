import styled from "styled-components";

export const LoginContainer = styled.div`
     .MuiTypography-root {
          -webkit-user-select: none; /* Safari */
          -ms-user-select: none; /* IE 10 and IE 11 */
          user-select: none;
     }

     width: 100vw;
     height: 100vh;
     display: flex;
     align-items: center;
     justify-content: center;

     .login-content {
          padding: 56px;
          background-color: #fff;
          min-width: 550px;
          border-radius: 4px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

          .first-header {
               width: 100%;
               justify-content: center;
               display: flex;
               align-items: center;
               gap: 1rem;
               margin-bottom: 1.5rem;
          }

          .second-header {
               text-align: center;
               width: 100%;
               margin-bottom: 2rem;
               h2 {
                    font-size: 32px;
                    font-weight: 600;
                    margin: 6px;
               }

               p {
                    font-size: 1rem;
                    font-weight: 400;
                    color: #a5a5ba;
               }
          }
     }

     .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
     }
`;
