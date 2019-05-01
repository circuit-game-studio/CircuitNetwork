"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("./Database");
const CircuitNetwork_1 = require("./CircuitNetwork");
console.log('Connecting to database...');
const db = new Database_1.Database("127.0.0.1");
if (db.connected) {
    console.log('Database connected');
    const server = new CircuitNetwork_1.Circuit(1874, db);
    server.Start();
}
else {
    console.log('Failed to connect database');
}
//# sourceMappingURL=app.js.map