import { DefaultImage } from "assets/svgs";
import { Image } from "components";
import React, { Dispatch, SetStateAction } from "react";
import { AddContainer } from "./AddImage.style";
interface IImageProps {
     title?: string;
     description?: string;
     buttonTitle?: string;
     setImage?: (image: File) => void;
     uploadedImg?: string;
}
const AddImage: React.FC<IImageProps> = ({
     title,
     description,
     buttonTitle,
     uploadedImg,
     setImage,
}) => {
     return (
          <AddContainer>
               <h3>{title}</h3>
               <div className="image-main">
                    {uploadedImg ? (
                         <div className="just-image">
                              <Image src={uploadedImg} />
                         </div>
                    ) : (
                         <div className="image-top">
                              <DefaultImage />
                         </div>
                    )}

                    <div className="image-bottom">{description}</div>
               </div>
               <div style={{ display: "flex", justifyContent: "center" }}>
                    <input
                         style={{ display: "none" }}
                         type="file"
                         id="image-input"
                         onChange={(event) =>
                              event?.target?.files?.[0]
                                   ? setImage?.(event?.target?.files?.[0])
                                   : null
                         }
                    />
                    <label className="image-label" htmlFor="image-input">
                         {buttonTitle}
                    </label>
               </div>
          </AddContainer>
     );
};

export default AddImage;
