document.addEventListener("DOMContentLoaded", function () {
    const backCover = "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/2079KECCOVER/KEC2079BACKCOVER.jpg";
    const frontCover = "https://raw.githubusercontent.com/Dilli822/dilli822.github.io/main/resources/img/csit/pastquestionsolutions/2079KECCOVER/KEC2079FRONTCOVER.jpg";

    document.getElementById("backCover").src = backCover;
    document.getElementById("frontCover").src = frontCover;
    document.getElementById("loader").style.display = "none";
    document.getElementById("loaders").style.display = "none";

    // Check if the username and semester are already saved in localStorage
    const savedUsername = localStorage.getItem("username");

    var savedSemester = localStorage.getItem("semester");
    const semesterStatus = savedSemester ? undefined : "not selected";

    // // Add click event listeners to toggle sub-list visibility
    const listItems = document.querySelectorAll("li.has-sub-list");
    listItems.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("expanded");
            const subList = item.querySelector(".sub-list");
            if (subList) {
                subList.classList.toggle("visible");
            }
        });
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function displayInfo(username, savedSemester) {
        if (savedSemester === null) {
            document.getElementById("greeting").innerHTML = `Welcome Back ${username}.<br> <span> You are doing great! Keep on Studying! <hr> <h3> Semester: ${savedSemester}`;
        } else if (savedSemester === "1") {
            document.getElementById("greeting").innerHTML = `Welcome Back, ${username}.<br> <span> You are doing great! Keep on Studying! <hr> <h3> Semester: ${savedSemester}st`;
        } else if (savedSemester === "2") {
            document.getElementById("greeting").innerHTML = `Welcome Back, ${username}.<br> <span> You are doing great! Keep on Studying! <hr> <h3> Semester: ${savedSemester}nd`;
        } else if (savedSemester === "3") {
            document.getElementById("greeting").innerHTML = `Welcome Back, ${username}.<br> <span> You are doing great! Keep on Studying! <hr> <h3> Semester: ${savedSemester}rd`;
        } else {
            document.getElementById("greeting").innerHTML = `Welcome Back, ${username}.<br> <span> You are doing great! Keep on Studying! <hr> <h3> Semester: ${savedSemester}th`;
        }
    }

    function displayFirstInfo(firstUsername) {
        document.getElementById("greeting").textContent = `Hello ${firstUsername} .Best of Luck!`;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (!savedUsername) {
        // If username or semester is not saved, show the modal
        $("#usernameModal").modal("show");
        document.getElementById("content").style.opacity = "0";

        // Save the username and semester to localStorage when the "Save" button is clicked
        $("#saveUsername").on("click", function () {
            const username = $("#usernameInput").val();

            localStorage.setItem("username", username);
            // localStorage.setItem('semester', semester);

            $("#usernameModal").modal("hide");
            document.getElementById("content").style.opacity = "1";
            displayFirstInfo(username);
        });
    } else {
        // If username and semester are saved, display them
        displayInfo(savedUsername, savedSemester);
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Aakash Stha
    const firstSem = [
        // Semester 1

        { name: "Introduction to IT", years: ["Introduction to IT PDF"] },
        { name: "C Programming", years: ["Coming Soon!"] },
        { name: "Digital Logic", years: ["Coming Soon!"] },
        { name: "Math I", years: ["Coming Soon!"] },
        { name: "Physics", years: ["Coming Soon!"] },
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
        { name: "Numerical Method", years: ["Coming Soon!"] },
        { name: "Computer Graphics", years: ["Coming Soon!"] },
        { name: "Computer Architecture", years: ["Coming Soon!"] },
        { name: "Statistics II ", years: ["Coming Soon!"] },
    ];
    // Semester 4
    const fourthSem = [
        // Courses for semester 4...
        { name: "Theory of Computation", years: ["Coming Soon!"] },
        { name: "Database And Management System", years: ["Coming Soon!"] },
        { name: "Artificial Intelligence	", years: ["Coming Soon!"] },
        { name: "Computer Network", years: ["Coming Soon!"] },
        { name: "Operating System", years: ["Coming Soon!"] },
    ];
    // Semester 5
    const fifthSem = [
        { name: "Design and Analysis of Algorithms", years: ["Coming Soon!"] },
        { name: "System Analysis and Design", years: ["Coming Soon!"] },
        { name: "Cryptography", years: ["Coming Soon!"] },
        { name: "Web Technology", years: ["Coming Soon!"] },
        { name: "Theory of C", years: ["Coming Soon!"] },
        { name: "Elictive I", years: ["Coming Soon!"] },
    ];
    // Semester 6
    const sixthSem = [
        // Courses for semester 6...
        { name: "Software Engineering", years: ["Coming Soon!"] },
        { name: "E- Governance", years: ["Coming Soon!"] },
        { name: "NET Centric Computing", years: ["Coming Soon!"] },
        { name: "Compiler Design and Construction", years: ["Coming Soon!"] },
        { name: "Technical Writing", years: ["Coming Soon!"] },
        { name: "Elective CourseII", years: ["Coming Soon!"] },
    ];
    // Semester 7
    const seventhSem = [
        // Courses for semester 7...
        { name: "Advanced Java Programming", years: ["coming soon"] },
        { name: "Data Warehousing and Data Mining", years: ["Coming Soon!"] },
        { name: "Principles of Management", years: ["Coming Soon!"] },
        { name: "Project Work", years: ["Coming Soon!"] },
        { name: "Elective Course III", years: ["Coming Soon!"] },
    ];
    // Semester 8
    const eightSem = [
        // Courses for semester 8...
        { name: "Advanced Database", years: ["Coming Soon!"] },
        { name: "Internship", years: ["Coming Soon!"] },
        { name: "Elective IV", years: ["Coming Soon!"] },
        { name: "Elective V", years: ["Coming Soon!"] },
    ];

    const semesterValue = localStorage.getItem("semester"); // You can replace this with your actual logic to get the semester value

    const listContainer = document.getElementById("main-list");

    // Add an event listener to the "Set Semester" button
    document.getElementById("semesterSelect").addEventListener("click", function () {
        // Retrieve the selected option value
        const selectedSemester = document.getElementById("semesterDropdown").value;

        // Save the selected semester to local storage
        const currentSemester = localStorage.setItem("semester", selectedSemester);

        // You can add additional logic or function calls here if needed

        // For demonstration, alert the user with the selected semester
        // alert(`Semester ${selectedSemester} selected!`);
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Function to create list items based on the selected semester
    function createListItems(subjects) {
        // // Clear the existing list items
        const savedSemester = localStorage.getItem("semester");
        const selectedUsername = localStorage.getItem("username");
        
        displayInfo(selectedUsername, savedSemester);
        listContainer.innerHTML = "";
        // Clear the existing content in the container (assuming sliderHighlightImage is defined)
        sliderHighlightImage.innerHTML = "";
        // Clear the imageArray to fetch new images
        imageArray = [];

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
        });
    }

    // Add an event listener to the "Set Semester" button
    document.getElementById("semesterSelect").addEventListener("click", function () {
        // Retrieve the selected option value
        const selectedSemester = document.getElementById("semesterDropdown").value;

        // Save the selected semester to local storage
        localStorage.setItem("semester", selectedSemester);
        displayInfo(savedUsername, selectedSemester);
        // Call the function to update the list based on the selected semester
        updateListBasedOnSemester(selectedSemester);



        // For demonstration, alert the user with the selected semester
        // alert(`Semester ${selectedSemester} selected!`);
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Function to update the list based on the selected semester
    function updateListBasedOnSemester(semester) {
        switch (semester) {
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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
                    // console.log(clickedValue);

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

                            // console.log("Fetching image:", imageUrl);

                            try {
                                const response = await fetch(imageUrl);

                                // console.log("Response status:", response.status);

                                if (response.status === 404) {
                                    // console.log("404 Error - End of images");
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
                            // console.log("image array json ", imageArrayJson);
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

                    // console.log(imageArray);

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
                            // console.error("Invalid image index");

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
                            // alert(liValue);
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
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Call the function to initially set up the list based on the saved semester
    updateListBasedOnSemester(localStorage.getItem("semester"));

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});

