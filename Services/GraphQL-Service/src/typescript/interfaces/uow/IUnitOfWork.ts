import Repository from "../../../uow/Repository";

export default interface IUnitOfWork {
  /* T for generic is required for return the correct type variable. */
  getRepository(model: any): Repository;

  trackRepository(repository: any): void;

  saveChanges(): void;
}
