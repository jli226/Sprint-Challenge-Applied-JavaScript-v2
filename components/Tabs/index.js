// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(data => {
    topicsArray = data.data.topics;
    topicsArray.forEach(topic => {
      const newTab = Tab(topic);
      const topicsContainer = document.querySelector(".topics");
      topicsContainer.appendChild(newTab);
    });
  })
  .catch(data => {
    console.log("Error message for 'Tabs' API call");
  });

function Tab(topic) {
  const tabTopic = document.createElement("div");
  tabTopic.classList.add("tab");
  tabTopic.textContent = topic;

  return tabTopic;
}
