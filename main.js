// Booking Form
function openBookingForm(courseName) {
    document.getElementById('bookingFormContainer').style.display = 'block';
    document.getElementById('course').value = courseName;
}
function closeBookingForm() {
    document.getElementById('bookingFormContainer').style.display = 'none';
}

// Handle Booking Form Submit
document.getElementById('bookingForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push({name, phone, email, course});
    localStorage.setItem('bookings', JSON.stringify(bookings));

    alert('تم إرسال الحجز بنجاح!');
    closeBookingForm();
    this.reset();
});

// Portfolio Modal
function openModal(src){
    document.getElementById('portfolioModal').style.display = 'block';
    document.getElementById('modalImage').src = src;
}
function closeModal(){
    document.getElementById('portfolioModal').style.display = 'none';
}

// Contact form
document.getElementById('contactForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح!');
    this.reset();
});
