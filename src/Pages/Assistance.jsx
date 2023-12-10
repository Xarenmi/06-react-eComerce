import React, { useState } from 'react' 
import './assistance.sass' 

const Assistance = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    }) 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value }) 
    } 

    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log('Submitted data:', formData)

        setFormData({
            name: '',
            email: '',
            message: '',
          }) 
    } 

    return (
        <main>
            <h1>Contact us:</h1>


            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        aria-label="Name"
                    />
                </label>

                <label htmlFor="email">
                    Email
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        aria-label="Email"
                    />
                </label>

                <label htmlFor="message">
                    Message
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        required
                        aria-label="Message"
                    />
                </label>

                <button type="submit" aria-label="Submit">
                    Submit
                </button>
            </form>
        </main>
    ) 
} 

export default Assistance
