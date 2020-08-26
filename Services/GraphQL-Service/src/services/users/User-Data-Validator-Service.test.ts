import { expect } from "chai";

import UserDataValidatorService from "./User-Data-Validator-Service";
import AdminUserDto from "../../dto/models/user/Admin-User-Dto";

describe("User-Data-Validator.Service.ts", () => {
  context("isUserAdmin", () => {
    it("returns true if user has admin role", () => {
      const adminDto = new AdminUserDto();
      adminDto.setRoleId(1);
      adminDto.setUserId(1);

      const actual = UserDataValidatorService.isUserAdmin(adminDto);
      const expected = true;

      expect(actual).to.equal(expected);
    });
  });
});
