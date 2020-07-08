const Employee = require("../lib/Employee");


test("Creates Employee Obj", () => {
    const employee = new Employee();

    expect(employee).toEqual(expect.any(Object));
});
