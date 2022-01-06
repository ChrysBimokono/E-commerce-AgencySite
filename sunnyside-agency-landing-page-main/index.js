var nav= document.getElementById('primary-navigation');
var buttonToggle= document.getElementsByClassName('mobile-nav-toggle')[0];
var headerT=document.getElementsByClassName('header-text')[0];
var arrow= document.getElementsByClassName('arrow')[0];
console.log(headerT)
console.log(buttonToggle);
buttonToggle.addEventListener('click',()=>{
    console.log('clicked')
    var visibility= nav.getAttribute('data-visible');
    console.log(visibility)
    if(visibility === 'false'){
        nav.setAttribute('data-visible', true);
        nav.setAttribute('aria-expanded',true);
        nav.style.transform= 'none';
        headerT.style.display='none';
        arrow.style.display='none'
    } else {
        nav.setAttribute('data-visible', false);
        nav.setAttribute('aria-expanded',false);
        nav.style.transform= 'translatex(300%) rotate(360deg) scale(2)';
        nav.style.transition= '2s ease-in-out';
        arrow.style.transition= '2s ease-in-out'
        headerT.style.display='block'
        arrow.style.display='block'
    }
})