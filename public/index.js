const myForm = document.getElementById('myForm');

  myForm.addEventListener('submit', function(event) {
    console.log("from kaam kar rah hai");
    event.preventDefault(); // prevent the form from submitting normally
    const formData = new FormData(myForm); // create a FormData object from the form
    const formDataObject = Object.fromEntries(formData.entries()); // convert the FormData object to a plain JavaScript object
    console.log(formDataObject); // log the object to the console for testing
    // Do whatever you want with the formDataObject here, such as sending it to a server or processing it in some way.
  
    
  });
  module.exports = formDataObject;

  