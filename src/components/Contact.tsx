import React from 'react';
import './contact.scss';

const Contact: React.FC = () => {
    return (
        <table className="contact-container">
            <tr>
                <td>
                    <p className='section'>lets Connect!</p>
                  
                    <p>I'd love to here from you!</p>
                    <p>Please feel free to say hello and leave me a message.</p>

                </td>
                <td>
                    <div className="contact">
                        <input type="name" name="name" placeholder='Name*' />
                        <input type="email" name="Email" placeholder='Email*' />
                        <textarea name="message" placeholder='Leave a message' />

                    </div>
                </td>
            </tr>
        </table>
    )
}

export default Contact