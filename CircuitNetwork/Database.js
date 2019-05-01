"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class Database {
    constructor(url) {
        this.connected = false;
        this.connection = mysql.createConnection(url);
        this.connected = true;
    }
    SelectDatabase() {
    }
    Query() {
    }
}
exports.Database = Database;
//# sourceMappingURL=Database.js.map