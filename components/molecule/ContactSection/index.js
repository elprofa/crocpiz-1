import { Container } from 'reactstrap';
import Titre from '../../shared/titre';
import TitleSection from '../TitleSection';
import ContactSectionStc from './ContactSection.stc';

const ContactSection=()=>{
    return(
        <ContactSectionStc>
            <Container>
            <TitleSection 
                titre="Contact us" 
                sousTitre="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto
                doeiusmod tempor condorico consectetur adipiscing elitut aliquip." />
                <div className="row">
                        <div className="col-md-5">
                            <div className="open-info">
                            <Titre couleur="#23292c"
                                    fontTaille="22px" 
                                    fontPoid="600"
                                    marge="0 0 10px" 
                                    lineHauteur="28px"
                                    texte="Openning Hours:"/>
                                <div className="info-line">
                                    <i className="fa fa-clock-o"></i>
                                    <p>
                                        <span>Monday - Thursday:</span> 08AM - 10PM <br/>
                                        <span>Friday - Saturday:</span> 10AM - 11:30PM <br/>
                                        <span>Sunday:</span> 1PM - 10PM
                                    </p>
                                </div>
                                <div className="info-line">
                                    <i className="fa fa-calendar-check-o"></i>
                                    <p>
                                        <span>Booking Time:</span> 24/7 Hours
                                    </p>
                                </div>
                            </div>
                            <div className="contact-info">
                            <Titre couleur="#23292c"
                                    fontTaille="22px" 
                                    fontPoid="600"
                                    marge="0 0 10px" 
                                    lineHauteur="28px"
                                    texte="Contact Info"/>
                                <p><i className="fa fa-map-marker"></i>Avenue Marina 34568 NY (U.S)</p>
								<p><i className="fa fa-phone"></i>+0987 193-34-76</p>
								<p><i className="fa fa-envelope"></i>infosupport@mail.com</p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <form id="contact-form">
                                <label htmlFor="name">Your Name:</label>
                                <input name="name" id="name" type="text" placeholder="Enter your name" />
                                <label htmlFor="mail">Email:</label>
                                <input name="mail" id="mail" type="text" placeholder="Enter your email" />
                                <label htmlFor="comment">Message:</label>
								<textarea name="comment" id="comment" placeholder="Enter message"></textarea>
								<input type="submit" id="submit_contact" value="Submit Now" />
								<div id="msg" className="message"></div>
							</form>
                        </div>
                    </div>
            </Container>
        </ContactSectionStc>
    )
}
export default ContactSection;