document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('images');
    const changeButton = document.getElementById('changeButton');

    const images = ['images/images1.jpg', 'images/images2.jpg', 'images/images3.jpg', 'images/images4.jpg'];

    let currentIndex = 0;

    function changeImage() {
        if (currentIndex === images.length - 1) {
            currentIndex = 0; 
        } else {
            currentIndex++; 
        }

        console.log('currentIndex:', currentIndex);
        console.log('New image src:', images[currentIndex]);

        image.src = images[currentIndex]; // Update the src attribute of the image element
    }

    changeButton.addEventListener('click', changeImage);
});