const Intern = require('../lib/intern')
const intern = new Intern('Bob', 1, 'email@email', 'school');

describe('intern', () => {
    describe('initialization', () => {
        it('should create a intern object if given the right arguments', () => {
            expect(intern.name).toEqual('Bob');
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual('email@email');
            expect(intern.school).toEqual('school');
        })
    })
    describe('getName', () => {
        it('should return the interns name', () => {
            expect(intern.getName()).toBe(intern.name);
        });
    }),

    describe('getId', () => {
        it('should return the interns id', () => {
            expect(intern.getId()).toBe(intern.id);
        });
    }),

    describe('getEmail', () => {
        it('should return the interns email', () => {
            expect(intern.getEmail()).toBe(intern.email);
        });
    }),
    describe('getSchool', () => {
        it('should return interns school', () => {
            expect(intern.getSchool()).toBe(intern.school);
        });
    });

    describe('getRole', () => {
        it('should return interns role', () => {
            expect(intern.getRole()).toBe(intern.constructor.name);
        });
    });
});