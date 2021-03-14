const Employee = require("../lib/Employee");
const Engineer = require('../lib/Engineer');

describe("getRole", () => {
    it("Returns role", () => {
        const role = "Engineer";
        const data = new Engineer('Jarvis', 2, 'jarvis@mail.com');
        expect(data.getRole()).toBe(role);
    });
});

describe("getGithub", () => {
    it("Returns github", () => {
        const gitHub = "Githubuser";
        const data = new Engineer('Jarvis', 2, 'jarvis@mail.com', gitHub);
        expect(data.getGithub()).toBe(gitHub);
    });
});