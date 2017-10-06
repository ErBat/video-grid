//modal management
$(document).ready(function() {
  //local variables
  var modalIframe = $("#video-modal .video-frame iframe");
  var modalTitle = $("#video-modal .video-description .modal-video-title");
  var modalText = $("#video-modal .video-description .modal-video-description");

  //sending all the info to the modal
  function vidInfoSender(that){
    var url = "https://www.youtube.com/embed/" + that.attr("video-url").replace("https://www.youtube.com/watch?v=", "");;
    var title = that.attr("video-title");
    var text = that.attr("video-description");
    if ( modalIframe.length ) {
      modalIframe.attr('src',url);
      modalTitle.html(title);
      modalText.html(text);
    }
  }

  $(".btn-modal-video").click(function(){
    var that = $(this);
    vidInfoSender(that);
  });

  $("#video-modal .closebtn").click(function(){
    var that = $(this);
    vidInfoSender(that)
  });

});
