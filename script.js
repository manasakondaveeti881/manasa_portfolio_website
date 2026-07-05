fetch("https://personal-portfolio-website-s8yu.onrender.com/projects")
.then((response) => response.json())
.then((data) => {

    const container = document.getElementById("projects-container");

    container.innerHTML = "";

    data.forEach((project) => {

        let image = "";

if (project.title.trim() === "Hotel Management System") {
    image = "images/hotel.png";
}

if (project.title.trim() === "Personal Portfolio") {
    image = "images/portfolio1.png";
}
console.log(image);
console.log(project.title);
container.innerHTML += `
<div class="project-card">

    <img src="${image}" class="project-img">

    <h3>${project.title}</h3>

    <p>${project.description}</p>

    <p><b>Technologies:</b> ${project.technologies}</p>

    <a href="${project.github_link}" target="_blank">
        View Project
    </a>

</div>
`;
    });

})
.catch((error) => {
    console.log(error);
});
// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch("https://personal-portfolio-website-s8yu.onrender.com/contact", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email,
            message
        })

    })

    .then(res => res.text())

    .then(data => {

        alert(data);

        contactForm.reset();

    })

    .catch(err => console.log(err));

});
window.onload = function () {
    new Typed("#typing", {
        strings: [
            "a Full Stack Developer",
            "a Web Designer",
            "a CSE Student",
            "a Problem Solver"
        ],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });
};
ScrollReveal().reveal('.hero', {
    distance: '60px',
    duration: 1200,
    origin: 'top'
});

ScrollReveal().reveal('.about', {
    distance: '60px',
    duration: 1200,
    origin: 'left'
});

ScrollReveal().reveal('.skills', {
    distance: '60px',
    duration: 1200,
    origin: 'right'
});

ScrollReveal().reveal('.projects', {
    distance: '60px',
    duration: 1200,
    origin: 'bottom'
});

ScrollReveal().reveal('.contact', {
    distance: '60px',
    duration: 1200,
    origin: 'bottom'
});
ScrollReveal().reveal('.education', {
    distance:'60px',
    duration:1200,
    origin:'left'
});