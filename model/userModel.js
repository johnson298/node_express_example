const db = require('../DBConnection');
const users = {
    getAll(callback) {
        return db.query("SELECT * FROM users", callback);
    },
    getById(id, callback) {
        return db.query("SELECT * FROM users WHERE id=?", [id], callback);
    },
    create(data, callback) {
        return db.query("INSERT INTO users (name, age, address, created_at) values(?, ?, ?, ?)", [data.name, data.age, data.address, data.created_at], callback);
    },
    remove(id, callback) {
        return db.query("DELETE FROM users WHERE id=?", [id], callback);
    },
    update(id, data, callback) {
        return db.query("UPDATE users set name=?, age=?, address=?, created_at=? WHERE id=?", [data.name, data.age, data.address, data.created_at, id], callback);
    }
};
module.exports = users;