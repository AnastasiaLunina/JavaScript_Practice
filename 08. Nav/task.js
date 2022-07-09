const menuItem = Array.from(document.getElementsByClassName('menu__item'));
const menuLink = Array.from(document.getElementsByClassName('menu__link'));


function navMenu() { 
    for (let i = 0; i < menuLink.length; i++) {
        menuLink[i].onclick = (event) => {
            const closestItem = menuLink[i].closest(".menu__item");
            const dropDown = closestItem.querySelector(".menu_sub");
            
            dropDown.classList.toggle("menu_active");
            event.preventDefault();
            };
        }
   }

   navMenu();
