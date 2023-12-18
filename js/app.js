// Toggle dropdown menu for mobile view
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
});


// This assumes you have Bootstrap JS included

// Enable Bootstrap's collapse plugin
var myCollapse = document.getElementById('customNav');
var bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false // Change to true for allowing toggling the collapse state
});

// Toggler button click event
var myToggler = document.querySelector('.custom-toggler');
myToggler.addEventListener('click', function () {
  bsCollapse.toggle();
});

// Close the collapse menu on clicking outside when it's open
document.addEventListener('click', function (event) {
  if (!myCollapse.contains(event.target) && bsCollapse._isShown) {
    bsCollapse.hide();
  }
});
