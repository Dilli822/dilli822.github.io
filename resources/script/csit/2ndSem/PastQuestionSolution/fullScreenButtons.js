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


       function openNav() {
        document.getElementById("myNav").style.width = "100%";
      }
      
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }
      