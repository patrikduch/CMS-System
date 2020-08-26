export const TYPES = {
  // Unit of work design pattern
  IUnitOfWork: Symbol.for("IUnitOfWork"),

  IProjectDetailFasade: Symbol.for("IProjectDetailFasade"),
  IModuleFasade: Symbol.for("IModuleFasade"),

  IUserFasade: Symbol.for("IUserFasade"),
  IRoleQuery: Symbol.for("IRoleQuery"),
  IRoleQueryExecutor: Symbol.for("IRoleQueryExecutor"),

  IGenericRepository: Symbol.for("IGenericRepository"),
  IModel: Symbol.for("IModel"),
  ITypedBL: Symbol.for("ITypedBL"),

  //---  Fasades ---------------------------------------------
  IArticleFasade: Symbol.for("IArticleFasade"),
  IFeatureFasade: Symbol.for("IFeatureFasade"),
  IGallerySystemFasade: Symbol.for("IGallerySystemFasade"),
  IFileUploaderFasade: Symbol.for("IFileUploaderFasade"),
  IStatsFasade: Symbol.for("IStatsFasade"),
  IModuleFeatureFasade: Symbol.for("IModuleFeatureFasade"),
  INewsletterFasade: Symbol.for("INewsletterFasade"),
  ISocialIconsFasade: Symbol.for("ISocialIconsFasade"),
  IOwnerInfoFasade: Symbol.for("IOwnerInfoFasade"),

  // --- Services ---------------------------------------------
  IEmailGeneratorService: Symbol.for("IEmailGeneratorService"),
  IEncryptionService: Symbol.for("IEncryptionService"),
  IUserDataValidatorService: Symbol.for("IUserDataValidatorService"),
};
