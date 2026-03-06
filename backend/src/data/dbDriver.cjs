const Database = require('better-sqlite3')
const Path = require('node:path')

const db = new Database('dataBase.db')

// users table
db.exec(` 
   CREATE TABLE IF NOT EXISTS USERS (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name UNIQUE NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    group_id INTEGER,
    crew_id INTEGER,
    FOREIGN KEY (group_id) REFERENCES groups(id)
    FOREIGN KEY (crew_id) REFERENCES crews(id)
   )
`)

// groups table
db.exec(`
    CREATE TABLE IF NOT EXISTS groups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name UNIQUE NOT NULL,
    )
`)

db.exec(`
    CREATE TABLE IF NOT EXISTS crews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        leader TEXT NOT NULL,
        student_count INTEGER
    )
`)


module.exports = {db}