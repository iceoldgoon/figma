import React from 'react'
import rasm from '../img/processdetailsImg/6f0b0bb9bf0c9ed4db820e1a645b1079.jpg'
import rasm2 from '../img/processdetailsImg/84c53bf82a6bb7a2ca4b5bf84422d268.jpg'
import rasm3 from '../img/processdetailsImg/Vector.png'
import rasm4 from '../img/processdetailsImg/Rectangle 16.png'
import rasm5 from '../img/processdetailsImg/53c57685981b815ab7e5d1d601185cff.jpg'
import rasm6 from '../img/processdetailsImg/e1ea5e54badd8b18deab0b54cec82075.jpg'


function ProcessDetails() {
  return (
    <>
      <div className="processdetails_header">
        <h1>Process details : Build villa two floors</h1>
      </div>
      <div className="processdetails_box">
        <div className="processdetails_box__text">
          <h1>Villa De Borusdz</h1>
          <p>is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s, when an unknown printer took a galley of <br /> type and scrambled it to make a type specimen book. It has <br /> survived not only five centuries, but also the leap into electronic <br /> typesetting, remaining essentially unchanged.</p>
          <div className="processdetails_box__text___span">
          <span>Budget : $90.000</span>
          <span>Time : 3 months</span>
          </div>
        </div>
        <div className="processdetails_box__img"><img src={rasm} alt="" /></div>
      </div>
      <div className="processdetails_box2">
        <div className="rasm3"><img src={rasm2} alt="" /></div>
        <div className="rasm4"><img src={rasm3} alt="" /></div>
        <div className="processdetails_box2_text">
          <h1>This is the timelapse video that <br /> shows how the villa builds</h1>
        </div>
      </div>
      <div className="processdetails_box3">
      <img src={rasm4} alt="" />
      </div>
      <div className="processdetails_box4">
        <h1>Gallery</h1>
        <div className="processdetails_box4_img">
          <img src={rasm} alt="" />
          <img src={rasm5} alt="" />
          <img src={rasm6} alt="" />
        </div>
      </div>
    </>
  )
}

export default ProcessDetails