const Intern = require("../lib/Intern");
const { exportAllDeclaration } = require("@babel/types");

test('Creates Intern Obj', () => {
    const intern = new Intern('Jeremy', '1', 'example@intern.com', 'UofU');

    expect(intern).toEqual(expect.any(Object));
});

test('Intern Params are being used properly', () => {
    const intern = new Intern('Jeremy', '1', 'example@intern.com', 'UofU');

    expect(intern.name).toBe('Jeremy');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('example@intern.com');
    expect(intern.school).toBe('UofU');
});

test('Get intern school via getSchool()', () => {
    const intern = new Intern('Jeremy', '1', 'example@intern.com', 'UofU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Get intern role via getRole()', () => {
    const intern = new Intern('Jeremy', '1', 'example@intern.com', 'UofU');

    expect(intern.getRole()).toBe('Intern');
});