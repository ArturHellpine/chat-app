import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body

        if(!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ error: 'All fields are required' })
        }

        if(password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords don’t match' })
        }

        const user = await User.findOne({ username })

        if(user) {
            return res.status(400).json({ error: 'Username already exists' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })

        if(newUser) {
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({ error: 'Invalid user data' })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body

        if(!username || !password) {
            return res.status(400).json({ error: 'All fields are required' })
        }

        const user = await User.findOne({ username })

        if(!user) {
            return res.status(400).json({ error: 'Invalid login or password' })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if(!isPasswordCorrect) {
            return res.status(400).json({ error: 'Invalid login or password' })
        }
        generateTokenAndSetCookie(user._id, res)
        res.status(201).json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message })
    }
}

export const logout = (req, res) => {
    try {
        res.cookie('jwt', '', { maxAge: 0 })
        res.status(200).json({ message: 'Logged out successfully' })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message })
    }
}


