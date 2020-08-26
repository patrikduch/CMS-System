import { injectable, unmanaged } from "inversify";
import IRepository from "../typescript/interfaces/uow/IRepository";

/**
 * @interface IModel => Contact for methods of Sequelize ORM.
 */
interface IModel {
  findAll(propsObj?: IPropsObj): Promise<any>;
  findByPk(id: number | string): Promise<any>;
  findOne(propsObj?: IPropsObj): Promise<any>;
  bulkCreate(data: any): Promise<any>;
  build(data: any): Promise<any>;
  count(propsObj?: IPropsObj): Promise<any>;
}

/**
 * @interface IPropObj => Props contract for additional parameter that is passed into query.
 */

interface IPropsObj {
  include?: {};
  limit?: number;
  offset?: number;
  where?: {};
  order?: {};
}

@injectable()
/**
 * @class Repository => Generic repository implemented based on Sequelize OMR library.
 */
class Repository implements IRepository {
  private _model: IModel;

  constructor(@unmanaged() model: any) {
    this._model = model;
  }

  /**
   * @function findAll => Find all entries from provided model. Returns array.
   * @param propsObj => additional properties that are passed into query: include.
   */

  async findAll(propsObj: IPropsObj | null = null): Promise<any> {
    if (propsObj == null) {
      return await this._model.findAll();
    }

    return await this._model.findAll(propsObj);
  }

  /**
   * @function findFirst => Find first entry from provided model.
   * @param propsObj => filter object that is used to pass some conditions to final query.
   */
  async findFirst(propsObj: IPropsObj | null = null): Promise<any> {
    if (propsObj == null) {
      return await this._model.findOne();
    }

    return await this._model.findOne(propsObj);
  }

  /**
   * @function findById => Find entity by its identifier.
   * @param id
   */
  async findById(id: number | string): Promise<any> {
    const result = await this._model.findOne({
      where: {
        id,
      },
    });

    return result;
  }

  /**
   * @function findLast => Search for last entry.
   */
  async findLast(): Promise<any> {
    const result = await this._model.findAll({
      limit: 1,
      where: {
        //your where conditions, or without them if you need ANY entry
      },
      order: [["createdAt", "DESC"]],
    });

    return result[0];
  }

  /**
   * @function findLatest => Find latest n items.
   * @param limit => How many latest items we want to show.
   */
  async findLatest(limit: number): Promise<any> {
    return await this._model.findAll({
      limit: limit,
      where: {
        //your where conditions, or without them if you need ANY entry
      },
      order: [["createdAt", "DESC"]],
    });
  }

  /**
   * @function getPaged => Find all entries for specified page id.
   * @param pageId => page identifier.
   * @param pageSize => size of each page.
   * @param propsObj => filter object that is used to pass some conditions to final query.
   */
  async getPaged(
    pageId: number,
    pageSize: number,
    propsObj: IPropsObj | null = null
  ): Promise<any> {
    if (pageId == 0) {
      throw new Error("Invalid page identifier");
    }

    const offset = (pageId - 1) * pageSize;
    const limit: number = pageSize;

    if (propsObj?.include != null) {
      return await this._model.findAll({
        limit,
        offset,
        include: propsObj.include,
        order: propsObj?.order,
        where: propsObj?.where,
      });
    } else {
      return await this._model.findAll({
        limit,
        offset,
        order: propsObj?.order,
        where: propsObj?.where,
      });
    }
  }

  add(data: any): void {
    this._model.bulkCreate(data);
  }

  /**
   * @function getCurrentModel => Get current model.
   */
  getCurrentModel() {
    return this._model;
  }

  /**
   * @function count => Get number of entires.
   * @param propsObj => filter object that is used to pass some conditions to final query.
   */
  async count(propsObj: IPropsObj | null = null): Promise<number> {
    if (propsObj == null) {
      return await this._model.count();
    }

    return await this._model.count(propsObj);
  }
}

export default Repository;
