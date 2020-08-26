export default interface IModuleFeatureFasade {
  getAllCategories(): Promise<any>;

  getAllModulesFeatures(): Promise<any>;

  getAllEnabledModules(): Promise<any>;

  getEnabledFeatures() : Promise<any>;

  toggleModuleState(id: number): Promise<any>;

  getPaggedModuleFeatures(pageId: number, pageSize: number): Promise<any>;

  getTotalCount(): Promise<number>;
}
