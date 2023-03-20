import styled from "styled-components";

export const AddContainer = styled.div`
     width: 100%;
     padding: 1rem;
     border-radius: 4px;
     border: 1px solid #eaeaef;
     background-color: #fff;
     display: flex;
     flex-direction: column;
     gap: 1rem;

     h3 {
          font-size: 14px;
          font-weight: 500;
          color: #32324d;
     }

     .image-main {
          text-align: center;
          padding: 24px 39px;
          border-radius: 4px;
          border: 1px solid #dcdce4;
     }

     .image-bottom {
          margin-top: 18px;
          font-size: 14px;
          font-size: 600;
          color: #8e8ea9;
     }

     .image-label {
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          background-color: #0086ff;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.4s ease;
          &:hover {
               opacity: 0.8;
          }
     }

     .just-image {
          width: 100%;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;

          
     }
`;
