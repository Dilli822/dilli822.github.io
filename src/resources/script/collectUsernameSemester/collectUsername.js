
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
  


// Check if the username and semester are already saved in localStorage
const savedUsername = localStorage.getItem('username');
const savedSemester = localStorage.getItem('semester');

if (!savedUsername || !savedSemester) {
    // If username or semester is not saved, show the modal
    $('#usernameModal').modal('show');
    document.getElementById("content").style.opacity = "0";

    // Save the username and semester to localStorage when the "Save" button is clicked
    $('#saveUsername').on('click', function () {
        const username = $('#usernameInput').val();
        const semester = $('#semesterSelect').val();

        localStorage.setItem('username', username);
        localStorage.setItem('semester', semester);

        $('#usernameModal').modal('hide');
        document.getElementById("content").style.opacity = "1";
        displayFirstInfo(username, semester);
    });
} else {
    // If username and semester are saved, display them
    displayInfo(savedUsername, savedSemester);
}

function displayInfo(username, savedSemester) {
    document.getElementById('greeting').innerHTML = `Welcome Back, ${username}.<br> <span> You are doing great! Keep on Studying! <hr> <h3> Semester: ${savedSemester}th`;
}

function displayFirstInfo(firstUsername) {
    document.getElementById('greeting').textContent = `Hello ${firstUsername} .Best of Luck!`;
  
};
