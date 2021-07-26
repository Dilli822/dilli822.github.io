

   
        // JS script 
     
            // clearing and reloading the console
            console.clear();
            console.log('JS Relaoded')
        fetch("https://api.github.com/users/dilli822")
        .then(response => response.json())
        .then(function(data){
            console.log(data);

            let public_reposNum = data['public_repos']
            let public_reposInformation= `Currently I have ${public_reposNum} repos on github.`
            
            document.getElementById('avatar').src = data["avatar_url"]
            document.getElementById('fullName').textContent = data["name"]
            document.getElementById('bio').textContent  =  data["bio"]
            document.getElementById('location').textContent  =  data["location"]

            document.getElementById('public_reposNumber').textContent = public_reposInformation
            document.getElementById('githubLink').href= data ['url']
            document.getElementById('htmlLink').href= data ['html_url']
            document.getElementById('reposLink').href= data['repos_url']


          
        })

        fetch("https://api.github.com/users/Dilli822/repos")
        .then(response => response.json())
        .then (function(data2){
            console.log(data2)
           console.log(data2[1])
           console.log(data2[4])
           console.log(data2[8])
           console.log(data2[12])
           console.log(data2[17])

             //this will unhide the main element after hard reset
            document.getElementById('main-container').hidden= false

            //remove the loading after the main element is unhidden
            document.getElementById('loading').hidden= true
        })   

    