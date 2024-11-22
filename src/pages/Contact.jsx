import rectangle34 from '../img/Rectang 34.jpg'

function Contact() {
  return (
    <>
    <div className="Cantact_header">
        <h1>Need some consultation or want to <br /> collaborarion with us? Let’s connect!</h1>
    </div>
    <div className="cantanct_box">
      <div className="contanct_box__img">
      <img src={rectangle34} alt="" />
      </div>
      <div className="contanct_box__info">
        <h1>Let’s talk about anything you need</h1>
        <div className='ss'>
        <p>Your name/company name</p>
        <p>Phone/E-mail</p>
        </div>
        <p className='sss'>Message</p>
        <button>Submit</button>
      </div>
    </div>
    <div className="contact_button">
      <h1>Or contact us via e-mails or even mobile call or Whatsapp messages</h1>
      <div className="buttons">
        <button>E-mails</button>
        <button>Whatsapp</button>
        <button>Message</button>
        </div>
    </div>
    </>
  )
}

export default Contact