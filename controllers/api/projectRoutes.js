const router = require('express').Router();
const { Project } = require('../../models/index');

const withAuth = (req, res, next) => {
    if (req.session.logged_in) {
        next()
    } else {
        res.redirect('/login')
    }
}
router.post('/', withAuth, async (req, res) => {
    try {
        const newProject = await Project.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.redirect('/');
        // res.status(200).json(newProject);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/delete/:id', withAuth, async (req, res) => {
    try {
        const projectData = await Project.destroy({
            where: {
                id: req.params.id
            },
        });

        if (!projectData) {
            res.status(404).json({ message: 'No project found with this id!' });
            return;
        }
        res.redirect('/');
        // res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, (req, res) => {
    Project.update(
        {
            wage: req.body.wage,
            hr: req.body.hr,
            min: req.body.min,
            sec: req.body.sec
        },
        {
            where: {
                id: req.params.id,
            }
        }
    )
        .then((projectData) => {
            if (!projectData) {
                res.status(404).json({ message: "No project found with this id" });
                return;
            }
            res.json(projectData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;