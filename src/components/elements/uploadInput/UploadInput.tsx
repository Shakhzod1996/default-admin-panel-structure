import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Image } from "components";
import React, { useState } from "react";
import { UploadInputStyled } from "./UploadInput.style";

interface IUploadInput {
     labelText?: string;
     star?: boolean;
     setImage?: (image: File) => void;
     image?: string;
     id: string;
     bottomImage?: boolean;
     uploadedImage?: string;
}
const UploadInput: React.FC<IUploadInput> = ({
     labelText,
     star,
     setImage,
     image,
     id,
     bottomImage = false,
     uploadedImage,
}) => {
     const [imageName, setImageName] = useState<any>("");
     return (
          <UploadInputStyled>
               {/* <div className="top-section"> */}
               <label className="label-top" htmlFor="outlined-basic">
                    {labelText}
                    {star && <span>*</span>}
               </label>
               <label htmlFor={id} className="input-container">
                    <div className="icon-upload">
                         <AttachFileIcon />
                    </div>
                    <input
                         accept="image/png, image/gif, image/jpeg, image/webp"
                         onChange={(event) => {
                              setImageName(event?.target?.files?.[0].name);
                              console.log(imageName);

                              return (event?.target?.files?.[0] as File)
                                   ? setImage?.(
                                          event?.target?.files?.[0] as File
                                     )
                                   : null;
                         }}
                         type="file"
                         id={id}
                    />
                    <p>{imageName}</p>
               </label>
               {/* </div> */}

               {uploadedImage && (
                    <div className="bottom-image">
                         {bottomImage ? <Image src={uploadedImage} /> : ""}
                    </div>
               )}
          </UploadInputStyled>
     );
};

export default UploadInput;
