import 'bootstrap';
import '../signin.html';
import '../scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

// Your jQuery code

$('.view').click(() => {
  alert('This takes user to the referenced error on the form');
});

$('.allow').click(() => {
  alert('This removes the warning');
});

$(function() {
  $('#sidenav').load('sidenav.html');
});

/*$(function() {
  $('#sidenav').on('click', '.nav', function(e) {
    $(this)
      .parents('#sidenav')
      .find('.active')
      .removeClass('active')
      .end()
      .end()
      .addClass('active');
  });
});*/

/*$(function() {
  var url = window.location.href;
  $('#sidenav li').each(function() {
    if (url == this.href) {
      $(this).addClass('active');
    }
  });
});*/

$(function() {
  $('#sidenav a').click(function() {
    $('a').removeClass('active');
    $(this).addClass('active');
  });
});

/*$(function() {
  var current = location.pathname;
  $('#sidenav li').each(function() {
    var $this = $(this);
    // if the current path is like this link, make it active
    if ($this.attr('href').indexOf(current) !== -1) {
      $this.parent().addClass('active');
    }
  });
});*/

