document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll("input[name='unit']");
  const totalPrice = document.getElementById("total-price");

  // Initially hide all options
  document
    .querySelectorAll(".options, .options1st, .options2nd")
    .forEach((el) => {
      el.style.display = "none";
    });

  function updateTotal() {
    let selectedOption = document.querySelector("input[name='unit']:checked");
    let price = selectedOption.getAttribute("data-price");
    totalPrice.innerHTML = `$${price}.00 USD`;

    // Remove selected class and hide all options
    document.querySelectorAll(".offer").forEach((offer) => {
      offer.classList.remove("selected");
      let optionsDiv = offer.querySelector(
        ".options, .options1st, .options2nd"
      );
      if (optionsDiv) optionsDiv.style.display = "none";
    });

    // Expand the selected offer
    let parentOffer = selectedOption.closest(".offer");
    parentOffer.classList.add("selected");

    // Show the corresponding options
    let optionsDiv = parentOffer.querySelector(
      ".options, .options1st, .options2nd"
    );
    if (optionsDiv) optionsDiv.style.display = "block";
  }

  // Add event listener for each radio button
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", updateTotal);
  });

  // Remove this line so options are not shown initially
  updateTotal();
});
