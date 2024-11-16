const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
});

function updateCards() {
  const firstCard = document.querySelector(".swiper-slide");
  firstCard.remove();

  const newCard = document.createElement("div");
  newCard.classList.add("swiper-slide", "card");
  newCard.textContent = `Card ${swiper.slides.length + 1}`;
  swiper.wrapperEl.appendChild(newCard);

  swiper.update();
}

const cartCountElement = document.getElementById("cart-count");

    const addToCartButtons = document.querySelectorAll(".product-button");

    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });