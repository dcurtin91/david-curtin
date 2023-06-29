
import { faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const instagram =
    <a href="https://www.instagram.com/hifun13skateboard/" title="instagram" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagramSquare} className='socials' />
    </a>

const linkedin =
    <a href="https://www.linkedin.com/in/david-curtin-ba104649/" title="linkedin" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className='socials' />
    </a>





export default function Footer() {
    return (
        <section className="section py-12 py-20-desktop">
            <div className="container">
                <div className="columns mb-8 pb-20" style={{ borderBottom: "1px solid #DADFE9" }}>

                </div>
                <div className="social-icons" aria-hidden="true">


                    {instagram}

                    {linkedin}
                </div>
            </div>
        </section>
    )
}
