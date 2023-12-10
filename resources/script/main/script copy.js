document.addEventListener("DOMContentLoaded", function () {
  const backCover = "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/2079KECCOVER/KEC2079BACKCOVER.jpg";
  const frontCover = "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/2079KECCOVER/KEC2079FRONTCOVER.jpg";

  document.getElementById("backCover").src = backCover;
  document.getElementById("frontCover").src = frontCover;
  document.getElementById("loader").style.display = "none";
  document.getElementById("loaders").style.display = "none";
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

  // Aakash Stha
  const firstSem = [
      // Semester 1

      { name: "Introduction to IT", years: [] },
      { name: "C Programming", years: [] },
      { name: "Digital Logic", years: [] },
      { name: "Math I", years: [] },
      { name: "Physics", years: [] },
  ];
  // Semester 2
  const secondSem = [
      {
          name: "Discrete Math",
          years: ["DS_MATH_2078_BS_TU", "DS_MATH_2076_BS_TU", "DS_MATH_2075_BS_TU"],
      },
      {
          name: "Object Oriented Programming",
          years: ["OOP_2078_BS_TU", "OOP_2076_BS_TU", "OOP_2075_BS_TU"],
      },
      {
          name: "MicroProcessor",
          years: ["MicroProcessor_2078_BS_TU", "MicroProcessor_2076_BS_TU", "MicroProcessor_2075_BS_TU"],
      },
      {
          name: "Mathematics - II",
          years: ["Mathematics_II_2078_BS_TU", "Mathematics_II_2076_BS_TU", "Mathematics_II_2075_BS_TU"],
      },
      {
          name: "Statistics - I",
          years: ["STATISTICS_I_2078_BS_TU", "STATISTICS_I_2076_BS_TU", "STATISTICS_I_2075_BS_TU"],
      },
  ];
  // Semester 3
  const thirdSem = [
      // Courses for semester 3...
      { name: "Data Structure and Algorithm", years: [] },
      { name: "Numerical Method", years: [] },
      { name: "Computer Graphics", years: [] },
      { name: "Computer Architecture", years: [] },
      { name: "Statistics II ", years: [] },
  ];
  // Semester 4
  const fourthSem = [
      // Courses for semester 4...
      { name: "Theory of Computation", years: [] },
      { name: "Database And Management System", years: [] },
      { name: "Artificial Intelligence	", years: [] },
      { name: "Computer Network", years: [] },
      { name: "Operating System", years: [] },
  ];
  // Semester 5
  const fifthSem = [
      { name: "Design and Analysis of Algorithms", years: [] },
      { name: "System Analysis and Design", years: [] },
      { name: "Cryptography", years: [] },
      { name: "Web Technology", years: [] },
      { name: "Theory of C", years: [] },
      { name: "Elictive I", years: [] },
  ];
  // Semester 6
  const sixthSem = [
      // Courses for semester 6...
      { name: "Software Engineering", years: [] },
      { name: "E- Governance", years: [] },
      { name: "NET Centric Computing", years: [] },
      { name: "Compiler Design and Construction", years: [] },
      { name: "Technical Writing", years: [] },
      { name: "Elective CourseII", years: [] },
  ];
  // Semester 7
  const seventhSem = [
      // Courses for semester 7...
      { name: "Advanced Java Programming", years: [] },
      { name: "Data Warehousing and Data Mining", years: [] },
      { name: "Principles of Management", years: [] },
      { name: "Project Work", years: [] },
      { name: "Elective Course III", years: [] },
  ];
  // Semester 8
  const eightSem = [
      // Courses for semester 8...
      { name: "Advanced Database", years: [] },
      { name: "Internship", years: [] },
      { name: "Elective IV", years: [] },
      { name: "Elective V", years: [] },
  ];

  const semesterValue = localStorage.getItem("semester"); // You can replace this with your actual logic to get the semester value
  const listContainer = document.getElementById("main-list");



  function createListItems(subjects) {
    listContainer.innerHTML = ""; // Clear existing content

    subjects.forEach((subject) => {
        const listItem = document.createElement("li");
        listItem.classList.add("has-sub-list");

        const iconElement = document.createElement("i");
        iconElement.classList.add("fas"); // Adding Font Awesome icon class

        const subjectName = document.createTextNode(subject.name);
        listItem.appendChild(iconElement);
        listItem.appendChild(subjectName);

        const subList = document.createElement("ul");
        subList.classList.add("sub-list");

        subject.years.forEach((year) => {
            const subListItem = document.createElement("li");
            const yearNode = document.createTextNode(year);
            subListItem.appendChild(yearNode);
            subList.appendChild(subListItem);
        });

        listItem.appendChild(subList);
        listContainer.appendChild(listItem);

        // Add event listener to toggle sub-list visibility
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('expanded');
            subList.classList.toggle('visible');
        });
    });
}




  switch (semesterValue) {
      case "1":
          // Code for first semester
          createListItems(firstSem);
          break;

      case "2":
          // Code for the second semester
          createListItems(secondSem);
          break;

      case "3":
          // Code for third semester
          createListItems(thirdSem);
          break;

      case "4":
          // Code for fourth semester
          createListItems(fourthSem);
          break;

      case "5":
          // Code for fifth semester
          createListItems(fifthSem);
          break;

      case "6":
          // Code for sixth semester
          createListItems(sixthSem);
          break;

      case "7":
          // Code for seventh semester
          createListItems(seventhSem);
          break;

      case "8":
          // Code for eighth semester
          createListItems(eightSem);
          break;

      default:
          // Display a message for semesters other than 1, 2, 3, ..., 8
          const noAvailableMessage = document.createElement("li");
          noAvailableMessage.innerHTML = "<span class='text-danger'> No subjects available for the current semester. </span>";
          listContainer.appendChild(noAvailableMessage);
          break;
  }

  // Check if the username and semester are already saved in localStorage
const savedUsername = localStorage.getItem('username');
const savedSemester = localStorage.getItem('semester');

if (!savedUsername) {
    // If username or semester is not saved, show the modal
    $('#usernameModal').modal('show');
    document.getElementById("content").style.opacity = "0";

    // Save the username and semester to localStorage when the "Save" button is clicked
    $('#saveUsername').on('click', function () {
        const username = $('#usernameInput').val();
        // const semester = $('#semesterSelect').val();

        if (username) {
            localStorage.setItem('username', username);
            // localStorage.setItem('semester', semester);

            $('#usernameModal').modal('hide');
            document.getElementById("content").style.opacity = "1";
            displayFirstInfo(username);
        } else {
            // Provide feedback to the user that they need to select a semester
            displayInfo(username);
            alert("Please Enter Your Name before procedding.");
        }
    });
} else {
    // If username and semester are saved, display them
    displayInfo(savedUsername, savedSemester);
}


function displayInfo(username) {
  document.getElementById('greeting').innerHTML = `Welcome Back, ${username}.
  <br> <span> You are doing great! Keep on Studying!`;
    // Update the content of the element with the id "selectedSem"
    document.getElementById("selectedSem").innerHTML = `Your Semester: ${savedSemester}`;
}

function displayFirstInfo(username) {
  document.getElementById('greeting').innerHTML = `Hello, ${username}.
  <br> Best of Luck!!!`;
}

// Function to update the displayed semester
function updateDisplayedSemester() {
  // Retrieve the current semester from localStorage
  let currentSemester = localStorage.getItem('semester');
  // Update the content of the element with the id "selectedSem"
  document.getElementById("selectedSem").innerHTML = `Your Semester: ${currentSemester}`;
}

// Function to update semester and save it to localStorage
function updateSemester() {
  const selectedSemester = document.getElementById("semesterSelect").value;
  // Save the selected semester in localStorage
  localStorage.setItem('semester', selectedSemester);

  updateDisplayedSemester();
  // Remove the existing list container content
  listContainer.innerHTML = "";

  let currentSemester = localStorage.getItem("semester");

  // Update the content of the element with the id "selectedSem"
  document.getElementById("selectedSem").innerHTML = `Your Semester: ${currentSemester}`;

  // Update the switch case based on the selected semester
  switch (selectedSemester) {
    case "1":
      // Code for first semester
      createListItems(firstSem);
      break;

    case "2":
      // Code for the second semester
      createListItems(secondSem);
      break;

    case "3":
      // Code for third semester
      createListItems(thirdSem);
      break;

    case "4":
      // Code for fourth semester
      createListItems(fourthSem);
      break;

    case "5":
      // Code for fifth semester
      createListItems(fifthSem);
      break;

    case "6":
      // Code for sixth semester
      createListItems(sixthSem);
      break;

    case "7":
      // Code for seventh semester
      createListItems(seventhSem);
      break;

    case "8":
      // Code for eighth semester
      createListItems(eightSem);
      break;

    default:
      // Display a message for semesters other than 1, 2, 3, ..., 8
      const noAvailableMessage = document.createElement("li");
      noAvailableMessage.innerHTML = "<span class='text-danger'> No subjects available for the current semester. </span>";
      listContainer.appendChild(noAvailableMessage);
      break;
  }
}

// Add an event listener to the semester select element
document.getElementById("updateButton").addEventListener("click", updateSemester);
// Call the function initially to set the semester based on the default or pre-existing value
updateSemester();

const hasSubListItems = document.querySelectorAll(".has-sub-list");

  hasSubListItems.forEach((item) => {
      const iconElement = item.querySelector("i");

      item.addEventListener("click", function () {
          const subList = this.querySelector(".sub-list");
          subList?.classList.toggle("show-sub-list");
          item.classList.toggle("expanded"); // Add or remove the 'expanded' class
          iconElement?.classList.toggle("fa-chevron-up");
          iconElement?.classList.toggle("fa-chevron-down");

          // Capture and alert the text content only for specific elements
          if (item.classList.contains("has-sub-list") || item.classList.contains("sub-list")) {
              const clickedValue = this.textContent.trim();
              console.log(clickedValue);

              const sliderHighlightImage = document.getElementById("sliderHighlightImage");

              const urls = {
                  DS_MATH_2078_BS_TU: "https://raw.githubusercontent.com/yana-music/CSIT2ndSemSolution/main/DiscreteMath/2078/ds-2078-",
                  DS_MATH_2076_BS_TU: "https://raw.githubusercontent.com/yana-music/CSIT2ndSemSolution/main/DiscreteMath/2076/ds-2076-",
                  DS_MATH_2075_BS_TU: "https://raw.githubusercontent.com/yana-music/CSIT2ndSemSolution/main/DiscreteMath/2075/ds-2075-",

                  OOP_2078_BS_TU: "https://raw.githubusercontent.com/yana-music/CSIT2ndSemSolution/main/OOP/2078/oop-2078-",
                  OOP_2076_BS_TU: "https://raw.githubusercontent.com/yana-music/CSIT2ndSemSolution/main/OOP/2076/oop-2076-",
                  OOP_2075_BS_TU: "https://raw.githubusercontent.com/yana-music/CSIT2ndSemSolution/main/OOP/2075/oop-2075-",

                  Mathematics_II_2078_BS_TU: "https://raw.githubusercontent.com/yana-music/CSIT2ndSemSolution/main/Maths-II/2078/Maths-II-2078-",
                  Mathematics_II_2076_BS_TU: "https://raw.githubusercontent.com/yana-music/CSIT2ndSemSolution/main/Maths-II/2076/Maths-II-2076-",
                  Mathematics_II_2075_BS_TU: "https://raw.githubusercontent.com/yana-music/CSIT2ndSemSolution/main/Maths-II/2075/Maths-II-2075-",

                  MicroProcessor_2078_BS_TU: "https://raw.githubusercontent.com/yana-music/CSIT2ndSemSolution/main/Microprocessor/2078/microprocessor-2078-",
                  MicroProcessor_2076_BS_TU: "https://raw.githubusercontent.com/yana-music/CSIT2ndSemSolution/main/Microprocessor/2076/microprocessor-2076-",
                  MicroProcessor_2075_BS_TU: "https://raw.githubusercontent.com/yana-music/CSIT2ndSemSolution/main/Microprocessor/2075/microprocessor-2075-",

                  STATISTICS_I_2078_BS_TU: "https://raw.githubusercontent.com/yana-music/CSIT2ndSemSolution/main/STAT-I/2078/STATS-I-2078-",
                  STATISTICS_I_2076_BS_TU: "https://raw.githubusercontent.com/yana-music/CSIT2ndSemSolution/main/STAT-I/2076/STATS-I-2076-",
                  STATISTICS_I_2075_BS_TU: "https://raw.githubusercontent.com/yana-music/CSIT2ndSemSolution/main/STAT-I/2075/STATS-I-2075-",
              };

              let baseImageUrl;
              let imageArray = [];

              document.getElementById("buttonss").style.display = "none";
              document.getElementById("closeFullscreenBtn").style.display = "none";
              document.getElementById("fullscreenContainer").style.display = "none";
              document.getElementById("whole-Slider").style.display = "none";
              document.getElementById("slider").style.display = "none";
          
              // section for loader hide and show
              function showLoading() {
                  document.getElementById("loader").style.display = "block";
                  document.getElementById("loaders").style.display = "block";
                  document.getElementById("ifram").style.display = "none";
                  document.getElementById("sliderImage").style.display = "none";
                  document.getElementById("sliderHighlightImage").style.display = "none";
                  document.getElementById("buttonss").style.display = "none";
                  document.getElementById("closeFullscreenBtn").style.display = "none";
                  document.getElementById("choosensolutionHighLights").style.display = "none";
              }

              function hideLoading() {
                  document.getElementById("loader").style.display = "none";
                  document.getElementById("loaders").style.display = "none";
                  document.getElementById("sliderImage").style.display = "block";
                  document.getElementById("sliderHighlightImage").style.display = "block";
                  document.getElementById("choosensolutionHighLights").style.display = "block";

                  // document.get
              }

              // initailly loading is hidden
              hideLoading();

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
                              imageArray.push(imageURL); // Push the imageUrl, not a string
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
                      localStorage.setItem("imageArray", imageArrayJson);
                      console.log("image array json ", imageArrayJson);
                      displayImages(imageArray); // Call displayImages after fetching
                  }
              }

              // Load the imageArray from local storage
              function loadImagesFromLocalStorage() {
                  const imageArrayJson = localStorage.getItem("imageArray");
                  if (imageArrayJson) {
                      const parsedArray = JSON.parse(imageArrayJson);
                      // Use a Set to remove duplicates, and then convert it back to an array
                      return [...new Set(parsedArray)];
                  }
                  return []; // Return an empty array if data is not in local storage.
              }

              console.log(imageArray);

              function displayImages(imageArray) {
                  // Clear the existing content in the container (assuming sliderHighlightImage is defined)
                  sliderHighlightImage.innerHTML = "";

                  if (imageArray.length === 0) {
                      // Handle the case when imageArray is empty (no images to display)
                      const noImagesMessage = document.createElement("p");
                      noImagesMessage.textContent = "No Solutions Available.";
                      sliderHighlightImage.appendChild(noImagesMessage);
                  } else {
                      imageArray.forEach((imageUrl, index) => {
                          const img = document.createElement("img");
                          img.src = imageUrl;
                          img.alt = `Image ${index + 1}`; // Provide an alt attribute for accessibility
                          sliderHighlightImage.appendChild(img);
                      });
                  }
              }

              // Call this function to display images from the imageArray when needed.
              displayImages(imageArray);

              // Function to compare and add a red border
              // Add event listeners for the "Previous" and "Next" buttons
              const prevButton = document.getElementById("prevBtnCustom2");
              const nextButton = document.getElementById("nextBtnCustom2");
              let currentIndex = 0;

              function loadImagesInSlider(index) {
                  if (index < 0 || index >= imageArray.length) {
                      console.error("Invalid image index");

                      return;
                  }

                  const sliderImage = document.getElementById("sliderImage");
                  sliderImage.src = imageArray[index];
              }

              prevButton.addEventListener("click", () => {
                  currentIndex = Math.max(currentIndex - 1, 0);
                  loadImagesInSlider(currentIndex);
                  compareAndHighlightImage();
              });

              nextButton.addEventListener("click", () => {
                  currentIndex = Math.min(currentIndex + 1, imageArray.length - 1);
                  loadImagesInSlider(currentIndex);
                  compareAndHighlightImage();
              });

              // Initialize the slider with the first image
              loadImagesInSlider(currentIndex);

              // Function to compare and add a red border to the matching image
              function compareAndHighlightImage() {
                  const sliderImage = document.getElementById("sliderImage");
                  const images = document.querySelectorAll("#sliderHighlightImage img");

                  images.forEach((img) => {
                      if (img.src === sliderImage.src) {
                          // If the src attributes match, add a red border to the image
                          img.style.border = "2px solid red";
                          sliderImage.style.border = "2px solid red";
                      } else {
                          // If the src attributes don't match, remove the red border (if it was previously set)
                          img.style.border = "none";
                      }
                  });
              }

              const liElements = document.querySelectorAll("li");

              liElements.forEach((li) => {
                  li.addEventListener("click", async (event) => {
                      const liValue = event.target.textContent.trim();
                      alert(liValue);
                      const variableName = liValue.split(" ").join("_");

                      if (urls[variableName]) {
                          //  alert(`Click Okay.You Selected ${liValue}.`);
                          // Clear the local storage
                          localStorage.removeItem("imageArray");
                          showLoading();

                          // Clear the imageArray
                          imageArray = [];

                          // Clear the baseImageUrl
                          baseImageUrl = "";

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
                              document.getElementById("choosensolutionHighLights").textContent = `${liValue}`;
                              document.getElementById("buttonss").style.display = "block";
                              document.getElementById("closeFullscreenBtn").style.display = "block";
                              document.getElementById("whole-Slider").style.display = "block";
                              document.getElementById("slider").style.display = "block";
                              document.getElementById("fullscreenContainer").style.display = "block";
                              hideLoading();
                              document.getElementById("loader").style.display = "none";
                              document.getElementById("loaders").style.display = "none";
                              
                          } catch (error) {
                              console.error("An error occurred:", error);
                              //  alert('An error occurred. Please check the browser console.');
                          }
                      }
                  });
              });
          }
      });
  });
});
