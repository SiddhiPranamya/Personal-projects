document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('form').onsubmit = function(){
        fetch('https://api.exchangeratesapi.io/latest?base=USD') //sending HTTP request to the website API / AJAX - Asynchronous Javascript and XML. fetch is a function that sends http request and gets a promise which is a value that may not be immediately returned but returned later as a response
        .then(response => response)
        .then(data =>{
            cur = document.querySelector('#currency').value.toUpperCase();
            const rate = data.rates[cur];
            if(rate!= undefined){
                document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${cur}.`;
            }
            else{
                document.querySelector('#result').innerHTML = 'Invalid currency';
            }
    })
    .catch(error => {
        console.log('Error:', error);
    });
    // Prevent default submission
    return false;
    }
    
});