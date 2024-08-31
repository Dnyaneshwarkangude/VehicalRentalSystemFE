// import { useState } from "react";

// const ImageHandler = ({ type }) => {
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } 
//   };
//   return (
//     <div className="bg-gray-200 px-5 py-6 flex flex-col items-center rounded-md shadow-sm">
//       <img src={imagePreview} className="w-full h-full border border-1px" />
//       <p>{type} picture</p>
//       <input
//         type="file"
//         id="fileInput"
//         accept="image/*"
//         required
//         onChange={handleImageChange}
//         className="hidden"
//       />
//       <label htmlFor="fileInput" className="bg-blue-500 hover:bg-blue-600 text-white mt-2 px-2 py-0.5 rounded-md hover:cursor-pointer">add picture</label>
//     </div>
//   );
// };

// export default ImageHandler;



import { useState } from "react";

const ImageHandler = ({ type }) => {
  const [image, setImage] = useState(null);
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

  return (
    <div className="bg-gray-200 flex flex-col items-center justify-center rounded-md shadow-sm w-full h-full p-4">
      {imagePreview ? (
        <img
          src={imagePreview}
          alt="Preview"
          className="w-full h-auto object-cover mb-3 rounded-md border border-gray-300"
        />
      ) : (
        <div className="w-full h-32 flex items-center justify-center border border-gray-300 rounded-md mb-3">
          <span className="text-gray-500">No image selected</span>
        </div>
      )}
      <p className="text-lg mb-2">{type} picture</p>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        required
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
