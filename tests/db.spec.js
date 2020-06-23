const { seed, models: { User, Department } } = require('../server/db/index');

describe('Database', () => {
    beforeEach(() => seed());

    it('Can return all users', async () => {
        const users = await User.findAll();
        expect(users.length).toEqual(4)
    });

    it('Can return all departments', async () => {
        const departments = await Department.findAll();
        expect(departments.length).toEqual(4)
    });

    it('users are assigned to departments', async () => {
        const jerry = await User.findOne({name: 'jerry'});
        expect(!!jerry.departmentId).toEqual(true);
    })
})