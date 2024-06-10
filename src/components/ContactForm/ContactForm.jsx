import './ContactForm.css'

function ContactForm() {
    return (
        <div className="contact-form-container" id="contact-me">
            <div className="contact-form-box">
                <div className="contact-form-content">
                    <div className="contact-form-header">
                        <h4>Get In Touch</h4>
                        <h1>Contact Form</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <form className="contact-form">
                        <div className="form-group">
                            <div className="form-input">
                                <label>First Name</label>
                                <input type="text" />
                            </div>
                            <div className="form-input">
                                <label>Last Name</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-input">
                                <label>Email</label>
                                <input type="email" />
                            </div>
                            <div className="form-input">
                                <label>Phone Number</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="form-topic-choice">
                            <label>Choose a topic</label>
                            <select>
                                <option>Select One...</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                                <option value="option4">Option 4</option>
                            </select>
                        </div>
                        <div className="form-message">
                            <label>Message</label>
                            <textarea placeholder="Type your message..."></textarea>
                        </div>
                        <div className="form-terms">
                            <input type="checkbox" id="terms" name="checkbocterms" value="checked" />
                            <label>I accept the terms</label>
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </div> 
        </div>
    )
}

export default ContactForm