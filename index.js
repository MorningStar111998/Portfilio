
document
  .getElementById("frenchFlag")
  .addEventListener("click", function (event) {
    toggleDropdown(); 
  });


function toggleDropdown() {
  const dropdown = document.querySelector(".dropdown");

  if (dropdown.style.top === "0px") {
    dropdown.style.top = "100%";
    setTimeout(function () {
      dropdown.style.zIndex = "1";
    }, 500);
    
  } else {
    dropdown.style.zIndex = "-1";
    dropdown.style.top = "0";

  }
}

