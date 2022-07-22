const Employee = require ('../lib/Employee')

describe ('employee', () => {
    describe ('initialization', () => {
        it ('should create a employee object if given the right arguments', () => {
            const employee = new Employee ('Bob', 1, 'email@email');
            expect(employee.name).toEqual('Bob');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual(1);
        })
    })
    describe ('getName', () => {
       it ('should return the employees name', () => {
        expect(employee.getName()).toBe(employee.name);
       });
    }),
    
    describe ('getId', () => {
       it ('should return the employees id', () => {
        expect(employee.getEmail()).toBe(employee.id);
       });
    }),
    
    describe ('getEmail', () => {
       it ('should return the emloyees email', () => {
        expect(employee.getEmail()).toBe(employee.email);
       });
    }),
     describe ('getRole', () => {
       it ('should return empployee', () => {
        expect(employee.getRole()).toBe(employee.constructor.name);
       });
    });
})
