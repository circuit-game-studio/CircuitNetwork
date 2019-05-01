import { Database } from './Database';
import { Circuit } from './CircuitNetwork';

console.log('Connecting to database...');
try {
    const db = new Database("42.51.41.253");
    console.log('Database connected');
    const server = new Circuit(1874, db);
    server.Start();
} catch {
    console.log('Failed to connect database');
}