import { uploadFile } from "react-s3";

const options = {
  accessKeyId: "AKIAVKP6QBZ2N2V7DKNT",
  secretAccessKey: "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",
  region: "ap-southeast-1",
  bucketName: "trax-media",
};

const uploadImage = (uri) => {
  return new Promise((resolve, reject) => {
    uploadFile(uri, options)
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};
export { uploadImage };
