const Employee = require('../lib/Employee')
const employee = new Employee('Bob', 1, 'email@email');

describe('employee', () => {
    describe('initialization', () => {
        it('should create a employee object if given the right arguments', () => {
            expect(employee.name).toEqual('Bob');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('email@email');
        })

        describe('getName', () => {
            it('should return the employees name', () => {
                expect(employee.getName()).toBe(employee.name);
            });
        }),

            describe('getId', () => {
                it('should return the employees id', () => {
                    expect(employee.getId()).toBe(employee.id);
                });
            }),

            describe('getEmail', () => {
                it('should return the employee email', () => {
                    expect(employee.getEmail()).toBe(employee.email);
                });
            }),
            describe('getRole', () => {
                it('should return employees role', () => {
                    expect(employee.getRole()).toBe(employee.constructor.name);
                });
            });
    })
})
