//TASK 1
document.getElementById('linkToShowAlert').addEventListener('click',function(){

    alert("You Clicked On this link");
});

//TASK 2
let mobileImages=document.getElementsByClassName('mobileImage');
for(var i=0; i<mobileImages.length;i++){
    mobileImages[i].addEventListener('click',function() {
        var imgName = this.alt;
        alert("Thanks for purchasing a phone from us")
        
    })
}

//TASK 3
var students = [
    { id: 1, name: 'John Doe', age: 20, grade: 'A' },
    { id: 2, name: 'Jane Doe', age: 22, grade: 'B' },
    { id: 3, name: 'Jane Doe', age: 22, grade: 'C' },
    { id: 4, name: 'Jane Doe', age: 19, grade: 'W' },
    { id: 5, name: 'Jane Doe', age: 24, grade: 'A' },
    { id: 6, name: 'Jane Doe', age: 22, grade: 'A' },
    { id: 7, name: 'Jane Doe', age: 24, grade: 'D' },
    { id: 8, name: 'Jane Doe', age: 26, grade: 'F' },
    { id: 9, name: 'Jane Doe', age: 27, grade: 'B' },
    { id: 10, name: 'Jane Doe', age: 22, grade: 'B' },

    // Add more students as needed
];

var tableBody = document.querySelector('#studentTable tbody');

// Display student records in the table
students.forEach(function(student) {
    var row = tableBody.insertRow();
    row.insertCell(0).innerText = student.id;
    row.insertCell(1).innerText = student.name;
    row.insertCell(2).innerText = student.age;
    row.insertCell(3).innerText = student.grade;

    // Add delete button to each row
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
        // Delete the corresponding row
        row.remove();
    });

    row.insertCell(4).appendChild(deleteButton);
});




    // Task 4: Image change on mouseover using event listeners
    var imageElement = document.getElementById('imageToChange');

    // Function to change the image on mouseover
    function changeImage() {
        imageElement.src = "CAR 2.jpg";
    }

    // Function to reset the image on mouseout
    function resetImage() {
        imageElement.src = 'CAR1.jpg';
    }

    // Attach event listeners to the image
    imageElement.addEventListener('mouseover', changeImage);
    imageElement.addEventListener('mouseout', resetImage);



       // Task 5: Counter with increase and decrease buttons using events
       var counterValue = 0; // Initial counter value
       var counterElement = document.getElementById('counter');
   
       // Function to update the counter value in the browser
       function updateCounter() {
           counterElement.innerText = counterValue;
       }
   
       // Function to increase the counter value
       function increaseCounter() {
           counterValue++;
           updateCounter();
       }
   
       // Function to decrease the counter value
       function decreaseCounter() {
           counterValue--;
           updateCounter();
       }
   
       // Attach event listeners to the buttons
       document.getElementById('increaseBtn').addEventListener('click', increaseCounter);
       document.getElementById('decreaseBtn').addEventListener('click', decreaseCounter);
   