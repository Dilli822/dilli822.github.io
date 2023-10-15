



// Define the URLs in an object for easy access
const urls = {
    DS_MATH_2078_BS_TU: "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/DiscreteMath/2078/ds-2078-",
    DS_MATH_2076_BS_TU: "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/DiscreteMath/2076/ds-2076-",
    DS_MATH_2075_BS_TU: "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/DiscreteMath/2075/ds-2075-",
    OOP_2078_BS_TU: "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/OOP/2078/oop-2078-",
    OOP_2076_BS_TU: "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/OOP/2076/oop-2076-",
    OOP_2075_BS_TU: "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/OOP/2075/oop-2075-",
    Mathematics_II_2078_BS_TU: "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/Maths-II/2078/Maths-II-2078-",
    Mathematics_II_2076_BS_TU: "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/Maths-II/2078/Maths-II-2076-",
    Mathematics_II_2075_BS_TU: "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/Maths-II/2078/Maths-II-2075-",
    MicroProcessor_2078_BS_TU: "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/Microprocessor/2078/microprocessor-2078-",
    MicroProcessor_2076_BS_TU: "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/Microprocessor/2076/microprocessor-2076-",
    MicroProcessor_2075_BS_TU: "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/Microprocessor/2075/microprocessor-2075-",
  };
  
  
  const default_baseImageUrl = 'https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/STAT-I/2076/STATS-I-2076-';
  
  let baseImageUrl = default_baseImageUrl;
  
  // Add click event listeners to the <li> elements
  // ... (previous code)
  
  // Function to fetch and store images in local storage
  async function fetchAndStoreImages() {
    const existingImageArrayJson = localStorage.getItem('imageArray');
    if (existingImageArrayJson) {
      console.log("Images are already in localStorage");
      return;
    }
  
    let currentIndex = 0;
    const imageArray = [];
  
    while (true) {
      const imageUrl = `${baseImageUrl}${currentIndex + 1}.jpg`;
  
      console.log("Fetching image:", imageUrl);
  
      try {
        const response = await fetch(imageUrl);
  
        console.log("Response status:", response.status);
  
        if (response.status === 404) {
          console.log("404 Error - End of images");
          break;
        }
  
        if (response.ok) {
          const imageURL = imageUrl;
          imageArray.push(imageURL);
        } else {
          console.error(`Error fetching image at index ${currentIndex}: ${response.statusText}`);
          break;
        }
  
        currentIndex++;
      } catch (error) {
        console.error(`An error occurred while fetching the image at index ${currentIndex}: ${error}`);
        break;
      }
    }
  
    if (imageArray.length > 0) {
      const imageArrayJson = JSON.stringify(imageArray);
      localStorage.setItem('imageArray', imageArrayJson);
      console.log(imageArrayJson);
    }
  }
  
  // ... (rest of the code)
  
  // Start fetching and storing images
  fetchAndStoreImages();
  
  
  let imageArray = [];
  
  
  // Load the imageArray from local storage
  function loadImagesFromLocalStorage() {
    const imageArrayJson = localStorage.getItem('imageArray');
    if (imageArrayJson) {
      const parsedArray = JSON.parse(imageArrayJson);
      // Use a Set to remove duplicates, and then convert it back to an array
      return [...new Set(parsedArray)];
    }
    return []; // Return an empty array if data is not in local storage.
  }
  
  console.log(imageArray);
  // Get the container element where you want to add the images
  const sliderHighlightImage = document.getElementById('sliderHighlightImage');
  
  // Loop through the imageArray and create img tags
  function displayImages(imageArray) {
    const sliderHighlightImage = document.getElementById('sliderHighlightImage');
  
    if (imageArray.length === 0) {
      // Handle the case when imageArray is empty (no images to display)
      const noImagesMessage = document.createElement('p');
      noImagesMessage.textContent = 'No Solutions Available.';
      sliderHighlightImage.appendChild(noImagesMessage);
    } else {
      imageArray.forEach((imageUrl, index) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Image ${index + 1}`; // Provide an alt attribute for accessibility
        sliderHighlightImage.appendChild(img);
      });
    }
  }
  
  // Call this function to display images from the imageArray when needed.
  displayImages(imageArray);
  
        // Hide the loader once the images are loaded
        hideLoader();
  // Function to load and display images in the slider
  function loadImagesInSlider(index) {
    if (index < 0 || index >= imageArray.length) {
      console.error('Invalid image index');
      
      return;
    }
  
    const sliderImage = document.getElementById('sliderImage');
    sliderImage.src = imageArray[index];
  }
  
  
  
  
  
  // Function to compare and add a red border
  // Add event listeners for the "Previous" and "Next" buttons
  const prevButton = document.getElementById('prevBtnCustom2');
  const nextButton = document.getElementById('nextBtnCustom2');
  let currentIndex = 0;
  
  prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    loadImagesInSlider(currentIndex);
    compareAndHighlightImage(); 
  });
  
  nextButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, imageArray.length - 1);
    loadImagesInSlider(currentIndex);
    compareAndHighlightImage(); 
  })
  
  // Initialize the slider with the first image
  loadImagesInSlider(currentIndex);
  
  // Function to compare and add a red border to the matching image
  function compareAndHighlightImage() {
    const sliderImage = document.getElementById('sliderImage');
    const images = document.querySelectorAll('#sliderHighlightImage img');
  
    images.forEach((img) => {
      if (img.src === sliderImage.src) {
        // If the src attributes match, add a red border to the image
        img.style.border = '2px solid red';
        sliderImage.style.border = "2px solid red";
      } else {
        // If the src attributes don't match, remove the red border (if it was previously set)
        img.style.border = 'none';
      }
    });
  }
  // Call the compareAndHighlightImage function initially and whenever you change the image
  compareAndHighlightImage();
  
  // // Add click event listeners to toggle sub-list visibility
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
  
  const liElements = document.querySelectorAll('#main-list li');
  
  
  document.getElementById("slider").style.display = "none";
  document.getElementById("prevBtnCustom2").style.visibility = "hidden";
  document.getElementById("nextBtnCustom2").style.visibility = "hidden";
  document.getElementById("sliderImageBtn").style.visibility   = "hidden";
  
  liElements.forEach((li) => {
    li.addEventListener('click', async (event) => {
      const liValue = event.target.textContent.trim();
      const variableName = liValue.split(' ').join('_');
  
      if (urls[variableName]) {
        alert(`Click Okay.You Selected ${liValue}.`);
        document.getElementById("slideC").style.display = "none";
        document.getElementById("slider").style.display = "block";
        document.getElementById("prevBtnCustom2").style.visibility = "visible";
        document.getElementById("nextBtnCustom2").style.visibility = "visible";
        document.getElementById("sliderImageBtn").style.visibility   = "visible";
  
        // Clear the local storage
        localStorage.removeItem('imageArray');
  
        // Clear the imageArray
        imageArray = [];
  
        // Clear the baseImageUrl
        baseImageUrl = '';
  
        // Set the new baseImageUrl
        baseImageUrl = urls[variableName];
  
        try {
          // Fetch and store new images with the updated baseImageUrl
          await fetchAndStoreImages();
  
          // Load and display images
          imageArray = loadImagesFromLocalStorage();
          loadImagesInSlider(0);
  
          // Display the updated images
          displayImages(imageArray);
  
          compareAndHighlightImage();
        } catch (error) {
          console.error('An error occurred:', error);
          alert('An error occurred. Please check the browser console.');
        }
      }
    });
  });
  
  async function fetchAndStoreImages() {
    // Clear the imageArray to fetch new images
    imageArray = [];
  
    let currentIndex = 0;
  
    while (true) {
      const imageUrl = `${baseImageUrl}${currentIndex + 1}.jpg`;
  
      console.log("Fetching image:", imageUrl);
  
      try {
        const response = await fetch(imageUrl);
  
        console.log("Response status:", response.status);
  
        if (response.status === 404) {
          console.log("404 Error - End of images");
          break;
        }
  
        if (response.ok) {
          const imageURL = imageUrl;
          imageArray.push(imageURL);
        } else {
          console.error(`Error fetching image at index ${currentIndex}: ${response.statusText}`);
          break;
        }
  
        currentIndex++;
      } catch (error) {
        console.error(`An error occurred while fetching the image at index ${currentIndex}: ${error}`);
        break;
      }
    }
  
    if (imageArray.length > 0) {
      const imageArrayJson = JSON.stringify(imageArray);
      localStorage.setItem('imageArray', imageArrayJson);
      console.log(imageArrayJson);
    }
  }
  
  function displayImages(imageArray) {
    // Clear the existing content in the container
    sliderHighlightImage.innerHTML = '';
  
    if (imageArray.length === 0) {
      // Handle the case when imageArray is empty (no images to display)
      const noImagesMessage = document.createElement('p');
      noImagesMessage.textContent = 'No Solutions Available.';
      sliderHighlightImage.appendChild(noImagesMessage);
    } else {
      imageArray.forEach((imageUrl, index) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Image ${index + 1}`; // Provide an alt attribute for accessibility
        sliderHighlightImage.appendChild(img);
      });
    }
  }






  
  
        // Hide the loader once the images are loaded
        hideLoader();
  
  // Function to save the username to local storage
  function saveUsernameToLocalStorage() {
    const username = document.getElementById('usernameInput').value;
    if (username) {
      localStorage.setItem('username', username);
      displayWelcomeMessage(username);
    }
  }
  
  // Event listener to save the username when the modal is closed
  $('#usernameModal').on('hidden.bs.modal', function () {
    saveUsernameToLocalStorage();
  });
  
  // Function to display the welcome message
  function displayWelcomeMessage(username) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (localStorage.getItem('username')) {
      welcomeMessage.textContent = `Welcome, ${username}!`;
    } else {
      welcomeMessage.textContent = `Hello, ${username}!`;
    }
  }
  
  // Function to retrieve and greet the user
  function greetUser() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      displayWelcomeMessage(storedUsername);
    } else {
      // If no username is stored, open the modal
      $('#usernameModal').modal('show');
    }
  }
  
  // Call the greetUser function when the page loads
  greetUser();
  
  
  
  // Get references to the iframe and error message elements
  const videoIframe = document.getElementById('videoIframe');
  const errorMessage = document.getElementById('errorMessage');
  
  // Function to handle iframe load success
  function handleIframeLoadSuccess() {
    videoIframe.style.display = 'block'; // Show the iframe
    errorMessage.style.display = 'none';  // Hide the error message
  }
  
  // Function to handle iframe load errors
  function handleIframeLoadError() {
    videoIframe.style.display = 'none';   // Hide the iframe
    errorMessage.style.display = 'block';  // Show the error message
  }
  
  // Function to handle online/offline events
  function handleOnlineStatus() {
    if (navigator.onLine) {
      // Online: Attempt to load the iframe
      videoIframe.src = "https://www.youtube.com/embed/hkNdhKAMhAA?si=hXGBU3lnagerHCbJ";
    } else {
      // Offline: Show the error message
      handleIframeLoadError();
    }
  }
  
  // Add event listeners to the iframe
  videoIframe.addEventListener('load', handleIframeLoadSuccess);
  videoIframe.addEventListener('error', handleIframeLoadError);
  
  // Add an event listener to check online/offline status
  window.addEventListener('online', handleOnlineStatus);
  window.addEventListener('offline', handleOnlineStatus);
  
  // Check the online status on page load
  handleOnlineStatus();
  
  
  // Get references to the image element, "View Full Screen" button, and close button
  const sliderImage = document.getElementById('sliderImage');
  const sliderImageBtn = document.getElementById('sliderImageBtn');
  const fullscreenContainer = document.getElementById('fullscreenContainer');
  const closeFullscreenBtn = document.getElementById('closeFullscreenBtn');
  
  // Flag to track full-screen state
  let isFullscreen = false;
  
  // Function to toggle full-screen mode for the image
  function toggleFullScreen() {
    if (isFullscreen) {
      // Exit full-screen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      isFullscreen = false;
      // document.getElementById("sliderImage").style.margin = "0 auto";
      // document.getElementById("sliderImage").style.display = "block";
    } else {
      // Enter full-screen mode
      if (fullscreenContainer.requestFullscreen) {
        fullscreenContainer.requestFullscreen();
      } else if (fullscreenContainer.mozRequestFullScreen) {
        fullscreenContainer.mozRequestFullScreen();
      } else if (fullscreenContainer.webkitRequestFullscreen) {
        fullscreenContainer.webkitRequestFullscreen();
      } else if (fullscreenContainer.msRequestFullscreen) {
        fullscreenContainer.msRequestFullscreen();
      }
      isFullscreen = true;
      // document.getElementById("sliderImage").style.margin = "0 auto";
      // document.getElementById("sliderImage").style.display = "block";
    }
  }
  
  // Add a click event listener to the "View Full Screen" button
  sliderImageBtn.addEventListener('click', () => {
    toggleFullScreen();
  });
  
  // Add a click event listener to the close button to exit full-screen mode
  closeFullscreenBtn.addEventListener('click', () => {
    toggleFullScreen();
  });
  
  // Event listener to handle full-screen change
  document.addEventListener('fullscreenchange', () => {
    isFullscreen = !!document.fullscreenElement || !!document.mozFullScreenElement || !!document.webkitFullscreenElement || !!document.msFullscreenElement;
  });
  
  // Event listener to handle the 'Escape' key to exit full-screen mode
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isFullscreen) {
      toggleFullScreen();
    }
  });
  
  
  
  // Define a function to save the selected item to localStorage
  function saveSelectedItemToLocalStorage(selectedItem) {
    localStorage.setItem('selectedItem', selectedItem);
  }
  
  // Define a function to load the selected item from localStorage
  function loadSelectedItemFromLocalStorage() {
    return localStorage.getItem('selectedItem');
  }
  
  // Function to set the selected item and load images when the page loads
  function setPageState() {
    const selectedItem = loadSelectedItemFromLocalStorage();
  
    if (selectedItem) {
      const variableName = selectedItem.split(' ').join('_');
      if (urls[variableName]) {
        // Set the base image URL
        baseImageUrl = urls[variableName];
  
        // Load and display images
        imageArray = loadImagesFromLocalStorage();
        loadImagesInSlider(0);
        displayImages(imageArray);
  
        // Compare and highlight the image
        compareAndHighlightImage();
  
        // Hide the list and show the slider (if needed)
        document.getElementById("slideC").style.display = "none";
        document.getElementById("slider").style.display = "block";
        document.getElementById("prevBtnCustom2").style.visibility = "visible";
        document.getElementById("nextBtnCustom2").style.visibility = "visible";
        document.getElementById("sliderImageBtn").style.visibility = "visible";
      }
    }
  }
  
  // Call the function to set the page state when the page loads
  setPageState();
  
  // Add a click event listener to the <li> elements to save the selected item
  liElements.forEach((li) => {
    li.addEventListener('click', async (event) => {
      const liValue = event.target.textContent.trim();
      const variableName = liValue.split(' ').join('_');
  
      if (urls[variableName]) {
        alert(`Click Okay. You Selected ${liValue}.`);
  
        // Save the selected item to localStorage
        saveSelectedItemToLocalStorage(liValue);
  
        // Set the base image URL
        baseImageUrl = urls[variableName];
  
        // Load and display images
        imageArray = loadImagesFromLocalStorage();
        loadImagesInSlider(0);
        displayImages(imageArray);
  
  
        // Compare and highlight the image
        compareAndHighlightImage();
  
        // Hide the list and show the slider
        document.getElementById("slideC").style.display = "none";
        document.getElementById("slider").style.display = "block";
        document.getElementById("prevBtnCustom2").style.visibility = "visible";
        document.getElementById("nextBtnCustom2").style.visibility = "visible";
        document.getElementById("sliderImageBtn").style.visibility = "visible";
      }
    });
  });
  
  
  
  
  
  
  // Function to handle keyboard arrow key events in fullscreen mode
  function handleFullscreenKeyEvents(event) {
    if (isFullscreen) {
      if (event.key === 'ArrowLeft') {
        // Left arrow key pressed, go to the previous image
        currentIndex = Math.max(currentIndex - 1, 0);
        loadImagesInSlider(currentIndex);
        compareAndHighlightImage();
      } else if (event.key === 'ArrowRight') {
        // Right arrow key pressed, go to the next image
        currentIndex = Math.min(currentIndex + 1, imageArray.length - 1);
        loadImagesInSlider(currentIndex);
        compareAndHighlightImage();
      }
    }
  }
  
  // Add a keydown event listener to the document
  document.addEventListener('keydown', handleFullscreenKeyEvents);
  
  function hideLoader() {
    const loader = document.getElementById('loaders');
    loader.style.display = 'none';
  }