class Observer {
  constructor(obj) {
    const proxy = new Proxy(obj, {
      set(target, key, val) {
        console.log(`key is being edit`);
        target[key] = val;
      },
    });
    return proxy
  }
}

const originObj = {
  a: 123,
  b: "string",
};

const observer = new Observer(originObj);

observer.a = 321
