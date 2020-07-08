const Employee = require("../lib/Employee");


test("Creates Employee Obj", () => {
    const employee = new Employee('Garves', '44', 'example@gmail.com')

    expect(employee).toEqual(expect.any(Object));
});

test('Employee Params are being used properly', () => {
    const employee = new Employee('Garves', '44', 'example@gmail.com')

    expect(employee.name).toBe('Garves');
    expect(employee.id).toBe('44');
    expect(employee.email).toBe('example@gmail.com');
})

test('Get employee Name', () => {
    const employee = new Employee('Garves', '44', 'example@gmail.com')

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('Get employee ID', () => {
    const employee = new Employee('Garves', '44', 'example@gmail.com')

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});