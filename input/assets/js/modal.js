$(document).ready(() => {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modalimg");
    let captionText = document.getElementById("caption");
    let close = document.getElementsByClassName("close-modal")[0];
    let leftButton = document.getElementsByClassName("left-modal")[0];
    let rightButton = document.getElementsByClassName("right-modal")[0];

    let currentImg;
    let imgs = [];
    
    $('.tfx-exp-img').each(function() {
        let imgContainer = document.getElementById(this.id);
        imgContainer.addEventListener("click", modalize)
        imgs.push(this.id);
    });

    leftButton.addEventListener("click", left);
    rightButton.addEventListener("click", right);

    function modalize(event) {
        currentImg = event.target.id;
        let img = document.getElementById(currentImg);

        modal.style.display = "block";
        setImg(img);
        setControls(imgs.indexOf(currentImg));

        close.onclick = function () {
            modal.style.display = "none";
        }
    }

    function setImg(img) {
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    }

    function setControls(imgIndex) {
        rightButton.hidden = imgIndex >= (imgs.length - 1);
        leftButton.hidden = imgIndex <= 0;
    }

    function isOutOfBounds(ind) {
        return (ind < 0) || (ind >= imgs.length);
    }

    function left(event) {
        let index = imgs.indexOf(currentImg) - 1;
        if (isOutOfBounds(index)) return;
        
        currentImg = imgs[index];
        setImg(document.getElementById(currentImg));

        setControls(imgs.indexOf(currentImg));
    }

    function right(event) {
        let index = imgs.indexOf(currentImg) + 1;
        if (isOutOfBounds(index)) return;

        currentImg = imgs[index];
        setImg(document.getElementById(currentImg));

        setControls(imgs.indexOf(currentImg));
    }
});