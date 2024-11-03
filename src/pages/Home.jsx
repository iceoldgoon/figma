import React from 'react'
import webaliser from '../img/webaliser-_TPTXZd9mOo-unsplash 1.png'
import rectangle5 from '../img/Rectangle 5.png'
import rectangle6 from '../img/Rectangle 6.png'
import rectangle7 from '../img/Rectangle 7.png'
import rectangle8 from '../img/Rectangle 8.png'
import verified from '../img/Verified.png'
import { FaPencilRuler } from "react-icons/fa";
import { LuSofa } from "react-icons/lu";
import { GiFamilyHouse } from "react-icons/gi";
import { GiHammerSickle } from "react-icons/gi";
import { BsCheck } from "react-icons/bs";
import rectangle17 from '../img/Rectangle 17.png'
import rectangle18 from '../img/Rectangle 18.png'
import rectangle19 from '../img/Rectangle 19.png'
import rectangle20 from '../img/Rectangle 20.png'
import rectangle21 from '../img/Rectangle 21.png'
import rectangle22 from '../img/Rectangle 22.png'
import rectangle23 from '../img/Rectangle 23.png'
import rectangle24 from '../img/Rectangle 24.png'
import rectangle25 from '../img/Rectangle 25.png'
import rectangle26 from '../img/Rectangle 26.png'
import ellipse from '../img/Ellipse 6.png'
import vector from '../img/Vector.png'
function Home() {
  return (
    <div>
        <div className="header">
        
        <div className="info">
           <div className='text_info'>
             <h1>We build your dream house <br /> well and professionally</h1>
            <p>Our team can build a house according to your wishes. <br /> Any design and concept, we will help make it happen</p>
            <button>Contact us</button>
            </div>
            <img src={webaliser} alt="" />
        </div>
        </div>
        <div className="box">
          <div className="box_img">
            <div className="box_imga">
            <img src={rectangle5} alt="" />
            <img src={rectangle8} alt="" />
            </div>
            <div className="box_imga">
            <img src={rectangle6} alt="" />
            <img src={rectangle7} alt="" />
            </div>
            <img className='ver' src={verified} alt="" />
          </div>
          <div className="box_info">
            <h1>Our company</h1>
            <p>Debuilds is a team of architects, interior design, and <br /> contractors who help our clients not only to build <br /> their dream building, but also to feel comfortable <br /> after the building is used.</p>
            <span>We already handled</span>
            <div className="t">
              <h2>50+ Clients</h2>
              <h2>30+ House</h2>
              <h2>20+ Building</h2>
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="box2">
          <div className="box2_text">
          <h1>Our services</h1>
          <p>Our services include building <br /> new buildings and renovating old buildings</p>
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
        </div>
        <div className="box5">
          <div className="box2_text">
            <h1>Our benefits</h1>
            <p>Here our benefits if you collaboration with <br /> our team</p>
          </div>
          <div className="box6">
            <div className="box7">
              <div className="dumaloq">
              <BsCheck className='check'/>
              </div>
              <h1>Flexible time</h1>
              <p>We work wherever you <br /> ready to builds. Work fast <br /> and profesional</p>
            </div>
            <div className="box8">
            <div className="dumaloq">
              <BsCheck className='check'/>
              </div>
              <h1>Customizable design</h1>
              <p>We can design your buildings, but we <br /> open if you want to customize your <br /> design or if you have architect</p>
            </div>
            <div className="box9">
            <div className="dumaloq">
              <BsCheck className='check'/>
              </div>
              <h1>Negotiable price</h1>
              <p>Yes, we’re open to negotiate the price <br /> with you, and we will give the best <br /> price for our lovely clients</p>
            </div>
          </div>
        </div>
        <div className="box10">
        <h1>Our works</h1>
        <p>Here our some of the best the result when <br /> we build some buildings, houses, and also <br /> interior designs</p>
        <div className="box10_imgas">
          <div>
            <img src={rectangle17} alt="" />
            <img src={rectangle18} alt="" />
          </div>
          <img src={rectangle19} alt="" />
          <div>
            <img src={rectangle20} alt="" />
            <img src={rectangle21} alt="" />
          </div>
          <div>
            <div className='he'>
              <img src={rectangle22} alt="" />
              <div className='hehe'>
            <img src={rectangle23} alt="" />
            <img src={rectangle24} alt="" />
            </div>
            </div>
            <div>
            <img src={rectangle25} alt="" />
            </div>
          </div>
        </div>
        <div className="ff">
        <hr />
        <button>See more</button>
        </div>
        <div className="c">
        <div className="card">
        <h2>What our clients say?</h2>
        <p>See what our clients say <br /> about their new home</p>
        <button>See more</button>
        </div>
        <img src={rectangle26} alt="" />
        <div className="card2">
        <p>I really happy to see the result my new <br /> home. It’s really good  house and good <br />  price too. And they work so fast becasue they <br /> have the best  team. Once again,  thankyou. <br /> I really appreciate it.</p>
        <h3>- Mr. Roberto</h3>
        </div>
        <img src={ellipse} alt="" className='ellipse' />
        </div>
        </div>
        <div className="text">
          <h1>Our Partners</h1>
          <h2>J.construct</h2>
          <h2>Arch</h2>
          <h2>Whix.co</h2>
          <h2>Dzikra</h2>
        </div>
        <div className="box11">
          <img src={vector} alt="" />
          <div className="box11_card">
            <p>This is the timelapse video that <br /> shows how our teams work</p>
          </div>
        </div>
        <div className="box12">
          <h1>Want to get our offer <br /> updates and news?</h1>
          <p>Submit your e-mail and we will give you update about <br /> information and discount. Every single week. (not spamming)</p>
          <div className="input">
          <input type="text" placeholder='Enter your e-mail' />
          <button>Submit</button>
          </div>
        </div>
    </div>
  )
}

export default Home