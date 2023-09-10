const scriptURL = 'https://script.google.com/macros/s/AKfycbzrjCCBd_9vFqe7Et_EckWowOTk4zd7-m4jWOwlO0ctjDnbinW0mpFHHBIiKkzpvRya/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
      
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerText = "Thank you for subscribing!"
            setTimeout(function(){
                msg.innerText = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})