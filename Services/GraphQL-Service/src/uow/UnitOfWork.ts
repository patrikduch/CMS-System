import IUnitOfWork from "../typescript/interfaces/uow/IUnitOfWork";
import { injectable } from "inversify";
import Repository from "./Repository";

@injectable()
/**
 * @class UnitOfWork => Unit of Work realization that uses Generic Repository pattern to work properly.
 */
class UnitOfWork implements IUnitOfWork {
  private _trackedRepositories: any[] = [];

  /**
   * @function getRepository => Get repository during runtime.
   * @param model
   */
  getRepository(model: any): any {
    const repository = new Repository(model);
    return repository;
  }

  /**
   * @function saveChanges => Save changes on provided model. Tracking mechanism will reproduce INSERT or UPDATE statement or none.
   */
  async saveChanges() {
    const promiseArray: any[] = [];

    if (this._trackedRepositories.length > 0) {
      this._trackedRepositories.forEach((rep) => {
        promiseArray.push(rep.save());
      });
    }

    return await Promise.all(promiseArray);
  }

  /**
   * @function trackRepository => Track repository to
   * @param repository 
   */
  trackRepository(repository: any): void {
    this._trackedRepositories.push(repository);
  }
}

export default UnitOfWork;
