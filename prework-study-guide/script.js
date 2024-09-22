const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

function getRandomTopic() {
  const randomIndex = Math.floor(Math.random() * topics.length);
  return topics[randomIndex];
}

console.log("Topics we covered:");
topics.forEach(topic => console.log(topic));

const suggestedTopic = getRandomTopic();
console.log("Which topic should you study first? " + suggestedTopic);