const Intern = require("../lib/Intern");
const { exportAllDeclaration } = require("@babel/types");

test('Creates Intern Obj', () => {
    const intern = new Intern('Jeremy', '1', 'example@intern.com', 'UofU');

    expect(intern).toEqual(expect.any(Object));
});