// Select DOM Items

const menuBtn= document.querySelector('.menu-btn');
const menu= document.querySelector('.menu');
const menuNav= document.querySelector('.menu-nav');
const menuBranding= document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

const projectItems = document.querySelectorAll('item');

//Set Initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        
        showMenu = false;
    }
};


//Fucntion toggleproject
let showProject = false;

function toggleProject(){
    projectItems.classList.add('show');
};

function flip(event){
	var element = event.currentTarget;
	if (element.className === "imgItem") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};