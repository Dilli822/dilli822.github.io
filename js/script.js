    
       var axios = require("axios").default;

       var options = {
         method: 'GET',
         url: 'https://instagram-facebook-media-downloader.p.rapidapi.com/api',
         params: {igurl: 'https://www.instagram.com/p/BvJyyOhoYvJ'},
         headers: {
           'x-rapidapi-key': 'd9a42d7ae1mshb3a3063221184b5p1e87e2jsnb00cc11fdfa4',
           'x-rapidapi-host': 'instagram-facebook-media-downloader.p.rapidapi.com'
         }
       };
       
       axios.request(options).then(function (response) {
           console.log(response.data);
       }).catch(function (error) {
           console.error(error);
       });