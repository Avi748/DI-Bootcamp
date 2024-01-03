const submit = document.querySelector('#submit');
submit.addEventListener("click", retrieveData = function(e) {
    e.preventDefault();
    const data = new FormData(document.querySelector('form'));
    const entries = data.entries();
    const dataObj = Object.fromEntries(entries);
    console.log(dataObj);

    const jsonData = JSON.stringify(dataObj);
    console.log(jsonData);
});
