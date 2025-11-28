let navLinks = document.querySelectorAll(".nav a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(a => a.classList.remove("active"));
        link.classList.add("active");
    });
});

let imgModal = document.getElementById("imgModal");
let modalImg = document.getElementById("modalImg");
let allImages = document.querySelectorAll(".portfolio img");
let closeModal = document.getElementById("closeModal");

allImages.forEach(img => {
    img.addEventListener("click", () => {
        imgModal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeModal.addEventListener("click", ()=>{
    imgModal.style.display = "none";
});

imgModal.addEventListener("click", (e)=>{
    if(e.target === imgModal){
        imgModal.style.display = "none";
    }
});

let submitForm = document.getElementById("reserveForm");

if(submitForm){
    submitForm.addEventListener("submit" , function(e){
        e.preventDefault();

        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let course = document.getElementById("courseSelect").value;

        let booking = {
            name: name,
            phone: phone,
            email: email,
            course: course
        };

        let allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
        allBookings.push(booking);

        localStorage.setItem("bookings" , JSON.stringify(allBookings));

        alert("تم الحجز بنجاح ✔️");
        submitForm.reset();
    });
}
