// ---------Navbar----------
window.addEventListener('scroll', function () {
    document.querySelector('nav').classList.toggle('sticky', window.scrollY > 50);

})

// ---------Navbar-Active-Tabs-on-Scroll-------
let navLinks = document.querySelectorAll('.nav-link')

function navLinkUpdate() {
    let position = window.scrollY + 200;
    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            link.classList.add('active')
        }
        else{
            link.classList.remove('active')
        }
    })
}
window.addEventListener('load', navLinkUpdate);
window.addEventListener('scroll', navLinkUpdate);

// -----------Navbar-Active-State-End---------

// ----------Navbar MediaQueries---------

let menuBtn = document.querySelector('.menu-btn');
let menuUl = document.querySelector('nav ul');

menuBtn.addEventListener('click', function () {
    menuBtn.querySelector('i').classList.toggle('fa-times');
    menuUl.classList.toggle('height');
})

let liAnchorTag = document.querySelectorAll('nav ul li a');
liAnchorTag.forEach(tag => {
    tag.addEventListener('click', function () {
        document.querySelector('nav ul').classList.remove('height');

    });
});

// ---------------Details Dynamic Effect-----------

var savingTimer = setInterval(savings, 1)
var photosTimer = setInterval(photos, 1)
var servedTimer = setInterval(served, 1)
var peopleTimer = setInterval(people, 10)
let num1 = 1;
let num2 = 1;
let num3 = 1;
let num4 = 1;

function savings() {
    num1++
    document.querySelector('.savings').innerHTML = num1 + "$+";
    if (num1 == 1191) {
        clearInterval(savingTimer)
    }
}
function photos() {
    num2++
    document.querySelector('.photos').innerHTML = num2 + "+";
    if (num2 == 1748) {
        clearInterval(photosTimer)
    }
}
function served() {
    num3++
    document.querySelector('.served').innerHTML = num3 + "+";
    if (num3 == 1533) {
        clearInterval(servedTimer)
    }
}
function people() {
    num4++
    document.querySelector('.peoples').innerHTML = num4 + "+";
    if (num4 == 121) {
        clearInterval(peopleTimer)
    }
}

// --------Testimonials-------

let testimonialTimes = setInterval(() => {
    testimonialSlide();
}, 8000);

let testimonials = document.querySelectorAll('.testimonial');

let testiIndex = 1;

function testimonialSlide() {
    if (testiIndex > testimonials.length) {
        testiIndex = 1
    }
    else if (testiIndex == 0) {
        testiIndex = testimonials.length
    }

    testimonials.forEach(testimonial => {
        testimonial.style.display = "none";
    })

    testimonials[testiIndex - 1].classList.add('fade');
    testimonials[testiIndex - 1].style.display = "block";

    testiIndex++

}
testimonialSlide();

// ----------------FAQs-----------

let questions = document.querySelectorAll('.qna');

questions.forEach(question => {
    question.addEventListener('click', function () {
        this.classList.toggle('active');
    })
})
