/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, mainId) =>{
    const toggle = document.getElementById(toggleId),
    sidebar = document.getElementById(sidebarId),
    main = document.getElementById(mainId)
 
    if(toggle && sidebar && main){
        toggle.addEventListener('click', ()=>{
            /* Show sidebar */
            sidebar.classList.toggle('show-sidebar')
            /* Add padding main */
            main.classList.toggle('main-pd')
        })
    }
 }
 showSidebar('header-toggle','sidebar', 'main')
 
 /*=============== LINK ACTIVE ===============*/
 const sidebarLink = document.querySelectorAll('.sidebar__link')
 
 function linkColor(){
     sidebarLink.forEach(l => l.classList.remove('active-link'))
     this.classList.add('active-link')
 }
 
 sidebarLink.forEach(l => l.addEventListener('click', linkColor))

 const buttonContainer = document.querySelector('.button-container');
const buttons = buttonContainer.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Perform actions based on the selected view
    const view = button.getAttribute('data-view');
    console.log(`Selected view: ${view}`);
  });
});

