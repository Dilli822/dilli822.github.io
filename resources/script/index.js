

   
        // JS script 

        fetch("https://api.github.com/users/dilli822")
        .then(response => response.json())
        .then(function(data){
            console.log(data);

            document.getElementById('fullName').textContent = data["name"]
            document.getElementById('bio').textContent = data["bio"]

        })

        // fetch("https://api.github.com/users/Dilli822/repos")
        // .then(response => response.json())
        // .then (function(data2){
        //     console.log(data2)
        //    console.log(data2[1])
        //    console.log(data2[4])
        //    console.log(data2[8])
        //    console.log(data2[12])
        //    console.log(data2[17])

        //      //this will unhide the main element after hard reset
        //     document.getElementById('main-container').hidden= false

        //     //remove the loading after the main element is unhidden
        //     document.getElementById('loading').hidden= true
        // })   

    