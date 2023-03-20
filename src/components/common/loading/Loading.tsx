import { Bars } from "react-loader-spinner";
const Loading = () => {
     return (
          <div
               style={{
                    // paddingLeft: "200px",
                    width: "100%",
                    
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "80vh",
               }}
          >
               <Bars
                    height="100"
                    width="100"
                    color="#0086ff"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
               />
          </div>
     );
};

export default Loading;
