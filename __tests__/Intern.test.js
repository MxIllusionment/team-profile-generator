const Employee = require("../lib/Employee");
const crypto = require("crypto");

describe("Intern", () => {
  let obj;
  let name;
  let id;
  let email;
  let school;

  beforeAll(() => {
    name = crypto.randomBytes(10).toString("hex");
    id = crypto.randomBytes(8).toString("hex");
    email = crypto.randomBytes(10).toString("hex");
    school = crypto.randomBytes(12).toString("hex");

    obj = new Employee.Intern(name, id, email, school);
  });

  describe("Initialization", () => {
    it("Should create an object that is a child of Employee", () => {
      expect(obj instanceof Employee.Employee).toEqual(true);
    });
  });

  describe("Properties", () => {
    it("Should return name that was set during construction", () => {
      expect(obj.name).toEqual(name);
    });

    it("Should return ID number that was set during construction", () => {
      expect(obj.id).toEqual(id);
    });

    it("Should return email address that was set during construction", () => {
      expect(obj.email).toEqual(email);
    });

    it("Should return school that was set during construction", () => {
      expect(obj.school).toEqual(school);
    });
  });

  describe("Get Functions", () => {
    it("Should return name that was set during construction", () => {
      expect(obj.getName()).toEqual(name);
    });

    it("Should return ID number that was set during construction", () => {
      expect(obj.getId()).toEqual(id);
    });

    it("Should return email address that was set during construction", () => {
      expect(obj.getEmail()).toEqual(email);
    });

    it("Should return school that was set during construction", () => {
      expect(obj.getSchool()).toEqual(school);
    });

    it("Should return 'Intern'", () => {
      expect(obj.getRole()).toEqual("Intern");
    });
  });
});