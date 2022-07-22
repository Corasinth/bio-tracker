const Employee = require ('../lib/Employee')

describe ('employee', () => {
    describe ('initialization', () => {
        it ('should create a employee object if given the right arguments', () => {
            const employee = new Employee ('Bob', 1, 'email@email');
            expect(employee.name).toEqual('Bob');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('email@email');
        })
    })
})


