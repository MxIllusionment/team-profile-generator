const Employee = require("../lib/Employee");
const crypto = require("crypto");

describe("Employee", () => {
  let obj;
  let name;
  let id;
  let email;

  beforeAll(() => {
    name = crypto.randomBytes(10).toString("hex");
    id = crypto.randomBytes(8).toString("hex");
    email = crypto.randomBytes(10).toString("hex");

    obj = new Employee.Employee(name, id, email);
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

    it("Should return 'Employee'", () => {
      expect(obj.getRole()).toEqual("Employee");
    });
  });
});