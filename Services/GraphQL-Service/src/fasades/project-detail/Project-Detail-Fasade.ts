import IProjectDetailFasade from "../../typescript/interfaces/fasades/IProject-Detail-Fasade";
import { injectable, inject } from "inversify";
import { TYPES } from "../../ioc/types";
import IProjectDetailUpdateDto from "../../typescript/interfaces/dto/project-detail/IProject-Detail-Dto";
import IUnitOfWork from "../../typescript/interfaces/uow/IUnitOfWork";

/* Required models */
import OwnerInfoModel from "../../models/project-detail/OwnerInfo";
import ProjectDetailModel from "../../models/project-detail/ProjectDetail";
import ThemeModel from "../../models/project-detail/Theme";

/* Required Dtos */
import ProjectDetailDto from "../../dto/models/project-detail/Project-Detail-Dto";

/* Type checking. */
import IProjectDetailDto from "../../typescript/interfaces/dto/project-detail/IProject-Detail-Dto";

@injectable()
export default class ProjectDetailFasade implements IProjectDetailFasade {
  private _uow!: IUnitOfWork;

  constructor(
    @inject(TYPES.IUnitOfWork)
    private uow: IUnitOfWork
  ) {
    /* Save unit of work instance */
    this._uow = uow;
  }

  /**
   * @function getProjectDetail => Get basic information about project such as project name, chosen template etc.
   */
  async getProjectDetail(): Promise<IProjectDetailDto> {
    const companyData = await this._uow
      .getRepository(OwnerInfoModel)
      .findFirst();

    // Get project detail
    const projecDetailEntity = await this._uow
      .getRepository(ProjectDetailModel)
      .findFirst();

    const themes = await this._uow.getRepository(ThemeModel).findFirst({
      where: {
        projectId: projecDetailEntity.id,
        isDefault: true,
      },

      include: [
        {
          model: ProjectDetailModel,
          where: {
            id: companyData.projectId,
          },
        },
      ],
    });

    const projectDetailDto = new ProjectDetailDto();
    projectDetailDto.setProjectName(themes.ProjectDetail.name);
    projectDetailDto.setThemeCode(themes.code);
    projectDetailDto.setCompanyName(companyData.companyName);
    projectDetailDto.setDomainUrl(themes.ProjectDetail.domainUrl);

    return projectDetailDto;
  }

  async getAllThemes(): Promise<any> {
    const projectDetail = await this._uow
      .getRepository(ProjectDetailModel)
      .findFirst();
    const entity = await this._uow.getRepository(ThemeModel).findAll({
      where: {
        projectId: projectDetail.id,
      },
    });

    return entity;
  }

  /* Update project detail which contains (project name property.)
   * This property determinates main title which is needed for SEO.
   */
  async updateProjectDetail(
    dto: IProjectDetailUpdateDto
  ): Promise<ProjectDetailDto> {
    const entity: { name: string } = await this._uow
      .getRepository(ProjectDetailModel)
      .findFirst();

    // Change fetched model property
    entity.name = dto.getProjectName();

    /* Add repository into tracking state. */
    this._uow.trackRepository(entity);

    // Save changes to the database
    this._uow.saveChanges();

    const projectDetailDto = new ProjectDetailDto();
    projectDetailDto.setProjectName(entity.name);

    return projectDetailDto;
  }

  async updateProjectTheme(id: number): Promise<any> {
    // Reset isDefault for all themes
    const themesEntity: any[] = await this._uow
      .getRepository(ThemeModel)
      .findAll();

    themesEntity.forEach((arg: any) => {
      arg.isDefault = false;
      arg.save();
    });

    // Get project detail entity
    const projectDetailEntity = await this._uow
      .getRepository(ProjectDetailModel)
      .findFirst();

    // Get theme entity for update
    const themeEntity = await this._uow.getRepository(ThemeModel).findAll({
      where: {
        id: id,
        projectId: projectDetailEntity.id,
      },
    });

    themeEntity[0].isDefault = true;
    themeEntity[0].save();

    return themeEntity[0];
  }
}
