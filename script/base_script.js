$(function(){
  $(".article_navigation li span").each(function(i, elem) {
    $(this).on("click", function(){
      var target = $(this).attr("data-target");
      article_switch(target);
    });
  });

  function article_switch( target ) {
    $("main article").hide();
    $("#"+target).show();
  }
});
