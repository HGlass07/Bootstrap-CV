
function sendMail() {
    var templateParams = {
        from_name: form.name.value,
        from_email: form.email.value,
        message: form.projectsummary.value,
    };

    emailjs.send('Henry', 'Inquiry', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            $("form")[0].reset();
            document.getElementById("submitsuccess").innerHTML = "New text!";
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
    return false;  // To block from loading a new page
}




