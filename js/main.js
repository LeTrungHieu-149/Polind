//preloader
function hideLoader() {
  document.querySelector(".loader").style.display="none";
};

function fade(callback) {
  document.querySelector(".loader").style.opacity="0";
  setTimeout(callback,1000);
}

window.onload=setTimeout(fade,2000,hideLoader);

//mobile menu and search-box
var menu=document.querySelector(".header__menu");
var body=document.getElementsByTagName("body")[0];
var headerTop=document.querySelector(".header__top");
var menuButton=document.querySelector(".menu__button");
var menuSearchButton=document.querySelector(".menu__search-button");
var searchBar=document.querySelector(".menu__search-bar");

menuSearchButton.addEventListener("click",function(){
  menuSearchButton.classList.toggle("open");
  searchBar.classList.toggle("search-bar-appear");
})

menuButton.addEventListener("click",function(){
  menuButton.classList.toggle("open");
  menu.classList.toggle("appear");
  body.classList.toggle("no-scroll");
})
//scroll down hide menu
var prevScrollPos = window.pageYOffset;

function debounce(f,wait){
  let timeOut=null;

  return function(){
    let args=arguments;
    let context=this;

    function later(){
      f.apply(context,args);
      clearTimeout(timeOut);
    }

    if(timeOut) {
      clearTimeout(timeOut);
      timeOut=setTimeout(later,wait);
    }
    else {
      timeOut=setTimeout(later,wait);
    }
  }
}
window.addEventListener("scroll",debounce(scrollFunction,20)); 

function scrollFunction() {
  if (window.pageYOffset > 105) {
    headerTop.classList.add("black-bg");
    headerTop.classList.add("shrink-top");
  } else {
    headerTop.classList.remove("black-bg")
    headerTop.classList.remove("shrink-top");
  }

  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos>prevScrollPos && prevScrollPos>300) {
    headerTop.style.top = "-105px";
  } else {
    headerTop.style.top = "0";
  }
  prevScrollPos = currentScrollPos;
  
  if(document.body.scrollTop>120 || document.documentElement.scrollTop>120) {
    this.scrollButton.style.display="block";
  }
  else this.scrollButton.style.display="none";
  
  var pendingElement=document.querySelectorAll(".pending");
  pendingElement.forEach(function(value){
    if(value.className.includes("to-top")){
      if(value.getBoundingClientRect().top-650<=0) value.classList.add("reveal");
    }
    else if(value.getBoundingClientRect().top-500<=0) value.classList.add("reveal");
    else return;
  })
}

//click out of menu mobile, hide menu
window.addEventListener("click",function(event){
  if(!event.target.classList.contains("header__menu") && menu.classList.contains("appear") 
  && !event.target.classList.contains("menu__button") && !event.target.parentNode.classList.contains("menu__button")) {
    menu.classList.toggle("appear");
    menuButton.classList.toggle("open");
    body.classList.toggle("no-scroll");
  }
})

//scroll to top
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var scrollButton = document.querySelector(".scroll-to-top");
scrollButton.addEventListener("click",scrollToTop);

document.querySelector(".own-1").ownCarousel({
  itemPerRow:5, 
  itemWidth:19,
  responsive: {
      1000: [4, 24],
      800: [3, 32],
      600: [2, 49],
      400: [1, 100]
  },
});

handleResize();