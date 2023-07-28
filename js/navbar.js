/********** Primary Dropdown With Hamberger **********/
let toggleMenu = document.querySelector('.menu-toggle');
toggleMenu.addEventListener('click', (e) => {
  if (e.currentTarget.dataset.hamberger === "closed") {
    e.currentTarget.dataset.hamberger = 'open';
    document.querySelector('.page-header .burger span:nth-child(1)').style = "top:8px;transform:rotate(135deg);";
    document.querySelector('.page-header .burger span:nth-child(2)').style = "left:-10px;opacity:0";
    document.querySelector('.page-header .burger span:nth-child(3)').style = "top:8px;transform:rotate(-135deg);";

    document.querySelector('.headermenu-main').style = "height:100vh";
  } else {
    e.currentTarget.dataset.hamberger = 'closed';
    document.querySelector('.page-header .burger span:nth-child(1)').style = "top:0px;transform:rotate(0deg);";
    document.querySelector('.page-header .burger span:nth-child(2)').style = "left:0;opacity:1";
    document.querySelector('.page-header .burger span:nth-child(3)').style = "top:16px;transform:rotate(0deg);";

    document.querySelector('.headermenu-main').style = "height:0vh";
  }
  console.log(e.currentTarget.dataset.hamberger === "closed");
});
/********** Primary Dropdown With Hamberger **********/




let dropdownbox = document.querySelector('#headermenu');
new ResizeObserver((objects) => {

  for (object of objects) {
    if (object.contentRect.width > 1199) {
      console.log(object.contentRect.width);
      document.querySelector('.headermenu-main').style = "height:auto";
    }
  }

}).observe(dropdownbox)
/********** Size Observer **********/




/****************** Mobile Click Dropdown active ************/
// let firstMenu = document.querySelector('#menu-item-111');
// let firstMenuAnchor = document.querySelector('#menu-item-111 .primary-links');
// let firstMenuArrow = document.querySelector('#menu-item-111 .primary-links:after');
// let firstMenuSubdrop = document.querySelector('#menu-item-111 .submenu-container');

// firstMenu.addEventListener('click',()=>{

//   firstMenu.classList.add("primary-bg-active");
//   firstMenuAnchor.classList.add("primary-link-color"); 
//   firstMenuSubdrop.classList.add("primary-dropdown-display");
//   //firstMenuArrow.style("transform:rotate(0deg);");
//   console.log('primary');

// });



let primaryMenu = document.querySelectorAll('.primary-menu');
let primaryTrigger;
let submenu;
primaryMenu.forEach((element, index) => {

  primaryTrigger = element.querySelector('.primary-links');
  submenu = element.querySelector('.submenu-container');
  primaryTrigger.addEventListener('click', () => {
    if (element.classList.contains("primary-bg-active")) {
      element.classList.remove("primary-bg-active");
      element.querySelector('a.primary-links').classList.remove("primary-link-color");
      element.querySelector('div.submenu-container').classList.remove("primary-dropdown-display");
    } else {
      element.classList.add("primary-bg-active");
      element.querySelector('a.primary-links').classList.add("primary-link-color");
      element.querySelector('div.submenu-container').classList.add("primary-dropdown-display");
    }



  })

});



/****************** Mobile Click Dropdown active ************/