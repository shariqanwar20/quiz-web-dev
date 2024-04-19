const Recipies = require("../../models/Recipies")
const Users = require("../../models/User")

async function createRecipie (req, res) {
    try {
        const { email } = req.user
        let user = await Users.findOne({ email })
        //user doesnt exist
        if (!user) return res.json({ message: "User doesn't exist!" })

        // check if admin
        if (user.role !== 'ADMIN') return res.json({ message: "You are not authorized to create a recipie" })
        
        const recipie = await Recipies.create({ ...req.body, userId: user._id});
        user.recipies.push(recipie._id); 
        
        await user.save();
        return res.json({ msg: "CREATED" })
    } catch (error) {
        return res.json({ msg: error })
    }
};

module.exports = createRecipie;