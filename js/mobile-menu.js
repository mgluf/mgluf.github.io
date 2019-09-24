let body = document.body;
let navMobile = document.getElementsByClassName('navMobile');
let navigationMobile = document.getElementsByClassName('navigationMobile');
let navigation = document.getElementsByClassName('navigation');
let content = document.getElementsByClassName('content');
let closeMobileNav = document.getElementsByClassName('closeMobileNav');

navMobile[0].addEventListener('click', mobileMenuOn);

function mobileMenuOn(event){

  for (var i = 0 ; i < navMobile.length; i++) {
   navigationMobile[i].classList.replace('hide','show');}
  for (var i = 0 ; i < navigation.length; i++) {
  navigation[i].classList.replace('show','hide');}
  for (var i = 0 ; i < content.length; i++) {
  content[i].classList.replace('show','hide');}

  body.classList.replace('scroll','noscroll' )

}

closeMobileNav[0].addEventListener('click', mobileMenuOff);

function mobileMenuOff(event){
  for (var i = 0 ; i < navMobile.length; i++) {
   navigationMobile[i].classList.replace('show','hide');}
  for (var i = 0 ; i < navigation.length; i++) {
  navigation[i].classList.replace('hide','show');}
  for (var i = 0 ; i < content.length; i++) {
  content[i].classList.replace('hide','show');}

  body.classList.replace('noscroll','scroll' )
}
