import './ContactForm.css'

function ContactForm() {
    return (
        <div className="contact-form">
            <h1>Contact Form</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm