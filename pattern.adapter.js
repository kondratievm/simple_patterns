class WDIOBrowser {
  goTo(url) {
    console.log("WdIo go to", url);
  }
}

class ProtractorBrowser {
  get(url) {
    console.log("Protractor navigate to", url);
  }
}

const browser = ((browserInstance) => {
  class Adapted {
    constructor(br) {
      this.browser = br;
    }

    get(url) {
      console.log("adapter call");
      this.browser.goTo(url);
    }
  }
  return new Adapted(browserInstance);
})(new WDIOBrowser());

browser.get("test url");
