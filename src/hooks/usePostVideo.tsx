import axios from "axios";
import { useState } from "react";

export interface IIdVideo {
     videoName: string;
     id?: string | number;
}

export interface IFileVideo {
     id?: string | number;
     videoFile: File;
}
const usePostVideo = (): [
     IIdVideo | undefined,
     (video: IFileVideo) => void,
     (video: IIdVideo) => void
] => {
     const [videoFile, setVideo] = useState<IIdVideo>();
     const uploadVideo = (video: IFileVideo) => {
          if (video) {
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
                         file: video.videoFile,
                         type: "video",
                    },
               }).then((res) => {
                    setVideo({
                         videoName: res.data.data,
                         id: video.id,
                    });
               });
          }
     };
     return [videoFile, uploadVideo, setVideo];
};

export default usePostVideo;
