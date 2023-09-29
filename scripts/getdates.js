// set current year in footer

const currentDate = new Date();

document.querySelector('#year').textContent = currentDate.getFullYear();

document.querySelector('#LastModified').textContent = document.lastModified;


// alert(document.lastModified);


/** const today1 = document.querySelector('#today1');

today1.innerHTML = new Date().toLocaleDateString("en-US", options);**/