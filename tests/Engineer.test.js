const Engineer = require('../lib/Engineer')
const engineer = new Engineer('Bob', 1, 'email@email', 'github username');

describe('engineer', () => {
    describe('initialization', () => {
        it('should create a engineer object if given the right arguments', () => {
            expect(engineer.name).toEqual('Bob');
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual('email@email');
            expect(engineer.github).toEqual('github username');
        })
    })
    describe('getName', () => {
        it('should return the engineers name', () => {
            expect(engineer.getName()).toBe(engineer.name);
        });
    }),

    describe('getId', () => {
        it('should return the engineers id', () => {
            expect(engineer.getId()).toBe(engineer.id);
        });
    }),

    describe('getEmail', () => {
        it('should return the engineers email', () => {
            expect(engineer.getEmail()).toBe(engineer.email);
        });
    }),
    describe('getGithub', () => {
        it('should return engineers github', () => {
            expect(engineer.getGithub()).toBe(engineer.github);
        });
    });

    describe('getRole', () => {
        it('should return engineers role', () => {
            expect(engineer.getRole()).toBe(engineer.constructor.name);
        });
    });
});
