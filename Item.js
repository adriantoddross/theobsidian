$(function(){ 

  $(".fluid-thumbnail-grid-image-title").each(function() {
    const itemTitle = $(this).clone();
    $(this).closest(".fluid-thumbnail-grid-image-image-container").find(".fluid-thumbnail-grid-image-price-container").append(itemTitle);
    this.remove();
  });

});