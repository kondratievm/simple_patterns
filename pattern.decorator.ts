function declare(message: string | Function) {
  return function (_target, propName, descriptor) {
    const originalFunction = descriptor.value;

    descriptor.value = function (...args) {
      message = typeof message === "function" ? message(this.name) : message;

      console.log("message", message);
      console.log("ARGS", ...args);

      const result = originalFunction.call(this, ...args);
      console.log("result", result);
      return result;
    };

    return descriptor;
  };
}

class PageA {
  name: string;

  constructor(name) {
    this.name = name;
  }

  @declare("SUM")
  method_1(a, b) {
    return a + b;
  }

  @declare((name) => `${name} execute some action`)
  method_2(a, b) {
    return a - b;
  }
}

const pageA = new PageA("test page");

console.log(pageA.method_1(2, 3));
console.log(pageA.method_2(4, 5));
