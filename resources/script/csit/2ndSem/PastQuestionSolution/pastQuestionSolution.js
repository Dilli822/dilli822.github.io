

const slider1 = document.querySelector(".sliderss");
const prevButton1 = document.getElementById("prevBtnCustom1");
const nextButton1 = document.getElementById("nextBtnCustom1");
const slider2 = document.querySelector("#imageContainer"); // Select the second slider
const prevButton2 = document.getElementById("prevBtnCustom2");
const nextButton2 = document.getElementById("nextBtnCustom2");
let currentIndex1 = 1;
let currentIndex2 = 1; // Separate index for the second slider

// Function to retrieve all stored image URLs from local storage
function getAllStoredImageUrls() {
    const imageUrls = [];
    for (let i = 1; i <= localStorage.length; i++) {
        const key = localStorage.key(i - 1);
        if (key.startsWith("imageURL_")) {
            const imageUrl = localStorage.getItem(key);
            imageUrls.push(imageUrl);
        }
    }
    return imageUrls;
}

const imageUrls1 = getAllStoredImageUrls();
imageUrls1.sort();

function updateSlider(slider, prevButton, nextButton, currentIndex, imageUrls) {
    const currentImageUrl = imageUrls[currentIndex - 1];
    slider.innerHTML = "";

    const imageElement = document.createElement("img");
    imageElement.classList.add("image");
    imageElement.src = currentImageUrl;
    slider.appendChild(imageElement);

    prevButton.disabled = currentIndex === 1;
    nextButton.disabled = currentIndex >= imageUrls.length;

    // Highlight the corresponding image in slider2
    highlightStoredImage(currentImageUrl);
}

function highlightStoredImage(currentImageUrl) {
    const storedImages = document.querySelectorAll("#imageContainer img");

    storedImages.forEach((img) => {
        if (img.src === currentImageUrl) {
            img.classList.add("highlight");
        } else {
            img.classList.remove("highlight");
        }
    });
}

prevButton1.addEventListener("click", () => {
    currentIndex1 = currentIndex1 === 1 ? 1 : currentIndex1 - 1;
    updateSlider(slider1, prevButton1, nextButton1, currentIndex1, imageUrls1);
});

nextButton1.addEventListener("click", () => {
    currentIndex1++;
    updateSlider(slider1, prevButton1, nextButton1, currentIndex1, imageUrls1);
});

prevButton2.addEventListener("click", () => {
    currentIndex2 = currentIndex2 === 1 ? 1 : currentIndex2 - 1;
    updateSlider(slider1, prevButton2, nextButton2, currentIndex2, imageUrls1); // Update the first slider
});

nextButton2.addEventListener("click", () => {
    currentIndex2++;
    updateSlider(slider1, prevButton2, nextButton2, currentIndex2, imageUrls1); // Update the first slider
});

// Initial update to load the first image for both sliders
updateSlider(slider1, prevButton1, nextButton1, currentIndex1, imageUrls1);

// // Display all stored image URLs as images for the second slider

const imageUrls2 = getAllStoredImageUrls();
imageUrls2.sort(); // Sort the URLs in increasing order

imageUrls2.forEach((imageUrl, index) => {
const imageElement = document.createElement("img");
imageElement.classList.add("image");
imageElement.src = imageUrl;
slider2.appendChild(imageElement);
});


// Add click event listeners to toggle sub-list visibility
const listItems = document.querySelectorAll('li.has-sub-list');
listItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('expanded');
        const subList = item.querySelector('.sub-list');
        if (subList) {
            subList.classList.toggle('visible');
        }
    });
});
