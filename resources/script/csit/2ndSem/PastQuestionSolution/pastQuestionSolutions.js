// const slider1 = document.querySelector(".sliderss");
// const prevButton1 = document.getElementById("prevBtnCustom1");
// const nextButton1 = document.getElementById("nextBtnCustom1");
// let currentIndex1 = 1;
// const totalImages = 100; // Replace with the total number of images you have

// // Function to update the image in the slider
// function updateSliderImage(index) {
//     const imageUrl = `https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/image${index}.jpg`;
//     slider1.innerHTML = ""; // Clear the slider
//     const imgElement = document.createElement("img");
//     imgElement.src = imageUrl;
//     slider1.appendChild(imgElement);
// }

// // Initialize the slider with the first image
// updateSliderImage(currentIndex1);

// // Event listener for the "Next" button
// nextButton1.addEventListener("click", () => {
//     currentIndex1 = (currentIndex1 + 1) % totalImages;
//     updateSliderImage(currentIndex1);
// });

// // Event listener for the "Previous" button
// prevButton1.addEventListener("click", () => {
//     currentIndex1 = (currentIndex1 - 1 + totalImages) % totalImages;
//     updateSliderImage(currentIndex1);
// });



const slider1 = document.querySelector(".sliderss");
const prevButton1 = document.getElementById("prevBtnCustom1");
const nextButton1 = document.getElementById("nextBtnCustom1");
let currentIndex1 = 1;
const totalImages = 100; // Replace with the total number of images you have

// Function to update the image in the slider
function updateSliderImage(index) {
    if (index < 1 || index > totalImages) {
        return; // Do nothing if index is out of bounds
    }

    const imageUrl = `https://github.com/Dilli822/dilli822.github.io/blob/main/resources/img/csit/pastquestionsolutions/STAT-I/2076/STATS-I-2076-${index}.jpg`;

    // Check if the image exists before updating
    const imgElement = new Image();
    imgElement.src = imageUrl;

    imgElement.onload = function () {
        // The image exists, update the slider
        slider1.innerHTML = "";
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        slider1.appendChild(imgElement);
    };

    imgElement.onerror = function () {
        // The image does not exist (404), do not update and stop incrementing
        console.log("Image not found (404)");
    };
}

// Initialize the slider with the first image
updateSliderImage(currentIndex1);

// Event listener for the "Next" button
nextButton1.addEventListener("click", () => {
    currentIndex1++;
    updateSliderImage(currentIndex1);
});

// Event listener for the "Previous" button
prevButton1.addEventListener("click", () => {
    currentIndex1--;
    updateSliderImage(currentIndex1);
});




const baseUrl = 'https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/STAT-I/';
let index = 1;

// Function to check if the image exists at a given index
async function doesImageExist(index) {
    const imageUrl = `${baseUrl}STATS-I-2076-${index}.jpg`;

    try {
        const response = await fetch(imageUrl, { method: 'HEAD' });
        if (response.status === 404) {
            return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

// Function to determine the number of images and store them in localStorage
async function determineAndStoreImages() {
    while (true) {
        const imageExists = await doesImageExist(index);

        if (!imageExists) {
            console.log(`Image not found (404) at index ${index}`);
            break; // Exit the loop when the image does not exist
        }

        const imageUrl = `${baseUrl}image${index}.jpg`;
        localStorage.setItem(`imageURL_${index}`, imageUrl);
        index++;
    }

    console.log(`Stored ${index} image URLs in localStorage.`);
}

// Call the function to determine and store the image URLs
determineAndStoreImages();



// Initialize an empty array to store the URLs
const imageUrls = [];

// Function to retrieve and copy all image URLs from localStorage to the array
function copyImageUrlsToArray() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("imageURL_")) {
            const value = localStorage.getItem(key);
            imageUrls.push(value);
        }
    }
}

// Call the function to copy all image URLs from localStorage to the array
copyImageUrlsToArray();

// Log the image URLs stored in the array
console.log("Image URLs in the array:", imageUrls);
