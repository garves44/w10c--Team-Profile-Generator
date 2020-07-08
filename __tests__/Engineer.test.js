const Engineer = require("../lib/Engineer");


test('Get Engineer Github', () => {
    const engineer = new Engineer('Garves', '50', 'example@engineering.com', 'example@github.com');

    expect(engineer).toEqual(expect.any(Object));
});