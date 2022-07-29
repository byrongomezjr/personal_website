/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import './contact.css';

import ContactForm from '../contactinfo/ContactForm';

export default function Contact() {
  return (

    <div className="mainContactContainer">

    <section className="contactContainer">
    <a className="subTitle">Get In Touch...</a>
    <a className="title">CONTACT ME</a>

      <ContactForm />
    </section>

    </div>
  )
}
