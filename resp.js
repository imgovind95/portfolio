burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.nav-list')
burger.addEventlistener('click',()=>{
    rightnav.classlist.toggle('v-class-resp');
    nav-list.classlist.toggle('v-class-resp');
    navbar.classlist.toggle('h-nav-resp');
})