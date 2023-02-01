const express = require('express')
const router = express.Router()
const { User, Project } = require('../models/index')
const auth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login')
    } else {
        next()
    }
}


router.get("/", auth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ["password"] },
            include: [{ model: Project }],
        });

        const user = userData.get({ plain: true });
        console.log(user)
        res.render("index", {
            ...user,
            loggedIn: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/project/:id", async (req, res) => {
    try {
        const projectData = await Project.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ["name"],
                },
            ],
        });

        const project = projectData.get({ plain: true });

        res.render("project", {
            ...project,
            loggedIn: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    res.render('loginSignup')
})
router.get('/analytics', auth, (req, res) => {
    res.render('analytics', { loggedIn: req.session.logged_in, user_id: req.session.user_id })
})
module.exports = router