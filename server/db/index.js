const db = require('./db');
const { User, Department } = require('./models/index');

const sync = async (force = false) => {
    try {
        await db.sync({ force });
    } catch (e) {
        console.log('failed to sync db');
        throw e;
    }
}

const seed = async () => {
    await sync(true);

    const jerry = await User.create({
        name: 'Jerry'
    })
    
    const george = await User.create({
        name: 'George'
    })
        
    const elaine = await User.create({
        name: 'Elaine'
    })

    const kramer = await User.create({
        name: 'Kramer'
    })

    const comedy = await Department.create({
        name: 'comedy club'
    })

    const yankees = await Department.create({
        name: 'Yankees'
    })

    const bookpublisher = await Department.create({
        name: 'book publisher'
    })

    const unemployed = await Department.create({
        name: 'unemployed'
    })

    await comedy.addUsers(jerry)
    await yankees.addUsers(george)
    await bookpublisher.addUsers(elaine)
    await unemployed.addUsers(kramer)

}

module.exports = {
    db,
    sync,
    seed,
    models: {
        User,
        Department
    }
}