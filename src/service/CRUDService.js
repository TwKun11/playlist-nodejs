const connection = require('../config/database');
const getAllUsers = async () => {
    let [results, fields] = await (await connection).query('select * from Users u')
    return results
}
const getUserById = async (userId) => {
    let [results, fields] = await (await connection).query('select * from Users where id = ?', [userId])
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}
const deleteUserById = async (id) => {
    let [results, fields] = await (await connection).query(
        `DELETE FROM Users WHERE id = ? `, [id]
    )
}
const updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await (await connection).query(
        `UPDATE Users
        SET email = ?, name = ?, city = ?
        WHERE id = ?`,
        [email, name, city, userId],)
}
module.exports = {
    getAllUsers, getUserById, updateUserById,
    deleteUserById
}
