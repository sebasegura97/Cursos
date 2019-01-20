const mongo = require("./connect")
const { DB_NAME } = require("./config.json")

module.exports = {
    getUsers: function() {
        const db = mongo.instance().db(DB_NAME);
        const users = db.collection("users").find({}).toArray();
        return users;
    },
    getUserById: function(id) {
        return users.filter(user=>user._id===id);
    },
    getUserByAgeRange: function(lower = 0, higher = 99) {
        const db = mongo.instance().db(DB_NAME);
        const users = db.collection("users").find({
            age: {
                $gte: Number(lower),
                $lte: Number(higher)
            }
        }).toArray();
        return users;
    }
}
