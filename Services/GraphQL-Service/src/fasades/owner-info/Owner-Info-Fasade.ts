import { injectable, inject } from "inversify";

/* Type checking. */
import IOwnerInfoFasade from "../../typescript/interfaces/fasades/IOwner-Info-Fasade";
import IOwnerInfoDto from "../../typescript/interfaces/dto/owner-info/IOwner-Info-Dto";

import IUnitOfWork from "../../typescript/interfaces/uow/IUnitOfWork";
import { TYPES } from "../../ioc/types";
import OwnerInfoModel from "../../models/project-detail/OwnerInfo";
import OwnerInfoUpdateDto from "../../dto/models/project-detail/Owner-Info-Dto";
import OwnerInfoDto from "../../dto/models/project-detail/Owner-Info-Dto";

@injectable()
export default class OwnerInfoFasade implements IOwnerInfoFasade {
  private _uow!: IUnitOfWork;

  constructor(
    @inject(TYPES.IUnitOfWork)
    uow: IUnitOfWork
  ) {
    // Save unit of work instance
    this._uow = uow;
  }

  /**
   * @function getOwnerInfo => Fetch owner info (such as: company name,  dic, ico, street, city, zipCode, email)
   */
  async getOwnerInfo(): Promise<IOwnerInfoDto> {
    /* Get actual owner info entity from database. */
    const entity = await this._uow.getRepository(OwnerInfoModel).findFirst();

    const result = new OwnerInfoDto(
      entity.companyName,
      entity.dic,
      entity.ico,
      entity.street,
      entity.city,
      entity.zipCode,
      entity.email
    );

    return result;
  }

  /* 
    Change od all credentials of Owner info entity. If is passed only companyName that only companyName is changed.
  */
  async updateCredentials(
    dto: OwnerInfoUpdateDto
  ): Promise<OwnerInfoUpdateDto> {
    // Get actual owner info entity from database
    const entity = await this._uow
      .getRepository(OwnerInfoModel)
      .findFirst();

    entity.companyName = dto.getCompanyName();
    entity.dic = dto.getDic();
    entity.ico = dto.getIco();
    entity.street = dto.getStreet();
    entity.zipCode = dto.getZipCode();
    entity.city = dto.getCity();
    entity.email = dto.getEmail();

    /* Add repository into tracking state. */
    this._uow.trackRepository(entity);

    this._uow.saveChanges();

    // Creation result entity
    const resultEntity = new OwnerInfoUpdateDto(
      entity.companyName,
      entity.dic,
      entity.ico,
      entity.street,
      entity.zipCode,
      entity.city,
      entity.email
    );

    return resultEntity;
  }
}
