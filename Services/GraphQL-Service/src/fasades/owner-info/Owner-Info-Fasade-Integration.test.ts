import { expect } from "chai";
import { TYPES } from "../../ioc/types";

import IoC from "../../ioc/inversify-config";
import IOwnerInfoFasade from "../../typescript/interfaces/fasades/IOwner-Info-Fasade";

const ownerInfoFasade = IoC.get<IOwnerInfoFasade>(TYPES.IOwnerInfoFasade);

describe("Owner-Info-Fasade.ts", () => {
  context("getOwnerInfo", () => {
    it("returns valid owner info object", (done: Function) => {
      ownerInfoFasade
        .getOwnerInfo()
        .then(response => {
          console.log(response);

          expect(response).to.have.property("getCompanyName");
          expect(response).to.have.property("getDic");
          expect(response).to.have.property("getIco");
          expect(response).to.have.property("getStreet");
          expect(response).to.have.property("getCity");
          expect(response).to.have.property("getZipCode");
          expect(response).to.have.property("getEmail");
          done();
        })
        .catch(ex => {
          done(ex);
        });
    });

    it("owner info properties cannot be undefined", (done: Function) => {
      ownerInfoFasade
        .getOwnerInfo()
        .then(response => {
          console.log(response);

          expect(response).to.have.property("getCompanyName").not.undefined;
          expect(response).to.have.property("getDic").not.undefined;
          expect(response).to.have.property("getIco").not.undefined;
          expect(response).to.have.property("getStreet").not.undefined;
          expect(response).to.have.property("getCity").not.undefined;
          expect(response).to.have.property("getZipCode").not.undefined;
          expect(response).to.have.property("getEmail").not.undefined;
          done();
        })
        .catch(ex => {
          done(ex);
        });
    });
  });
});
