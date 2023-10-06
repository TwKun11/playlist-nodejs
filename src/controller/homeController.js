const connection = require("../config/database")

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}
const getTwkun = (req, res) => {
    res.render('example.ejs')

}
const getCreateUser = (req, res) => {
    res.render('create.ejs')
}
const postCreateUser = (req, res) => {
    console.log(req.body)
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES(?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            res.send('create user succeed')
        }
    )
}
module.exports = {
    getHomepage,
    getTwkun,
    postCreateUser,
    getCreateUser
}