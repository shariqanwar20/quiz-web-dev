const Recipies = require("../../models/Recipies")

async function getRecipieById (req, res) {
    try {
        // return all recipies of all users
        const recipies = await Recipies.find({
            _id: req.params.id
        }).populate('userId').populate("ingredients")
        console.log(recipies)

        return res.json(recipies[0])
    } catch (error) {
        return res.json({ msg: error })
    }
};

module.exports = getRecipieById;