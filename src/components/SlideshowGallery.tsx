import React from 'react'
import './SlideshowGallery.css'

interface SlideshowGalleryProps {
  images: string[]
  title: string
}

const SlideshowGallery: React.FC<SlideshowGalleryProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  if (!images.length) {
    return null
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="slideshow-gallery" aria-label={`Галерия за ${title}`}>
      <div className="slideshow-main">
        <img
          src={images[currentIndex]}
          alt={`${title} - снимка ${currentIndex + 1}`}
          className="slideshow-image"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="slideshow-nav slideshow-prev"
              aria-label="Предишна снимка"
              onClick={goToPrevious}
            >
              &#10094;
            </button>
            <button
              type="button"
              className="slideshow-nav slideshow-next"
              aria-label="Следваща снимка"
              onClick={goToNext}
            >
              &#10095;
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="slideshow-thumbs" role="tablist" aria-label="Миниатюри">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              role="tab"
              aria-selected={currentIndex === index}
              className={`slideshow-thumb ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={image} alt={`${title} - миниатюра ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </section>
  )
}

export default SlideshowGallery
