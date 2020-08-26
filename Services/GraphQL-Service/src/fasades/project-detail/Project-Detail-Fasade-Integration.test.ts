import { expect } from "chai";
import IProjectDetailFasade from "../../typescript/interfaces/fasades/IProject-Detail-Fasade";
import { TYPES } from "../../ioc/types";

import IoC from "../../ioc/inversify-config";

const projectDetailFasade = IoC.get<IProjectDetailFasade>(
  TYPES.IProjectDetailFasade
);

describe("Project-Detail-Fasade.ts", () => {
  context("getProjectDetail", () => {
    it("returns valid result object structure", (done: Function) => {
      projectDetailFasade
        .getProjectDetail()
        .then(response => {
          expect(response).to.have.property("getProjectName");
          expect(response).to.have.property("getThemeCode");
          expect(response).to.have.property("getCompanyName");
          done();
        })
        .catch(ex => {
          done(ex);
        });
    });
  });
});
