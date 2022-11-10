export default {
    USER_ID: `service_yu4c8dm`,
    TEMPLATE_ID: `template_i78bhvn`
}

const button = document.querySelector("button");
button.addEventListener("click", (e)=>{
    e.preventDefault();
    emailjs.sendForm(`gmail`, )
})