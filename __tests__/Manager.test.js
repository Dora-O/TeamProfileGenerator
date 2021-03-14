const Employee = require("../lib/Employee");
const Manager = require('../lib/Manager');

describe("getRole", () => {
    it("Returns role", () => {
        const role = "Manager";
        const data = new Manager('Tony', 1, 'tony@mail.com');
        expect(data.getRole()).toBe(role);
    });
});

describe("getOfficeNumber", () => {
    it("Returns officeNumber", () => {
        const officeNumber = "Stark Tower 1";
        const data = new Manager('Tony', 1, 'tony@mail.com', officeNumber);
        expect(data.getOfficeNumber()).toEqual(officeNumber);
    });
});