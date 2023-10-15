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
  

      // Check if the username is already saved in localStorage
      const savedUsername = localStorage.getItem('username');
      
      if (!savedUsername) {
        
        // If username is not saved, show the modal
        $('#usernameModal').modal('show');
        document.getElementById("content").style.opacity = "0";
      
        // Save the username to localStorage when the "Save" button is clicked
        $('#saveUsername').on('click', function() {
          const username = $('#usernameInput').val();
          localStorage.setItem('username', username);
          $('#usernameModal').modal('hide');
          document.getElementById("content").style.opacity = "1";
          displayFirstUsername(username);
        });
      } else {
        // If username is saved, display it
        displayUsername(savedUsername);
      }
      
      function displayUsername(username) {
        document.getElementById('greeting').innerHTML = `Welcome Back, ${username}.<br> <span> You are doing great! Keep on Studying! <br> `;
      }

      function displayFirstUsername(firstusername){
        document.getElementById('greeting').textContent = `Hello ${firstusername}. Best of Luck!`;
      };
