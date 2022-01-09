$(document).ready(() => {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modalimg");
    let captionText = document.getElementById("caption");
    let span = document.getElementsByClassName("close-modal")[0];
    
    let img = $('.tfx-exp-img');
    $('.tfx-exp-img').each(function() {
        console.log(this.id);
        let imgContainer = document.getElementById(this.id);
        imgContainer.addEventListener("click", modalize)
    });

    function modalize(event) {
        let img = document.getElementById(event.target.id);


        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;

        span.onclick = function () {
            modal.style.display = "none";
        }
    }
});