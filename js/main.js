$(window).on('scroll', function () {
  var scrollPosition = $(document).scrollTop();

  $('.confetti > *').each(function () {
    if ($(this).hasClass("parallax-immediate")) {
      var relativeScroll = scrollPosition;
    } else {
      var relativeScroll = scrollPosition - ($(this).offset().top - 300);
    }

    $(this).css('transform', 'translate3d(0, ' + relativeScroll * -0.3 + 'px, 0)');
  });
});



// for portfolio item filtering by tag
function filter(tag) {
  setActiveTag(tag);
  showContainer(tag);
}

function viewAll() {
  
  // set all tag to active
  var allFilter = document.getElementById("all-tag");
  allFilter.setAttribute('class', 'active');

  // loop through all tag items and remove active class
  var items = document.getElementsByClassName('blog-tag-item');
  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('class', 'blog-tag-item');
  }

  // view container that has everything listed
  var allItems = document.getElementById("all-items");
  allItems.setAttribute('class', '');

  // loop through all lists and hide them
  var lists = document.getElementsByClassName('blog-list-container');
  for (var i = 0; i < lists.length; i++) {
    lists[i].setAttribute('class', 'blog-list-container hidden');
  }
  
}

function setActiveTag(tag) {
  // loop through all items and remove active class
  var items = document.getElementsByClassName('blog-tag-item');
  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('class', 'blog-tag-item');
  }

  // remove active class from all filter
  var allFilter = document.getElementById("all-tag");
  allFilter.setAttribute('class', '');

  // hide all items container
  var allItems = document.getElementById("all-items");
  allItems.setAttribute('class', 'hidden');

  // set the selected tag's item to active
  var item = document.getElementById(tag + '-item');
  if (item) {
    item.setAttribute('class', 'blog-tag-item active');
  }
}

function showContainer(tag) {
  // loop through all lists and hide them
  var lists = document.getElementsByClassName('blog-list-container');
  for (var i = 0; i < lists.length; i++) {
    lists[i].setAttribute('class', 'blog-list-container hidden');
  }

  // remove the hidden class from the list corresponding to the selected tag
  var list = document.getElementById(tag + '-container');
  if (list) {
    list.setAttribute('class', 'blog-list-container');
  }
}
