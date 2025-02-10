let main = hh;  // Use `let` for reassignment

// Function to activate a section and deactivate the others
function activateSection(section, event) {
    event.preventDefault();  // Prevent page refresh or link default behavior

    if (main !== section) { // Only proceed if the section is different
        main.classList.add('deactive');  // Deactivate the previous section
        main.classList.remove('activee');  // Remove active state from the old section
        
        section.classList.add('activee');  // Activate the clicked section
        section.classList.remove('deactive');  // Remove deactive state
        
        main = section;  // Update `main` to the newly activated section
    }
}

// Event listeners for each section
home.addEventListener('click', (event) => {
    activateSection(hh, event);  // Activate home
});

edu.addEventListener('click', (event) => {
    activateSection(ee, event);  // Activate education
});

proj.addEventListener('click', (event) => {
    activateSection(pp, event);
});

mail.addEventListener('click', (event) => {
    activateSection(mm, event);
});
const black = document.getElementById('black');
const img = black.querySelector('img');  // Select the image inside the link
let backgrd = 'white';  // Initially, background is white
const card = document.getElementsByClassName('card');
black.addEventListener('click', (event) => {
    event.preventDefault();  // Prevent default action (page refresh)

    if (backgrd === 'white') {
        backgrd = 'black';
        document.body.style.backgroundImage = 'url("../img/bg3_abstract.jpg")';
        main.classList.add('dark');
        img.src = "img/svg/weather.svg";  // Change image source when background is black
        console.log('black');
        
        
        
    } else {
        backgrd = 'white';
        document.body.style.backgroundImage = 'url("../img/bg2_abstract.jpg")';
        main.classList.remove('dark');
        img.src = "img/svg/weather-46.svg";  // Change image source back to original
        console.log('white');
    }
});
