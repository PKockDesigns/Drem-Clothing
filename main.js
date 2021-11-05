//applying splide
new Splide( '.splide' ).mount()
document.addEventListener( 'DOMContentLoaded', function() { //listening for the page to load to execute splide
  var splide = new Splide( '.splide', {
  type         : 'loop', // looping the carousel so it doesn't stop
  autoplay     : 'pause',
  height       : 'auto',
  perPage      : 3, //number of images per slide
  pauseOnHover : true, //autoplay pauses when the cursor is hovering over the images
  resetProgress: false, //the slides don't go back to the first when the clide is moused over
  } );
  splide.mount();
} );

//finding scroll progress for progress ring
document.addEventListener('scroll', () => {//listening for the user to scroll
  var pageScroll = (100*((window.scrollY)/(document.body.scrollHeight))); //calculates how far down the user is on the page in a percentage form
  if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 8)) { //detects if user is at the bottom of the page, corrected for margin 0
    pageScroll = 100;//assume page scroll is 100%
  }
  document.getElementById('progress-ring-values').value = pageScroll;//editing the value of the progress ring in the html
});

//side menus
var menMenu = document.getElementById("menMenu"); //retrieving all four sidemenus
var womenMenu = document.getElementById("womenMenu");
var childrenMenu = document.getElementById("childrenMenu");
var mobileSideMenu = document.getElementById("mobileSideMenu");
function menMenuTranslate() { //setting the function for each side menu to translate
  anime({//sidemenu animation to come in from the side
    targets: '#menMenu',
    translateX: {
      value: "100%",
      duration: 800
    },
  });
  womenMenu.style.transform = 'translate(-155px)'; //other side menus are translated out of viewport
  childrenMenu.style.transform = 'translate(-155px)';
  mobileSideMenu.style.transform = 'translate(-200px)';
}
function womenMenuTranslate() {
  anime({
    targets: '#womenMenu',
    translateX: {
      value: "100%",
      duration: 800
    },
  });
  menMenu.style.transform = 'translate(-155px)';
  childrenMenu.style.transform = 'translate(-155px)';
  mobileSideMenu.style.transform = 'translate(-200px)';
}
function childrenMenuTranslate() {
  anime({
    targets: '#childrenMenu',
    translateX: {
      value: "100%",
      duration: 800
    },
  });
  menMenu.style.transform = 'translate(-155px)';
  womenMenu.style.transform = 'translate(-155px)';
  mobileSideMenu.style.transform = 'translate(-200px)';
}
function sideMenuTranslate() {
  anime({
    targets: '#mobileSideMenu',
    translateX: {
      value: "100%",
      duration: 800
    },
  });
  menMenu.style.transform = 'translate(-155px)';
  womenMenu.style.transform = 'translate(-155px)';
  childrenMenu.style.transform = 'translate(-155px)';
}

//scroll to sections
//men
var menCoats = document.getElementById("menCoats");//retrieves the ids of the images as anchors to scroll to
var menShirts = document.getElementById("menShirts");
var menSuits = document.getElementById("menSuits");
var menTrousers = document.getElementById("menTrousers");
var menShoes = document.getElementById("menShoes");
function menuHide(){
  childrenMenu.style.transform = 'translate(-100%)'; //translates side menus out of viewport
  menMenu.style.transform = 'translate(-100%)';
  womenMenu.style.transform = 'translate(-100%)';
  mobileSideMenu.style.transform = 'translate(0%)';
}
function scrollMenCoats() {
  menuHide(this);
  menCoats.scrollIntoView(); //scrolls approriate element into view
}
function scrollMenShirts() {
  menuHide(this);
  menShirts.scrollIntoView();
}
function scrollMenSuits() {
  menuHide(this);
  menSuits.scrollIntoView();
}
function scrollMenTrousers() {
  menuHide(this);
  menTrousers.scrollIntoView();
}
function scrollMenShoes() {
  menuHide(this);
  menShoes.scrollIntoView();
}
//women
var womenCoats = document.getElementById("womensCoats");
var womenShirts = document.getElementById("womensShirts");
var womenSuits = document.getElementById("womensSuits");
var womenTrousers = document.getElementById("womensTrousers");
var womenShoes = document.getElementById("womensShoes");
function scrollWomenCoats() {
  menuHide(this);
  womenCoats.scrollIntoView();
}
function scrollWomenShirts() {
  menuHide(this);
  womenShirts.scrollIntoView();
}
function scrollWomenSuits() {
  menuHide(this);
  womenSuits.scrollIntoView();
}
function scrollWomenTrousers() {
  menuHide(this);
  womenTrousers.scrollIntoView();
}
function scrollWomenShoes() {
  menuHide(this);
  womenShoes.scrollIntoView();
}
//children
var childrenCoats = document.getElementById("childrensCoats");
var childrenShirts = document.getElementById("childrensShirts");
var childrenSuits = document.getElementById("childrensSuits");
var childrenTrousers = document.getElementById("childrensTrousers");
var childrenShoes = document.getElementById("childrensShoes");
function scrollChildrenCoats() {
  menuHide(this);
  childrenCoats.scrollIntoView();
}
function scrollChildrenShirts() {
  menuHide(this);
  childrenShirts.scrollIntoView();
}
function scrollChildrenSuits() {
  menuHide(this);
  childrenSuits.scrollIntoView();
}
function scrollChildrenTrousers() {
  menuHide(this);
  childrenTrousers.scrollIntoView();
}
function scrollChildrenShoes() {
  menuHide(this);
  childrenShoes.scrollIntoView();
}

//scroll interactions
gsap.registerPlugin(ScrollTrigger); //enabling scroll interaction with scroll trigger

//animating the images on screen with a scrolltrigger
//left column
gsap.to("#menCoats", { //extremely repetitive code just to bring the images in from the side
  scrollTrigger: "#menCoats",
  x: "235%",
  duration: 1
})
gsap.to("#menShirts", {
  scrollTrigger: "#menShirts",
  x: "235%",
  duration: 1
})
gsap.to("#menSuits", {
  scrollTrigger: "#menSuits",
  x: "235%",
  duration: 1
})
gsap.to("#menTrousers", {
  scrollTrigger: "#menTrousers",
  x: "235%",
  duration: 1
})
gsap.to("#menShoes", {
  scrollTrigger: "#menShoes",
  x: "235%",
  duration: 1
})
gsap.to("#childrensCoats", {
  scrollTrigger: "#childrensCoats",
  x: "235%",
  duration: 1
})
gsap.to("#childrensShirts", {
  scrollTrigger: "#childrensShirts",
  x: "235%",
  duration: 1
})
gsap.to("#childrensSuits", {
  scrollTrigger: "#childrensSuits",
  x: "235%",
  duration: 1
})
gsap.to("#childrensTrousers", {
  scrollTrigger: "#childrensTrousers",
  x: "235%",
  duration: 1
})
gsap.to("#childrensShoes", {
  scrollTrigger: "#childrensShoes",
  x: "235%",
  duration: 1
})
//right column
gsap.to("#womensCoats", {
  scrollTrigger: "#womensCoats",
  x: "-170%",
  duration: 1
})
gsap.to("#womensShirts", {
  scrollTrigger: "#womensShirts",
  x: "-170%",
  duration: 1
})
gsap.to("#womensSuits", {
  scrollTrigger: "#womensSuits",
  x: "-170%",
  duration: 1
})
gsap.to("#womensTrousers", {
  scrollTrigger: "#womensTrousers",
  x: "-170%",
  duration: 1
})
gsap.to("#womensShoes", {
  scrollTrigger: "#womensShoes",
  x: "-170%",
  duration: 1
})
