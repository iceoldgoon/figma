import React from 'react'
import { FaPencilRuler } from "react-icons/fa";
import { LuSofa } from "react-icons/lu";
import { GiFamilyHouse } from "react-icons/gi";
import { GiHammerSickle } from "react-icons/gi";
import rasm from '../img/servicesImg/ec0ea9d7bc8580962501020ff19c08ce.jpg'
import rasm1 from '../img/servicesImg/beb9bda1a41ae123d72272ebe1bc7061.jpg'

function Services() {
  return (
    <>
    <div className="services_header">
      <h1>Our team services</h1>
    </div>
    <div className="boxs">
            <div className="box3">
            <FaPencilRuler className='pen' />
            <h1>Design building/house</h1>
            <p>We have an architect for <br /> design new buildings</p>            
            </div>
            <div className="box4">
            <LuSofa  className='sofa'/>
            <h1>Design building/house</h1>
            <p>We have an architect for <br /> design new buildings</p>            
            </div>
            <div className="box4">
            <GiFamilyHouse className='house'/>
            <h1>Design building/house</h1>
            <p>We have an architect for <br /> design new buildings</p>            
            </div>
            <div className="box4">
            <GiHammerSickle className='hammer'/>
            <h1>Design building/house</h1>
            <p>We have an architect for <br /> design new buildings</p>            
            </div>
    </div>
    <div className="services_box">
      <div className="services_box_img1">
      <img src={rasm} alt="" />
      </div>
      <div className="services_box_img2">
      <img src={rasm1} alt="" />
      <h1>Design building / house</h1>
      <p>is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever <br /> since the 1500s, when an unknown printer took a galley of type <br /> and scrambled it to make a type specimen book. It has survived <br /> not only five centuries, but also the leap into electronic <br /> typesetting, remaining essentially unchanged.</p>
      </div>
    </div>
    <div className="services_box">
      <div className="services_box_img1">
      <img src={rasm1} alt="" />
      <p>is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever <br /> since the 1500s, when an unknown printer took a galley of type <br /> and scrambled it to make a type specimen book. It has survived <br /> not only five centuries, but also the leap into electronic <br /> typesetting, remaining essentially unchanged.</p>
      </div>
      <div className="services_box_img2">
      <img src={rasm} alt="" />
      </div>
    </div>
    </>
  )
}


export default Services