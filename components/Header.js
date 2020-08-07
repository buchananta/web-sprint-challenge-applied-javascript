// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const element = document.createElement('div');
  element.className = 'header';
  element.innerHTML = `  <span class="date">MARCH 28, 2020</span>
  <h1>Lambda Times</h1>
  <span class="temp">98°</span>`;
  return element;
}

document.querySelector('.header-container').appendChild(Header());