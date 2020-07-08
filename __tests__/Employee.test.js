import Employee from '../lib/Employee';


test("Creates Employee Obj", () => {
    const employee = new Employee();

    expect(employee).toEqual(expect.any(Object));
});
