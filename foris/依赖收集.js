class Subscriber {
  constructor(id) {
      this.id = id 
  }

  notify(){
    console.log(this.id+':监听到依赖变动')
  }
}

class Publisher {
  constructor() {
    this.subscribers = [];
  }

  addSubscribers(sub) {
    this.subscribers.push(sub);
  }

  notify() {
    this.subscribers.forEach((sub) => sub.notify());
  }
}


const sub1 = new Subscriber(1)
const sub2 = new Subscriber(2)
const sub3 = new Subscriber(3)

const publisher = new Publisher()
publisher.addSubscribers(sub1)
publisher.addSubscribers(sub2)

publisher.notify()
