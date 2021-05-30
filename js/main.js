const gliders = document.querySelectorAll("[id^=glider]");

window.addEventListener('load', function(){
    gliders.forEach((glide) => {
        const glider = document.querySelector(`#${glide.id} .glider`);
        const gliderPrev = document.querySelector(`#${glide.id} .glider-prev`);
        const gliderNext = document.querySelector(`#${glide.id} .glider-next`);
        const gliderDots = document.querySelector(`#${glide.id} .dots`);

        new Glider(glider, {
          slidesToShow: glide.childElementCount< 4 ? 1.2 : 6,
          draggable: true,
          dots: gliderDots,
          arrows: {
            prev: gliderPrev,
            next: gliderNext
          }
        });
    });
})



/* Text changer in carousel H2 */

let carouselHeaderText = document.getElementById("carousel-changing-H2");
let carouselSection = document.getElementById("carousel-section");

function textChangeFunc(e) {
    if (e.matches) {
      carouselHeaderText.remove();
      carouselSection.insertAdjacentHTML("afterBegin", `<h2 id="inserted-H2">Choose your profession for more details</h2>`)
    }
}
  
let e = window.matchMedia("(max-width: 375px)")
textChangeFunc(e)
e.addListener(textChangeFunc) 