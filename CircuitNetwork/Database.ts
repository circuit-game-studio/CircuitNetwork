import * as mysql from 'mysql';

export class Database {
    private connection: mysql.Connection;
    public constructor(url: string) {
        this.connection = mysql.createConnection(url);
    }
    public SelectDatabase() {
        this.connection.changeUser({
            user:''
        })
    }
    public Query() {

    }
}