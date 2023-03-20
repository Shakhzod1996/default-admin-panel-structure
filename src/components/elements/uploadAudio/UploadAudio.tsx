import AttachFileIcon from "@mui/icons-material/AttachFile";
import Image from "components/common/image/Image";
import React from "react";
import { UploadInputStyled } from "./UploadAudio.style";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
interface IUploadInput {
     labelText?: string;
     star?: boolean;
     setAudio?: (image: File) => void;
     audio?: string;
     id: string;
}
const UploadAudio: React.FC<IUploadInput> = ({
     labelText,
     star,
     setAudio,
     audio,
     id,
}) => {

     console.log(audio);
     
     return (
          <UploadInputStyled>
               {/* <div className="top-section"> */}
               <label className="label-top" htmlFor="outlined-basic">
                    {labelText}
                    {star && <span>*</span>}
               </label>
               <label htmlFor={id} className="input-container">
                    <div className="icon-upload">
                         <KeyboardVoiceIcon />
                    </div>
                    <input
                    accept="audio/*"
                         onChange={(event) =>
                              (event?.target?.files?.[0] as File)
                                   ? setAudio?.(
                                          event?.target?.files?.[0] as File
                                     )
                                   : null
                         }
                         type="file"
                         id={id}
                    />
                    <p>{audio}</p>
               </label>
               {/* </div> */}

          </UploadInputStyled>
     );
};

export default UploadAudio;
