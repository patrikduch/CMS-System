import { injectable, inject } from "inversify";
import { TYPES } from "../../ioc/types";
import IModuleFeatureFasade from "../../typescript/interfaces/fasades/IModule-Feature-Fasade";

import IUnitOfWork from "../../typescript/interfaces/uow/IUnitOfWork";

// Required models
import ModuleFeatureCategoryModel from "../../models/module-system/Module-Feature-Category";
import ModuleFeatureModel from "../../models/module-system/Module-Feature";
import ModuleFeatureCategory from "../../models/module-system/Module-Feature-Category";

@injectable()
export default class ModuleFeatureFasade implements IModuleFeatureFasade {
  private _uow!: IUnitOfWork;

  constructor(
    @inject(TYPES.IUnitOfWork)
    uow: IUnitOfWork
  ) {
    this._uow = uow;
  }

  /*
    Get all categories for modules or for features.
  */
  async getAllCategories(): Promise<any> {
    return await this._uow.getRepository(ModuleFeatureCategoryModel).findAll();
  }

  /* 
    Get modules and features with specified pagination.
  */
  async getPaggedModuleFeatures(
    pageId: number,
    pageSize: number
  ): Promise<any> {
    const offset = (pageId - 1) * pageSize;
    const limit: number = pageSize;

    const res = await this._uow.getRepository(ModuleFeatureModel).findAll({
      offset,
      limit,
      include: [
        {
          model: ModuleFeatureCategory,
        },
      ],
    });

    return res;
  }

  /*
    Get all modules and features.
  */
  async getAllModulesFeatures(): Promise<any> {
    return await this._uow.getRepository(ModuleFeatureModel).findAll({
      include: [
        {
          model: ModuleFeatureCategoryModel,
        },
      ],
    });
  }

  /**
   * @function getAllEnabledModules => Fetch all enabled modules.
   */
  async getAllEnabledModules(): Promise<any> {
    return await this._uow.getRepository(ModuleFeatureModel).findAll({
      where: {
        isEnabled: true,
        isFeature: false,
      },
    });
  }

  /**
   * @function getAllEnabledFeatures => Fetch all enabled featuress.
   */
  async getEnabledFeatures(): Promise<any> {
    return await this._uow.getRepository(ModuleFeatureModel).findAll({
      where: {
        isEnabled: true,
        isFeature: true,
      },
    });
  }

  async getTotalCount(): Promise<number> {
    return await this._uow.getRepository(ModuleFeatureModel).count();
  }

  /* 
    Update specific feature by id.
  */
  async toggleModuleState(id: number): Promise<any> {
    const rep = this._uow.getRepository(ModuleFeatureModel);
    let entity = await rep.findAll({
      where: {
        id: id,
      },
    });

    entity = entity[0];

    entity.isEnabled = !entity.isEnabled;

    /* Add repository into tracking state. */
    this._uow.trackRepository(entity);

    // Save changes to the database
    this._uow.saveChanges();

    return {
      id: entity.id,
      isEnabled: entity.isEnabled,
      isFeature: entity.isFeature,
    };
  }
}
