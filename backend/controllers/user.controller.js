import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password')

        res.status(200).json(filteredUsers)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message })
    }
}

export const getCurrentUser = async (req, res) => {
    try {
        const userId = req.user._id
        const currentUser = await User.findById(userId)

        res.status(200).json(currentUser)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message })
    }
}
