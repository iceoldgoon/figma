import React from 'react'
import rasm1 from '../img/galleryImg/8471d5145069b908a2bea035138288eb.jpg'
import rasm2 from '../img/galleryImg/e8658a5929d5cfd0e7d8d87bbeb70edd.jpg'
import rasm3 from '../img/galleryImg/efd5b15fbd506fb1c28ad11c3fe0f0d5.jpg'
import rasm4 from '../img/galleryImg/53c57685981b815ab7e5d1d601185cff.jpg'
import rasm5 from '../img/galleryImg/6b056234be63968d76736e59879a5c09.jpg'
import rasm6 from '../img/galleryImg/272f21b0d35177cf697dcf148a2d5fe0.jpg'

function Gallery() {
  return (
    <>
    <div className="gallery_header">
      <h1>Here some our best works</h1>
    </div>
    <div className="gallery_cards">
      <div className="gallery_card">
      <div className="gallery_card__img"><img src={rasm1} alt="" /></div>
      <div className="gallery_card__info">
        <h1>Interior design</h1>
        <span>3 Months work time</span>
        <button>See process</button>
      </div>
      </div>
      <div className="gallery_card">
      <div className="gallery_card__img"><img src={rasm2} alt="" /></div>
      <div className="gallery_card__info">
        <h1>Build modern house</h1>
        <span>3 Months work time</span>
        <button>See process</button>
      </div>
      </div>
      <div className="gallery_card">
      <div className="gallery_card__img"><img src={rasm3} alt="" /></div>
      <div className="gallery_card__info">
        <h1>Build villa two floors</h1>
        <span>3 Months work time</span>
        <button>See process</button>
      </div>
      </div>
    </div>
    <div className="gallery_cards">
    <div className="gallery_card">
      <div className="gallery_card__img"><img src={rasm4} alt="" /></div>
      <div className="gallery_card__info">
        <h1>Modern interior design</h1>
        <span>3 Months work time</span>
        <button>See process</button>
      </div>
      </div>
      <div className="gallery_card">
      <div className="gallery_card__img"><img src={rasm5} alt="" /></div>
      <div className="gallery_card__info">
        <h1>Renovation co working room</h1>
        <span>3 Months work time</span>
        <button>See process</button>
      </div>
      </div>
      <div className="gallery_card">
      <div className="gallery_card__img"><img src={rasm6} alt="" /></div>
      <div className="gallery_card__info">
        <h1>Real estate house</h1>
        <span>3 Months work time</span>
        <button>See process</button>
      </div>
      </div>
    </div>
    <h1 className='See_more'>See more</h1>
    </>
  )
}

export default Gallery