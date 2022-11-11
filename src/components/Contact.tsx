import React from 'react';
import './contact.scss';
import { sendMail } from '../assets/emailkey';

const Contact: React.FC = () => {
    return (
        <table className="contact-container">
            <tr>
                <th colSpan={2}>

                    <p className='section'>lets Connect!</p>
                </th>
            </tr>
            <tr>
                <td>
                  
                    <p>I'd love to here from you!</p>
                    <p>Please feel free to say hello and leave me a message.</p>

                </td>
                <td>
                    <div className="contact">
                        <input type="name" id="fullName" name="full name" placeholder='Name*' />
                        <input type="email" id="email_id" name="email id" placeholder='Email*' />
                        <textarea id="message" placeholder='Leave a message' required/>
                        <button onClick={sendMail}>Submit</button>
                    </div>
                </td>

            </tr>
        </table>
    )
}

export default Contact