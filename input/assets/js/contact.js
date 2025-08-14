function contact() {
    const toast_transition = 2500;
    let form = document.querySelector("#contact-me");
    form.addEventListener("submit", handleSubmit);
    let success = document.querySelector("#successToast");
    let error = document.querySelector("#errorToast");
   
    success.classList.add("hide");
    error.classList.add("hide");

    function hide(e) {
        e.classList.remove("tfx-fade");
        e.setAttribute('hidden', '');
    }

    function startFade(e) {
        e.classList.add("tfx-fade");
        e.classList.remove("tfx-show");
        setTimeout(() => hide(e), toast_transition);
    }

    function showToast(e) {
        e.removeAttribute('hidden');
        e.classList.add("tfx-show");
        setTimeout(() => startFade(e), toast_transition);
    }

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
                    let submit = document.querySelector("#submitButton");
                    submit.setAttribute('disabled', 'disabled');
                    showToast(success);
                }
                else {
                    submit.removeAttribute('disabled');
                    showToast(error);
                }
            }
        }
        //"https://api.tfx.seawavescollective.net/api/contact"
        request.open("POST", "fake", true);
        request.setRequestHeader("Content-type", "application/json");
        let payload = JSON.stringify(messageData)
        request.send(payload);
        return false;
    }
}

addEventListener("load", (event) => contact());