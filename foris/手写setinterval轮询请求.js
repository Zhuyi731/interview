const request = require("request");

let timer;
function intervalRequest(interval, url) {
  clearTimeout(timer);
  request(url, (response) => {
    timer = setTimeout(() => {
      intervalRequest(interval, url);
    }, interval);
  });
}
