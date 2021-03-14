const Employee = require("../lib/Employee");
const Intern = require('../lib/Intern')

describe("getRole", () => {
    it("Returns role", () => {
        const role = "Intern";
        const data = new Intern('Rhodey', 3, 'rhodey@mail.com');
        expect(data.getRole()).toBe(role);
    });
});

describe("getSchool", () => {
    it("Returns school", () => {
        const school = "Coding University";
        const data = new Intern('Rhodey', 3, 'rhodey@mail.com', school);
        expect(data.getSchool()).toEqual(school);
    });
});