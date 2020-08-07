// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get('https://lambda-times-api.herokuapp.com/topics')
  .then(response => {
    //lets make the container, so we're not searching the DOM every single forEach
    const container = document.querySelector('div.topics');
    response.data.topics.forEach(topic => {
      //making an element, and appending it to container
      const element = document.createElement('div');
      element.className = 'tab';
      element.textContent = topic;
      element.addEventListener('click', () => {
        //probably a better way to do this, but I'm just going to
        //hide every card, then display the relevant onesjsdf;d 
         const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.classList.add('hidden'));
        const articles = document.querySelectorAll(`.${topic}`);
        articles.forEach(topic => topic.classList.remove('hidden'));
      })
      return container.appendChild(element);
    })}
  )
