"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
class Circuit {
    constructor(port, db) {
        this.port = port;
        this.database = db;
        this.app = net.createServer(() => {
        });
    }
    Start() {
        this.app.listen(this.port, '0.0.0.0');
        console.log('CircuitNetwork Started.');
    }
    Stop() {
    }
}
exports.Circuit = Circuit;
//# sourceMappingURL=CircuitNetwork.js.map