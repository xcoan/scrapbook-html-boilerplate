$(function() {
  var visible = false;
  $('#menuicon').click(function() {
    if (visible) {
      $('#menuicon').toggleClass('fa-times fa-bars');
      console.log("newhit");
      $('#menu').css({'display':'none'});
      visible = false;
      return;
    }
    $('#menuicon').toggleClass('fa-bars fa-times');
    console.log('hit');
    $('#menu').css({'display':'block'});
    visible = true;
  });
});
