import { Database } from './Database';
import * as net from 'net';

export class Circuit {
    private port: number;
    private database: Database;
    private app: net.Server;
    public constructor(port: number, db: Database) {
        this.port = port;
        this.database = db;
        this.app = net.createServer(() => {

        });
    }
    public Start() {
        this.app.listen(this.port, '0.0.0.0');
        console.log('CircuitNetwork Started.');
    }
    public Stop() {

    }
}