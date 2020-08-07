/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function makeCarousel() {
  const element = document.createElement('div');
  element.className = 'carousel';
  element.innerHTML = `
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
    `;
    //lets add event listeners to the right/left buttons
    //why am I doing this here? eh, in case I need multiple carousels
    const right = element.querySelector('.right-button');
    const left = element.querySelector('.left-button');
    //right event listener!
    right.addEventListener('click', () => {
      element.querySelectorAll('img').forEach(img => {
        img.style.display = 'none';
      })
      document.querySelector(`.img-${imgRotator('right')}`)
        .style.display = 'inline-block';
    })
    //left event listener!
    left.addEventListener('click',  () => {
      element.querySelectorAll('img').forEach(img => {
        img.style.display = 'none';
      })
      document.querySelector(`.img-${imgRotator('left')}`)
        .style.display = 'inline-block';
    })
  //append element to carousel div
  return document.querySelector('.carousel-container').appendChild(element);
}

makeCarousel();

//lets make a closure!
const imgRotator = function(dir) {
  let number = document.querySelectorAll('.carousel img').length;
  number -= 1;
  //start at -1, so I can prepend ++, otherwise I'll get 0 twice
  let counter = -1;
  return (dir) => {
    if (dir === 'right') {
      return counter == number ? counter = 0 : ++counter;
    } else return counter <= 0 ? counter = number : --counter;
  }
}()

const images = document.querySelectorAll('.carousel img');
images.forEach(img => {
  img.classList.add(`img-${imgRotator()}`);
  if (img.classList.contains('img-0')) 
    img.style.display = 'inline-block';
})