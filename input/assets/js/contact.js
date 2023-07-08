$(document).ready(() => {
    $('.toast').toast({ autohide: true, delay: 3000 });
    let form = document.querySelector("#contact-me");
    form.addEventListener("submit", handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        let submit = document.querySelector("#submitButton")
        submit.setAttribute('disabled', 'disabled');
        let request = new XMLHttpRequest();
        let messageData = {
            email: document.getElementById("emailInput").value,
            name: document.getElementById("nameInput").value,
            message: document.getElementById("messageInput").value
        };

        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    $('#successToast').toast('show');
                    let submit = document.querySelector("#submitButton")
                    submit.setAttribute('disabled', 'disabled');
                }
                else {
                    $('#errorToast').toast('show');
                    submit.removeAttribute('disabled');
                }
            }
        }
        request.open("POST", "https://api.tfx.seawavescollective.net/api/contact", true);
        request.setRequestHeader("Content-type", "application/json");
        let payload = JSON.stringify(messageData)
        request.send(payload);
        return false;
    }
})
