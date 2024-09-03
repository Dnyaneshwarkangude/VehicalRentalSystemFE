 
import { useEffect, useState } from "react";

const ImageHandler = ({ type, setImage, preview }) => { 
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file); 
    }
  };

  useEffect(()=>{
    if(!preview){
      setImagePreview(null);
    }
  },[preview])

  return (
    <div className="bg-gray-200 dark:bg-neutral-500 flex flex-col items-center justify-center rounded-md shadow-sm w-[230px] h-[250px] p-4">
      {imagePreview ? (
        <img
          src={imagePreview}
          alt="Preview"
          className="h-32 object-cover mb-3 rounded-md border border-gray-300"
        />
      ) : (
        <div className="w-48 h-32 flex items-center justify-center border border-gray-300 rounded-md mb-3">
          <span className="text-gray-500 dark:text-white">No image selected</span>
        </div>
      )}
      <p className="text-lg mb-2 dark:text-white">{type} picture</p>
      <input
        type="file"
        id="fileInput" 
        accept="image/*" 
        onChange={handleImageChange}
        className="hidden"
      />
      <label
        htmlFor="fileInput"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Add picture
      </label>
    </div>
  );
};

export default ImageHandler;
