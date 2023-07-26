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





/********** Size Observer **********/
let dropdownbox = document.querySelector('#headermenu');
new ResizeObserver((objects) => {

  for (object of objects) {
    if (object.contentRect.width > 1199) {
      console.log(object.contentRect.width);
      document.querySelector('.headermenu-main').style = "height:auto";
    }
  }

}).observe(dropdownbox)

 