const axios = require('axios');

const get_books = axios.get('https://limjing7-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/')
    .then(response => {
        console.log("-------Get All Books------");
        console.log(JSON.stringify(response.data, null, 4));
        console.log("--------------------------");
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching books:', error);
    });

const get_book_isbn = axios.get('https://limjing7-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/isbn/2')
    .then(response => {
        console.log("-----Get Book by ISBN-----");
        console.log(JSON.stringify(response.data, null, 4));
        console.log("--------------------------");
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching books:', error);
    });

const get_book_author = axios.get('https://limjing7-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/author/Dante%20Alighieri')
    .then(response => {
        console.log("----Get Book by Author----");
        console.log(JSON.stringify(response.data, null, 4));
        console.log("--------------------------");
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching books:', error);
    });


const get_book_title = axios.get('https://limjing7-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/title/The%20Epic%20Of%20Gilgamesh')
    .then(response => {
        console.log("-----Get Book by Title----");
        console.log(JSON.stringify(response.data, null, 4));
        console.log("--------------------------");
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching books:', error);
    });