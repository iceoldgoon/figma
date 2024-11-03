import rectangle29 from '../img/Rectangle 29.jpg'
import rectangle30 from '../img/Rectangle 30.jpg'
import rectangle6 from '../img/Rectangle 6.png'
function About() {
  return (
    <>
    <div className="about_header">
    <h1>About our story - We are <br /> the best team</h1>
    </div>
    <div className="about_box">
      <div className="adout_box_img">
        <img className='rasm' src={rectangle29} alt="" />
        <img className='rasm_2' src={rectangle30} alt="" />
      </div>
      <div className="adout_box_info">
        <h1>Here were the story begins</h1>
        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum <br /> <br /> has  been the industry's standard dummy text ever since the 1500s, when an <br /><br /> unknown printer took a galley of type  and scrambled it to  make a type <br /> <br /> specimen  book. It has survived not only five centuries, but also the leap into <br /> <br /> electronic typesetting, remaining essentially unchanged. <br /> <br /></p><br /><br />
        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum <br /> <br /> has  been the industry's standard dummy text ever since the 1500s, when an <br /><br /> unknown printer took a galley of type  and scrambled it to  make a type <br /> <br /> specimen  book. It has survived not only five centuries, but also the leap into <br /> <br /> electronic typesetting, remaining essentially unchanged. <br /> <br /></p>
      </div>
    </div>
    <div className="about_home">
      <div className="about_home_text">
        <h1>We love to make perfect   home</h1><br /><br />
        <p>is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s, when an unknown printer took a galley of <br /> type and scrambled it to make a type specimen book. It has <br /> survived not only five centuries, but also the leap into electronic <br /> typesetting, remaining essentially unchanged.</p>
      </div>
      <div className="about_home_img"><img className='rectangle_6' src={rectangle6} alt="" /></div>
    </div>
    <h1>salom</h1>
    </>
    
  )
}

export default About