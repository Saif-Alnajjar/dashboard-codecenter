function saveData(){
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let course = document.getElementById("course").value;

  if(name == "" || phone == "" || email == ""){
    alert("Please fill all fields");
    return;
  }

  let booking = {
    name: name,
    phone: phone,
    email: email,
    course: course
  }

  let old = localStorage.getItem("bookings");
  let arr = [];

  if(old){
    arr = JSON.parse(old);
  }

  arr.push(booking);
  localStorage.setItem("bookings", JSON.stringify(arr));

  alert("Booking submitted successfully!");
}
