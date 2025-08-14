function modal() {
    let modal = document.getElementById("modal");
    let modalPicture = document.getElementById("modalimg");
    let captionText = document.getElementById("caption");
    let close = document.getElementsByClassName("close-modal")[0];
    let leftButton = document.getElementsByClassName("left-modal")[0];
    let rightButton = document.getElementsByClassName("right-modal")[0];

    let currentImg;
    let imgs = [];
    
    let imgElements = document.getElementsByClassName("tfx-exp-pic");
    for (let element of imgElements) {
        element.addEventListener("click", modalize);
        imgs.push(element.id);
    }

    leftButton.addEventListener("click", left);
    rightButton.addEventListener("click", right);

    function modalize(event) {
        currentImg = event.currentTarget.id;
        let img = document.getElementById(currentImg);
        modal.style.display = "block";
        setPic(img);
        setControls(imgs.indexOf(currentImg));

        close.onclick = function () {
            modal.style.display = "none";
        }
    }

    function setPic(pic) {
        modalPicture.innerHTML = pic.innerHTML;
        captionText.innerHTML = pic.getElementsByTagName("img")[0].alt;
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
        setPic(document.getElementById(currentImg));

        setControls(imgs.indexOf(currentImg));
    }

    function right(event) {
        let index = imgs.indexOf(currentImg) + 1;
        if (isOutOfBounds(index)) return;

        currentImg = imgs[index];
        setPic(document.getElementById(currentImg));

        setControls(imgs.indexOf(currentImg));
    }
}

addEventListener("load", (event) => modal());