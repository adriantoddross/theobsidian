$(function(){

  $('.branding-content').remove();

  
  if ($(".home-no-listings")[0]) {
    
    return; // do nothing to prevent CSS glitch.
  } else {
    // Create the footer
  
    // Create links for categories
    const categoryLinks = [
      {
        name: 'Home Decor',
        link: 'https://the-obsidian.sharetribe.com/?category=home'
      },
      {
        name: 'Books',
        link: 'https://the-obsidian.sharetribe.com/?category=books'
      },
      {
        name: 'Tech',
        link: 'https://the-obsidian.sharetribe.com/?category=tech'
      },
      {
        name: 'Music and Movies',
        link: 'https://the-obsidian.sharetribe.com/?category=music-and-movies'
      },
      {
        name: 'Clothing',
        link: 'https://the-obsidian.sharetribe.com/?category=clothing-and-shoes'
      },
      {
        name: 'Accessories',
        link: 'https://the-obsidian.sharetribe.com/?category=accessories'
      },
      {
        name: 'Health & Beauty',
        link: 'https://the-obsidian.sharetribe.com/?category=health-and-beauty'
      },
      {
        name: 'Art & Collectibles',
        link: 'https://the-obsidian.sharetribe.com/?category=visual-art-and-collectibles'},
      {
        name: 'Vintage & Black Nostalgia',
        link: 'https://the-obsidian.sharetribe.com/?category=vintage-and-black-nostalgia'
      },
      {
        name: 'Craft Supplies & Tools',
        link: 'https://the-obsidian.sharetribe.com/?category=craft-supplies-and-tools'
      },
      {
        name: 'Spiritual & Personal',
        link: 'https://the-obsidian.sharetribe.com/?category=spiritual-and-personal-development'
      },
    ];

    const infoLinks = [
      {
        name: 'About',
        link: 'https://the-obsidian.sharetribe.com/en/infos/about'
      },
      {
        name: 'Contact Us',
        link: 'https://the-obsidian.sharetribe.com/en/user_feedbacks/new'
      },
      {
        name: 'Privacy Policy',
        link: 'https://the-obsidian.sharetribe.com/en/infos/privacy'
      },
      {
        name: 'Terms Of Use',
        link: 'https://the-obsidian.sharetribe.com/en/infos/terms'
      }
    ];

    $('.page-content').after( $('<div/>',{ "class": "footer-container"}) );


    $('.footer-container').append([
      $('<div/>',{ "class": "categories-container2"})
        .append( $('<ul/>',{ "class": "categories2"})
        )
    ]);

    $('.footer-container').append([
      $('<div/>',{ "class": "contact-container"})
        .append( $('<ul/>',{ "class": "contact"})
        )
    ]);

    // $('.footer-container').append(
    //   $('<div/>',{ "class": "social-container"})
    //     .append('<a class="category-link" href="https://the-obsidian.sharetribe.com/?big_cover_photo=true" target="blank" rel="noopener noreferrer"><i class="socialicon fab fa-facebook-square"/></a>', [
    //       '<a class="category-link" href="https://the-obsidian.sharetribe.com/?big_cover_photo=true" target="blank" rel="noopener noreferrer"><i class="socialicon fab fa-instagram"/></a>',
    //       '<a class="category-link" href="https://the-obsidian.sharetribe.com/?big_cover_photo=true" target="blank" rel="noopener noreferrer"><i class="socialicon fab fa-twitter-square"/></a>'
    //     ])
    // );

    $.each(categoryLinks, function(index, props) {
      $('.categories2')
        .append( $('<li class="category-item"></li>')
          .append('<a class="category-link" href="'+ props.link +'" target="blank" rel="noopener noreferrer">'+ props.name +'</a>')
        );
    });

    $.each(infoLinks, function(index, props) {
      $('.contact')
        .append( $('<li class="contact-item"></li>')
          .append('<a class="contact-link" href="'+ props.link +'" target="blank" rel="noopener noreferrer">'+ props.name +'</a>')
        );
    });

  }

  

});