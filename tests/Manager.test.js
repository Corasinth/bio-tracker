const Manager = require('../lib/manager')
const manager = new Manager('Bob', 1, 'email@email', 22);

describe('manager', () => {
    describe('initialization', () => {
        it('should create a manager object if given the right arguments', () => {
            expect(manager.name).toEqual('Bob');
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual('email@email');
            expect(manager.officeNumber).toEqual(22);
        })
    })
    describe('getName', () => {
        it('should return the managers name', () => {
            expect(manager.getName()).toBe(manager.name);
        });
    }),

    describe('getId', () => {
        it('should return the managers id', () => {
            expect(manager.getId()).toBe(manager.id);
        });
    }),

    describe('getEmail', () => {
        it('should return the managers email', () => {
            expect(manager.getEmail()).toBe(manager.email);
        });
    }),
    describe('officeNumber', () => {
        it('should return managers office number', () => {
            expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
        });
    });

    describe('getRole', () => {
        it('should return managers role', () => {
            expect(manager.getRole()).toBe(manager.constructor.name);
        });
    });
});