import VideoCallIcon from "@mui/icons-material/VideoCall";
import { UploadVideoStyled } from "./UpploadVideo.style";
interface IUploadVideo {
     labelText?: string;
     star?: boolean;
     setVideo?: (video: File)=> void
     video?: string;
     id: string;
     uploadedVideo?: string;
     bottomVideo?: boolean;
}
const UploadVideo = ({
     labelText,
     star,
     setVideo,
     video,
     id,
     uploadedVideo,
     bottomVideo = false,
}: IUploadVideo) => {
     return (
          <UploadVideoStyled>
               <div className="top-section">
                    <label className="labelvideo" htmlFor="outlined-basic">
                         {labelText}
                         {star && <span>*</span>}
                    </label>

                    {/* <div className="input-container"> */}
                    <label htmlFor={id} className="input-container">
                         <div className="icon-upload">
                              <VideoCallIcon />
                         </div>
                         <input
                         accept="video/*"
                              onChange={(event) =>
                                   event?.target?.files?.[0]
                                        ? setVideo?.(event?.target?.files?.[0])
                                        : null
                              }
                              type="file"
                              id={id}
                         />
                         <p>{video}</p>
                    </label>
               </div>
               {bottomVideo && (
                    <div className="section-bottom">
                         {video ? (
                              <video style={{width: "100%", height: "100%", borderRadius: ".5rem"}}
                                   controls
                                   src={
                                        process.env.REACT_APP_BASE_URL +
                                        "public" +
                                        video
                                   }
                              ></video>
                         ) : (
                              ""
                         )}
                    </div>
               )}
          </UploadVideoStyled>
     );
};

export default UploadVideo;
