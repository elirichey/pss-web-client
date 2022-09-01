import Image from "next/image";

export default function Loader(props) {
  const { uploadProgress } = props;
  const isUploading = uploadProgress > 0;

  return (
    <div className="loader-container column">
      <p className="loader-txt">
        {isUploading ? <>Upload: {uploadProgress}%</> : "Loading"}
      </p>

      <div className="loader-gif">
        <Image src="/gif/loader-gray-blue.gif" height={50} width={50} />
      </div>
    </div>
  );
}
