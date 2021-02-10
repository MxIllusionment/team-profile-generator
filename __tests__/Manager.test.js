const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const crypto = require("crypto");

describe("Manager", () => {
  let obj;
  let name;
  let id;
  let email;
  let officeNumber;

  beforeAll(() => {
    name = crypto.randomBytes(10).toString("hex");
    id = crypto.randomBytes(8).toString("hex");
    email = crypto.randomBytes(10).toString("hex");
    officeNumber = crypto.randomBytes(12).toString("hex");

    obj = new Manager(name, id, email, officeNumber);
  });

  describe("Initialization", () => {
    it("Should create an object that is a child of Employee", () => {
      expect(obj instanceof Employee).toEqual(true);
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

    it("Should return office number that was set during construction", () => {
      expect(obj.officeNumber).toEqual(officeNumber);
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

    it("Should return 'Manager'", () => {
      expect(obj.getRole()).toEqual("Manager");
    });
  });
});