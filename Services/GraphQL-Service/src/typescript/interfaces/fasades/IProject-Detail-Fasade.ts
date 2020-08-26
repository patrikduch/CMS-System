import IProjectDetailDto from "../../../typescript/interfaces/dto/project-detail/IProject-Detail-Dto";

export default interface IProjectDetailFasade {
  getProjectDetail(): Promise<IProjectDetailDto>;
  updateProjectDetail(dto: IProjectDetailDto): Promise<any>;
  getAllThemes(): Promise<any>;
}
