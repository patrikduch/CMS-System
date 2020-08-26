/**
 * @interface IProjectDetailDto => Contact for Project detail data trasnfer object.
 */
interface IProjectDetailDto {
  getProjectName(): string;
  setProjectName(projectName: string): void;

  getThemeCode(): string;
  setThemeCode(themeCode: string): void;

  getCompanyName(): string;
  setCompanyName(companyName: string): void;

  getDomainUrl(): string;
  setDomainUrl(domainUrl: string): void;
}

export default IProjectDetailDto;
