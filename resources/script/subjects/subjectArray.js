document.addEventListener('DOMContentLoaded', function () {

    const semesterValue = localStorage.getItem('semester'); // You can replace this with your actual logic to get the semester value

    const listContainer = document.getElementById("main-list");


    
// Aakash Stha
const firstSem = [
    // Semester 1

    { name: "Introduction to IT", pdf: [] },
    { name: "C Programming", PdfandNotes: [] },
    { name: "Digital Logic", pdfandNotes: [] },
    { name: "Math I", bookPDF: [] },
    { name: "Physics", physicsPDF: [] }
];
// Semester 2
const secondSem = [
    {
        name: "Discrete Math",
        years: [
            "DS_MATH_2078_BS_TU",
            "DS_MATH_2076_BS_TU",
            "DS_MATH_2075_BS_TU"
        ]
    },
    {
        name: "Object Oriented Programming",
        years: [
            "OOP_2078_BS_TU",
            "OOP_2076_BS_TU",
            "OOP_2075_BS_TU"
        ]
    },
    {
        name: "MicroProcessor",
        years: [
            "MicroProcessor_2078_BS_TU",
            "MicroProcessor_2076_BS_TU",
            "MicroProcessor_2075_BS_TU"
        ]
    },
    {
        name: "Mathematics - II",
        years: [
            "Mathematics_II_2078_BS_TU",
            "Mathematics_II_2076_BS_TU",
            "Mathematics_II_2075_BS_TU"
        ]
    },
    {
        name: "Statistics - I",
        years: [
            "STATISTICS_I_2078_BS_TU",
            "STATISTICS_I_2076_BS_TU",
            "STATISTICS_I_2075_BS_TU"
        ]
    }
];
// Semester 3
const thirdSem = [
    // Courses for semester 3...
    { name: "Data Structure", years: [] },
    { name: "Numerical Method", years: [] },
    { name: "Computer Graphics", years: [] },
    { name: "Computer Architecture", years: [] },
    { name: "Statistics II ", years: [] }
];
// Semester 4
const fourthSem = [
    // Courses for semester 4...
    { name: "Theory of Computation", years: [] },
    { name: "Database And Management System", years: [] },
    { name: "Artificial Intelligence	", years: [] },
    { name: "Computer Network", years: [] },
    { name: "Operating System", years: [] }
];
// Semester 5
const fifthSem = [
    { name: "Design and Analysis of Algorithms", years: [] },
    { name: "System Analysis and Design", years: [] },
    { name: "Cryptography", years: [] },
    { name: "Web Technology", years: [] },
    { name: "Theory of C", years: [] },
    { name: "Elictive I", years: [] }
];
// Semester 6
const sixthSem = [
    // Courses for semester 6...
    { name: "Software Engineering", years: [] },
    { name: "E- Governance", years: [] },
    { name: "NET Centric Computing", years: [] },
    { name: "Compiler Design and Construction", years: [] },
    { name: "Technical Writing", years: [] },
    { name: "Elective CourseII", years: [] }
];
// Semester 7
const seventhSem = [
    // Courses for semester 7...
    { name: "Advanced Java Programming", years: [] },
    { name: "Data Warehousing and Data Mining", years: [] },
    { name: "Principles of Management", years: [] },
    { name: "Project Work", years: [] },
    { name: "Elective Course III", years: [] }
];
// Semester 8
const eightSem = [
    // Courses for semester 8...
    { name: "Advanced Database", years: [] },
    { name: "Internship", years: [] },
    { name: "Elective IV", years: [] },
    { name: "Elective V", years: [] }
];


    function createListItems(subjects) {
        subjects.forEach(subject => {
          const listItem = document.createElement("li");
          listItem.classList.add("has-sub-list");
      
          const iconElement = document.createElement("i");
          iconElement.classList.add("fas"); // Adding Font Awesome icon class
      
          const subjectName = document.createTextNode(subject.name);
          listItem.appendChild(iconElement);
          listItem.appendChild(subjectName);
      
          const subList = document.createElement("ul");
          subList.classList.add("sub-list");
      
          subject.years.forEach(year => {
            const subListItem = document.createElement("li");
            const yearNode = document.createTextNode(year);
            subListItem.appendChild(yearNode);
            subList.appendChild(subListItem);
          });
      
          listItem.appendChild(subList);
          listContainer.appendChild(listItem);
        });
      }
      
      switch (semesterValue) {
        case "1":
          // Code for first semester
          SpecialfirstSem();
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
      
    const hasSubListItems = document.querySelectorAll('.has-sub-list');
    const allListItems = document.querySelectorAll('.has-sub-list, .sub-list li');

    hasSubListItems.forEach(item => {
        const iconElement = item.querySelector('i');

        item.addEventListener('click', function () {
            const subList = this.querySelector('.sub-list');
            subList?.classList.toggle('show-sub-list');
            item.classList.toggle('expanded'); // Add or remove the 'expanded' class
            iconElement?.classList.toggle('fa-chevron-up');
            iconElement?.classList.toggle('fa-chevron-down');

            // Capture and alert the text content only for specific elements
            if (item.classList.contains('has-sub-list') || item.classList.contains('sub-list')) {
                const clickedValue = this.textContent.trim();
                // console.log(clickedValue);
            }
        });
    });

    // Add click event listener for all li elements
    allListItems.forEach(item => {
        item.addEventListener('click', function () {
            const clickedValue = this.textContent.trim();
            // console.log(`You clicked on: ${clickedValue}`);
        });
    });

});

