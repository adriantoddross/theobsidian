const url2 = $(location).attr("href");

$(function(){

  if (url2.includes('category=')) {
    return;
  } else if (url2.includes('en')) {
    return;
  }
  else if (url2.includes('?q')) {
    return;
  }
  else if (url2.includes('?boundingbox')) {
    return;
  }
  else {
    $('.coverimage').remove();
    $('.page-content').remove();
    
    $('.marketplace-lander').after(
      $('<div/>',{ "class": "coverpage-container"})                 
    );
    
    // Create containers
    var coverphoto = '<div class="coverphoto-container">' +
        '<img class="coverphoto"/>' +
        '<div class="cover-msg">'+
        '<p class="cover-title">A marketplace featuring <br/><span class="cover-tagline">artisans of color.</span></p >' +
        '<p class="cover-desc">Most major marketplaces do not cater to us, highlighting our unique offerings. In all fairness, that\'s not their job.</p>' +
        '</div>' + '</div>';
    
    $('.coverpage-container').append(coverphoto);

    var buyercontent = '<div class="buyers-container">' +
        '<div class="buyer-examples">' +
        '<img class="buyer-image1" src="https://res.cloudinary.com/adriantoddross/image/upload/v1551492852/accessory-art-blue-994524.jpg" alt="null"/>' +
        '<img class="buyer-image2" src="https://res.cloudinary.com/adriantoddross/image/upload/v1551492858/arts-and-crafts-bobbin-buttons-1232131.jpg" alt="null"/>' +
        '</div>' +
        '<div class="buyer-content">' +
        '<p class="buyer-title"><span class="boldtitle">Our unique offerings span the diasporas of all people of color. </span>' +
        'Supporting makers on The Obsidian is an investment in the sustained creativity of these communities.</p>' +
        '<div class="clickbuybtn">' +
        '<button class="buyerbutton">BUY</button>' +
        '</div>' +
        '</div>' +
        '</div>';

    var sellercontent = '<div class="sellers-container">' +
        '<div class="seller-examples">' +
        '<img class="seller-image1" src="https://res.cloudinary.com/adriantoddross/image/upload/v1551492860/adult-art-blue-312591.jpg" alt="null"/>' +
        '<img class="seller-image2" src="https://res.cloudinary.com/adriantoddross/image/upload/v1551492861/action-adult-blur-355155.jpg" alt="null"/>' +
        '</div>' +
        '<div class="seller-content">' +
        '<p><span class="boldtitle">Our categories will always be curated and hand-picked, </span>' +
        'so your work will always stand out, while in good company.</p>' +
        '<div class="clicksellbtn">' +
        '<button class="sellerbutton">SELL</button>' +
        '</div>' +
        '</div>' +
        '</div>';

    $('.coverpage-container').append(buyercontent, [sellercontent]);

    $(".clickbuybtn").click(function(e){
      e.preventDefault();
      window.location = "https://the-obsidian.sharetribe.com/?category=all";
    });

    $(".clicksellbtn").click(function(e){
      e.preventDefault();
      window.location = "https://the-obsidian.sharetribe.com/en/signup";
    });
  }
            
});