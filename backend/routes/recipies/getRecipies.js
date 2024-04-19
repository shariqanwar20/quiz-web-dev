const Recipies = require("../../models/Recipies")
// const Tickets = require("../../models/Ticket")
// const Users = require("../../models/User")

async function getRecipies (req, res) {
    try {
        // return all recipies of all users
        const recipies = await Recipies.find()
        console.log(recipies)

        return res.json(recipies)
    } catch (error) {
        return res.json({ msg: error })
    }
};

module.exports = getRecipies;