import { expect } from "chai";
import { TYPES } from "../../ioc/types";

import IoC from "../../ioc/inversify-config";
import ISocialIconsFasade from "../../typescript/interfaces/fasades/ISocial-Icons-Fasade";

const socialIconsFasade = IoC.get<ISocialIconsFasade>(TYPES.ISocialIconsFasade);

describe("Social-Icons-Fasade.ts", () => {
  context("getAll", () => {
    it("returns valid social icon object structure", (done: Function) => {
      socialIconsFasade
        .getAll()
        .then(response => {
          const responseArray = response[0];

          expect(responseArray).to.have.property("name");
          expect(responseArray).to.have.property("code");
          expect(responseArray).to.have.property("url");
          done();
        })
        .catch(ex => {
          done(ex);
        });
    });

    it("social icon object properties cannot be undefined", (done: Function) => {
      socialIconsFasade
        .getAll()
        .then(response => {
          console.log(response);

          const responseArray = response[0];

          expect(responseArray).to.have.property("name").not.undefined;
          expect(responseArray).to.have.property("code").not.undefined;
          expect(responseArray).to.have.property("url").not.undefined;
          done();
        })
        .catch(ex => {
          done(ex);
        });
    });
  });
});
