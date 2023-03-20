import axios from "axios";
import { useState } from "react";

export interface IIdImage {
     imageName: string;
     id?: string | number;
}
export interface IFileImage {
     id?: string | number;
     imageFile: File;
}
const usePostImage = (): [
     IIdImage | undefined,
     (image: IFileImage) => void,
     (image: IIdImage) => void,
] => {
     const [imageFile, setImage] = useState<IIdImage>();
     const uploadImage = (image: IFileImage) => {
          if (image) {
               axios({
                    url: `${process.env.REACT_APP_BASE_URL}upload`,
                    method: "POST",
                    headers: {
                         "Content-Type": "multipart/form-data",
                         Authorization: `Bearer ${localStorage.getItem(
                              "token"
                         )}`,
                    },
                    data: {
                         file: image.imageFile,
                         type: "img",
                    },
               }).then((res) => {
                    setImage({
                         imageName: res.data.data,
                         id: image.id,
                    });
               });
          }
     };
     return [imageFile, uploadImage, setImage];
};

export default usePostImage;
