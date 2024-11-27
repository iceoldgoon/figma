import React from 'react'
import rasm1 from '../img/newsImg/e8658a5929d5cfd0e7d8d87bbeb70edd.jpg'
import rasm2 from '../img/newsImg/Rectangle 16.png'
import rasm3 from '../img/newsImg/58ff324090e63c7110b141f764e85766.jpg'
import rasm4 from '../img/newsImg/ac63b3c8367e8cb2078850f965a7e2b9.jpg'
import rasm5 from '../img/newsImg/e4ac904faa2e60700e8753022a6c4784.jpg'


function News() {
  return (
    <>
      <div className="News_header">
        <h1>Article and news about <br /> property and constructions</h1>
      </div>
      <div className="rasm1">
        <div className="rasm_info">
        <h1>Today’s property news</h1>
        <h2>is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has <br /> been the industry'</h2>
        </div>
        <img src={rasm1} alt="" />
      </div>
      <div className="rasm2">
        <img src={rasm2} alt="" />
      </div>
      <div className="gallery_cards">
      <div className="gallery_card">
      <div className="gallery_card__img"><img src={rasm3} alt="" /></div>
      <div className="gallery_card__info">
        <h1>Tips of the week</h1>
        <span>is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has <br /> been the industry'</span>
        <button>Read more</button>
      </div>
      </div>
      <div className="gallery_card">
      <div className="gallery_card__img"><img src={rasm4} alt="" /></div>
      <div className="gallery_card__info">
        <h1>House price is high now</h1>
        <span>is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has <br /> been the industry'</span>
        <button>Read more</button>
      </div>
      </div>
      <div className="gallery_card">
      <div className="gallery_card__img"><img src={rasm5} alt="" /></div>
      <div className="gallery_card__info">
        <h1>Good investment in property</h1>
        <span>is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has <br /> been the industry'</span>
        <button>Read more</button>
      </div>
      </div>
    </div>
    <h1 className='See_more'>See more</h1>

    </>
  )
}

export default News