const db = require('../dbConfig');

module.exports = {
    createNewOrFetchExistingUser: async (user) => {
        try {
            const fetchedUser = await db('users').where({ fbID: user.fbID }).first();
            if (!!fetchedUser) {
                return fetchedUser;
            } else {
                const [id] = await db('users').insert(user, "id");
                const createdUser = await db('users').where({ id }).first();
                return createdUser;
            }
        } catch (error) {
            console.log(error)
        }
    }
}

