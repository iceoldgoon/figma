import React from 'react'
import rasm from '../img/ourstaryImg/Ellipse 6(2).png'
import rasm1 from '../img/ourstaryImg/Ellipse 6(1).png'
import rasm3 from '../img/ourstaryImg/Ellipse 6.png'
import rasm4 from '../img/ourstaryImg/BG.png'
import rasm5 from '../img/ourstaryImg/8471d5145069b908a2bea035138288eb.jpg'
import rasm6 from '../img/ourstaryImg/4fda28fcc13bfd497a7dde860fd142c0.jpg'
import rasm7 from '../img/ourstaryImg/476eb7a241ae1bb544acfd3f07791da2.jpg'

function OurStory() {
  return (
    <>
    <div className="ourstary_header">
      <h1>Read some story from clients!</h1>
    </div>
    <div className="ourstary_cards">
      <div className="ourstary_card1">
        <img src={rasm} alt="" />
        <p>I really happy to see the result my new <br /> home. It’s really good house and good <br /> price too. And they work so fast becasue <br /> they have the best team. Once again, <br /> thankyou. I really appreciate it.</p>
        <h1>- Mr. James</h1>
      </div>
      <div className="ourstary_card">
      <img src={rasm1} alt="" />
      <p>I really happy to see the result my new <br /> home. It’s really good house and good <br /> price too. And they work so fast becasue <br /> they have the best team. Once again, <br /> thankyou. I really appreciate it.</p>
      <h1>- Mr. Ahmed</h1>
      </div>
      <div className="ourstary_card">
      <img src={rasm3} alt="" />
      <p>I really happy to see the result my new <br /> home. It’s really good house and good <br /> price too. And they work so fast becasue <br /> they have the best team. Once again, <br /> thankyou. I really appreciate it.</p>
      <h1>- Mr. Marco</h1>
      </div>
    </div>
    <div className="ourstary_box">
      <img src={rasm4} alt="" />
      <div className="ourstary_box1">
      <div className="ourstary_box1_img">
      <img src={rasm} alt="" />
      </div>
      <div className="ourstary_box1_info">
      <h1>Mr. James’s says : “I’m so happy!”</h1>
      <p>is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever <br /> since the 1500s, when an unknown printer took a galley of type <br /> and scrambled it to make a type specimen book. It has survived <br /> not only five centuries, but also the leap into electronic <br /> typesetting, remaining essentially unchanged.</p>
      </div>
      </div>
    </div>
    <div className="ourstary_imges">
      <h1>Mr. James’s villa</h1>
      <div className="ourstary_imges_img">
        <img src={rasm5} alt="" />
        <img src={rasm6} alt="" />
        <img src={rasm7} alt="" />
      </div>
    </div>
    </>
  )
}

export default OurStory