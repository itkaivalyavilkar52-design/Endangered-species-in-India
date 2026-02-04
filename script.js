// Scroll to About section
function scrollToSection() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// Display pledge message
function pledge() {
  document.getElementById("pledgeMessage").innerText =
    "Thank you for pledging to protect endangered species in India!";
}
