/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import './contact.css';

import ContactForm from '../contactinfo/ContactForm';

export default function Contact() {
  return (

    <div className="mainContainer">

    <section>
    <a className="subTitle">Get In Touch...</a>
    <h1 className="title">CONTACT ME</h1>

    <div className="contactSectionWrapper">
    <div className="secondContainer">
      <ContactForm />
    </div>
    </div>
    </section>

    </div>
  )
}
