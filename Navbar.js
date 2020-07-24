function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

const browserWidth = getWidth();
const url1 = window.location.href;

$(function () {
  /*
    Create Navbar
  */

  // Links for categories
  const categoryLinks = [
    {
      name: "Home Decor",
      link: "https://the-obsidian.sharetribe.com/?category=home",
    },
    {
      name: "Books",
      link: "https://the-obsidian.sharetribe.com/?category=books",
    },
    {
      name: "Tech",
      link: "https://the-obsidian.sharetribe.com/?category=tech",
    },
    {
      name: "Music and Movies",
      link: "https://the-obsidian.sharetribe.com/?category=music-and-movies",
    },
    {
      name: "Clothing",
      link: "https://the-obsidian.sharetribe.com/?category=clothing-and-shoes",
    },
    {
      name: "Accessories",
      link: "https://the-obsidian.sharetribe.com/?category=accessories",
    },
    {
      name: "Health & Beauty",
      link: "https://the-obsidian.sharetribe.com/?category=health-and-beauty",
    },
    {
      name: "Art & Collectibles",
      link:
        "https://the-obsidian.sharetribe.com/?category=visual-art-and-collectibles",
    },
    {
      name: "Vintage & Black Nostalgia",
      link:
        "https://the-obsidian.sharetribe.com/?category=vintage-and-black-nostalgia",
    },
    {
      name: "Craft Supplies & Tools",
      link:
        "https://the-obsidian.sharetribe.com/?category=craft-supplies-and-tools",
    },
    {
      name: "Spiritual & Personal",
      link:
        "https://the-obsidian.sharetribe.com/?category=spiritual-and-personal-development",
    },
  ];

  $(".Topbar").after([
    $("<div/>", { class: "categories-container" }).append(
      $("<ul/>", { class: "categories" })
    ),
  ]);

  $.each(categoryLinks, function (index, props) {
    $(".categories").append(
      $('<li class="category-item"></li>').append(
        '<a class="category-link" href="' +
          props.link +
          '" target="blank" rel="noopener noreferrer">' +
          props.name +
          "</a>"
      )
    );
  });

  // Change placeholder text for searchbar!
  $("#topbar-container input:first-of-type").attr(
    "placeholder",
    "I'm looking for..."
  );

  $(".MenuMobile").after(
    $("<div/>", { class: "login-container" }).append(
      $("<button>LOG IN</button>", { class: "login-button" })
    )
  );

  $(".login-container").click(function (e) {
    e.preventDefault();
    window.location = "https://the-obsidian.sharetribe.com/en/login";
  });

  if (browserWidth > 768 && url1.includes("category=")) {
    // Add category class, change logo image
    $("#topbar-container").addClass("category-page");
    $(".Logo img").attr(
      "src",
      "https://res.cloudinary.com/adriantoddross/image/upload/v1550194310/TheObsidian.png"
    );
  }
});
