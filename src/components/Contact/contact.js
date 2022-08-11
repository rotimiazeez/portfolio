import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animated'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './contact.scss'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

    useEffect(() => {
        const sett = setInterval(() => {
          setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearInterval(sett);
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'service_m3bnyem',
            'template_ua7le23',
            form.current,
            'XoYJvMM0-ww8pV-VD'
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

      const position = [6.572, 3.396]

  return (
    <>
      <div className='container contact-page'>
          <div className='text-zone'>
            <h1>
              <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}/>
            </h1>
            <p>
            I am interested in full-time and contract opportunities - especially remotely with a diverse team or
            an interesting projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
          </div>
        <div className="info-map">
          Azeez Rotimi,
          <br />
          Nigeria,
          <br />
          Lagos mainland, <br />
          Ogudu, Lagos <br />
          <br />
          <span>harzeyzhrotimi@gmail.com </span>
        </div>
        <div className="map-wrap">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[6.572, 3.396]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
         </div>
        </div>
      <Loader type='pacman' />
    </>
  )
}


export default Contact
