import styled from 'styled-components';
export const UploadVideoStyled = styled.div `

.section-bottom {
     width: 100%;
     max-height: 350px;
     margin-top: 1rem;

     video {
          width: 100%;
          border-radius: .5rem;
     }
}
        .input-container {
          height: 43px;
          border: 1px solid rgba(0, 0, 0, 0.33);
          border-radius: 4px;
          display: flex;
          align-items: center;
          transition: all .1s ease;
          gap: 1rem;
          margin-top: 4px;

          &:hover {
          border: 1px solid #000;
          cursor: pointer;
          }

          input {
          padding: 10px 15px 10px 0px;
          display: none;
     }

          .icon-upload {
               background: #0086ff;
               border-radius: 4px;
               width: 34px;
               height: 34px;
               margin-left: 3px;

               & > svg {
                    height: 23px;
                    color: #fff;
                    /* transform: rotate(45deg); */
               }
               display: flex;
               justify-content: center;
               align-items: center;
          }
     }
     display: flex;
     flex-direction: column;
     label {
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
          color: #32324d;
          margin-bottom: 6px !important;
          span {
               color: red;
          }
     }
     .MuiInputBase-root {
          padding-left: 3px;
     }

     .labelvideo {
          margin-bottom: 6px;
     }
`