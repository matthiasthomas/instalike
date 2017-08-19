const userDAO = require('./user.dao');

module.exports = class userController {
    static getAll(req, res) {
        userDAO
            .getAll()
            .then(users => res.status(200).send(users))
            .catch(error => {
                res.status(500).send(error)
            });
    }

    static getOne(req, res) {
        let _query = req.body;

        userDAO
            .getOne(_query)
            .then(user => res.status(200).send(user))
            .catch(error => {
                res.status(500).send(error);
            })
    }

    static getOneById(req, res) {
        let _id = req.params.id;

        userDAO.getOneById(_id)
            .then(user => res.status(200).send(user))
            .catch(err => {
                res.status(500).send(err);
            })
    }

    static createNew(req, res) {
        let _user = req.body;

        userDAO
            .createNew(_user)
            .then(user => res.status(200).send(user))
            .catch(error => res.status(500).send(error));
    }

    static removeById(req, res) {
        let _id = req.params.id;

        userDAO
            .removeById(_id)
            .then(() => res.status(200).send('User removed successfully'))
            .catch(error => res.status(500).send(error));
    }
}
