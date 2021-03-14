const Employee = require("../lib/Employee");

describe("getName", () => {
    it("Returns name", () => {
        const name = 'Tony';
        const data = new Employee(name);
        expect(data.getName()).toBe(name);
    });
});

describe("getId", () => {
    it("Returns id", () => {
        const id = 1;
        const data = new Employee('Tony', id);
        expect(data.getId()).toBe(id);
    });
});

describe("getEmail", () => {
    it("Returns email", () => {
        const email = 'stark@mail.com';
        const data = new Employee('Tony', 1, email);
        expect(data.getEmail()).toBe(email);
    });
});

describe("getRole", () => {
    it("Returns role", () => {
        const role = "Employee";
        const data = new Employee('Tony', 1, 'stark@mail.com');
        expect(data.getRole()).toBe(role);
    });
});