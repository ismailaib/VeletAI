import { useState , useEffect} from 'react';
import { motion } from 'framer-motion';
import '../styles/backgroundremover.css';

const BackgroundRemover = () => {
  const [image, setImage] = useState(null);
  const [bgRemove, setBgRemove] = useState(null);
  const [error, setError] = useState(null);

  const handleChangeBg = async () => {
    if (!image) {
      setError("Please select an image.");
      return;
    }

    const apiKey = "77i7YWurRk3wxLQW2MfrMkd4";
    const url = "https://api.remove.bg/v1.0/removebg";
    const formData = new FormData();
    formData.append("image_file", image);
    formData.append("size", "auto");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "X-Api-key": apiKey
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Failed to remove background: ${response.statusText}`);
      }

      const blob = await response.blob();
      setBgRemove(URL.createObjectURL(blob));
      setError(null);
    } catch (error) {
      setError("An error occurred while removing background.");
      console.error("Error:", error);
    }
  };

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href attribute to the URL of the generated image
    link.href = bgRemove;
    // Set the download attribute to specify the filename
    link.download = 'background_removed_image.png';
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger the click event on the link
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
  };
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="flex justify-center my-10">
      <motion.div className="imageremover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-lg text-semibold">BackgroundMagic</h2>
        <motion.div className="imageholder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <label className="custum-file-upload" htmlFor="file" style={{ backgroundImage: image && `url(${URL.createObjectURL(image)})` }}>
            <input
              type="file"
              id="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" style={{ fill: image && `white` }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" >
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                  </g>
                </svg>
              </svg>
            </div>
            <div className="text" style={{ color: image && 'white' }}>
              Click to upload image
            </div>
          </label>
        </motion.div>
        <div className="form-group">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleChangeBg} className="btn btn-primary">
            REMOVE BACKGROUND
          </motion.button>
          
        </div>
        {error && <div className="error-message">{error}</div>}
        {image && 
        <motion.div className='generated_image' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            {/* <img src={URL.createObjectURL(image)} alt="Uploaded" className="uploaded-image" /> */}
        </motion.div>
        }
        {/* Change displayed image to the one with background removed */}
        {bgRemove && <motion.div className="mt-1 generated_image" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}><img src={bgRemove} alt="Background Removed" /></motion.div>}
        {bgRemove && (
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleDownload} className="btn btn-secondary">
              DOWNLOAD
            </motion.button>
          )}
      </motion.div>
      
    </div>
  );
};

export default BackgroundRemover;
  