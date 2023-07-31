import React, { useState } from 'react'
import "./GalleryMap.css";


const GalleryMap = ({photos}) => {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
    const openModal = (index) => {
        setSelectedPhotoIndex(index);
      };
    
      const closeModal = () => {
        setSelectedPhotoIndex(null);
      };
  return (
    <div>
      <div>
        <div className="gallery-container">
            {photos.map((val, index) => {
                return (

                    <div className="photo-item" key={index}  onClick={() => openModal(index)}>
                        <img src={val.src} alt="gallery"/>
                        <p
                        className='photo-description'>
                            {val.description}
                        </p>
                    </div>
                );
            })}
        </div>
        {selectedPhotoIndex !== null && (
        <div className="modal">
          <span className="close-button" onClick={closeModal}>&times;</span>
          <img src={photos[selectedPhotoIndex].src} alt="full-gallery" className="modal-image" />
        </div>
      )}
      </div>
    </div>
  )
}

export default GalleryMap
