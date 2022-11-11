import emailjs from 'emailjs-com';

export const sendMail = ()=> {
    let params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
    const serviceID = 'service_yu4c8dm';
    const templateID = 'template_i78bhvn';
    
    emailjs.send(serviceID, templateID, params,"wgvUJ_4bBayao7kNp")
    .then((res) => {
        alert("Success!" + res.status)
    });
}
