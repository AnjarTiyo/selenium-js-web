class SharedContext {
    constructor() {
        this.sharedData = {};
    }
}

const sharedContext = new SharedContext();

module.exports = sharedContext;
