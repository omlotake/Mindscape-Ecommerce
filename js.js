var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';

function menutoggle() {
  if (MenuItems.style.maxHeight == '0px') {
    MenuItems.style.maxHeight = '200px';
  } else {
    MenuItems.style.maxHeight = '0px';
  }
}
// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
  
  // Function to handle hover effect on navigation links
  function handleNavHover() {
    const navLinks = document.querySelectorAll("li a");
    
    navLinks.forEach(link => {
      link.addEventListener("mouseover", function() {
        this.style.color = "#18bdfe";
      });

      link.addEventListener("mouseout", function() {
        this.style.color = "#333";
      });
    });
  }

  // Function to handle click event on checkout button
  function handleCheckout() {
    const checkoutBtn = document.querySelector(".checkout");

    checkoutBtn.addEventListener("click", function() {
      alert("Redirecting to checkout page!"); // Replace with actual checkout logic
    });
  }

  // Function to handle image hover effect (uncomment if you use .img-box and .img classes)
  /*
  function handleImageHover() {
    const imageBoxes = document.querySelectorAll(".img-box");

    imageBoxes.forEach(box => {
      box.addEventListener("mouseover", function() {
        const image = this.querySelector(".img");
        image.style.border = "2px solid #18bdfe";
      });

      box.addEventListener("mouseout", function() {
        const image = this.querySelector(".img");
        image.style.border = "1px solid #18bdfe";
      });
    });
  }
  */

  // Call functions to enable interactivity
  handleNavHover();
  handleCheckout();
  // handleImageHover(); // Uncomment if using image hover effect
});
// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
  
  // Function to handle image click event
  function handleImageClick() {
    const itemImages = document.querySelectorAll(".item-image img");

    itemImages.forEach(image => {
      image.addEventListener("click", function() {
        // Replace the alert with your modal or custom logic
        alert("Item added to cart!");
      });
    });
  }

  // Call function to enable image click event
  handleImageClick();
});

