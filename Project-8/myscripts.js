//<!-- Begin comment for older browses//r

    var imgArray = new Array(
    'Image1Lg.jpg',
    'Image2Lg.jpg',
    'Image3Lg.jpg',
    'Image4Lg.jpg'
    );
    var titleArray = new Array(
    'Biking',
    'Hunting',
    'Ice Climbing',
    'Skiing'
    );
    var imgPath = "Images/Fullsize/";
    function swapImage(imgID) {
    var theImage = document.getElementById('theImage');
    var textDiv = document.getElementById('bottomText');
    var newImg;
    var textTitle;
    newImg = imgArray[imgID];
    theImage.src = imgPath + newImg;
    textTitle=titleArray[imgID];
    textDiv.innerHTML = textTitle;
    }
    function preloadImages() {
    for(var i = 0; i < imgArray.length; i++) {
    var tmpImg = new Image;
    tmpImg.src = imgPath + imgArray[i];
    }
    }
    // End comment for older browsers -->