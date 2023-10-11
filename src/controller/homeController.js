const connection = require("../config/database")
const { getAllUsers, getUserById, deleteUserById, updateUserById } = require('../service/CRUDService')
const getHomepage = async (req, res) => {
    let results = await getAllUsers()
    return res.render('home.ejs', { listUsers: results })
}
const getTwkun = (req, res) => {
    res.render('example.ejs')

}
const getCreateUser = (req, res) => {
    res.render('create.ejs')
}
const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)
    res.render('delete.ejs', { userEdit: user })
}
const getUpdateUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)
    res.render('edit.ejs', { userEdit: user })
}
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log(email, name, city);
    let [results, fields] = await (await connection).query(`INSERT INTO Users (email, name, city)
    VALUES(?, ?, ?)`,
        [email, name, city],)
    console.log(results)
    res.send('create user')
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    console.log(email, name, city);
    await updateUserById(email, name, city, userId)
    res.redirect('/')
}
const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;
    await deleteUserById(id)
    res.redirect('/')
}
module.exports = {
    getHomepage,
    getTwkun,
    postCreateUser,
    postDeleteUser,
    getCreateUser,
    getUpdateUser,
    postUpdateUser,
    postHandleRemoveUser,
}