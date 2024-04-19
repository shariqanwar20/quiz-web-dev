const Ingredients = require("../../models/Ingredients")
const Users = require("../../models/User")

async function createIngredient (req, res) {
    try {
        const { email } = req.user
        let user = await Users.findOne({ email })
        //user doesnt exist
        if (!user) return res.json({ message: "User doesn't exist!" })

        // check if admin
        if (user.role !== 'ADMIN') return res.json({ message: "You are not authorized to create an ingredient" })
        
        const ingredient = await Ingredients.create({ ...req.body, userId: user._id});
        user.ingredients.push(ingredient._id); 
        
        await user.save();
        return res.json({ msg: "CREATED", ingredient })
    } catch (error) {
        return res.json({ msg: error })
    }
};

module.exports = createIngredient;