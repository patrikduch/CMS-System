import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";

/* Services */
import IEncryptionService from "../typescript/interfaces/services/IEncryption-Service";
import EncryptionService from "../services/Encryption-Service";

import IProjectDetailFasade from "../typescript/interfaces/fasades/IProject-Detail-Fasade";
import ProjectDetailFasade from "../fasades/project-detail/Project-Detail-Fasade";
import IUserFasade from "../typescript/interfaces/fasades/IUser-Fasade";
import UserFasade from "../fasades/users/User-Fasade";
import IRoleQueryExecutor from "../typescript/interfaces/query-executors/user/IRole-Query-Executor";
import RoleQueryExecutor from "../query-executor/user/Role-Query-Executor";
import IArticleFasade from "../typescript/interfaces/fasades/IArticle-Fasade";
import ArticleFasade from "../fasades/article-system/Article-Fasade";
import IFileUploaderFasade from "../typescript/interfaces/fasades/IFile-Uploader-Fasade";
import FileUploaderFasade from "../fasades/file-uploads/File-Uploader-Fasade";
import IUnitOfWork from "../typescript/interfaces/uow/IUnitOfWork";
import UnitOfWork from "../uow/UnitOfWork";

import IStatsFasade from "../typescript/interfaces/fasades/IStats-Fasade";
import StatsFasade from "../fasades/stats/Stats-Fasade";
import ISocialIconsFasade from "../typescript/interfaces/fasades/ISocial-Icons-Fasade";

import SocialIconsFasade from "../fasades/social-icons/Social-Icons-Fasade";
import IModuleFeatureFasade from "../typescript/interfaces/fasades/IModule-Feature-Fasade";
import ModuleFeatureFasade from "../fasades/module-system/Module-Feature-Fasade";
import IOwnerInfoFasade from "../typescript/interfaces/fasades/IOwner-Info-Fasade";
import OwnerInfoFasade from "../fasades/owner-info/Owner-Info-Fasade";
import IGallerySystemFasade from "../typescript/interfaces/fasades/IGallery-System-Fasade";
import GallerySystemFasade from "../fasades/gallery-system/Gallery-System-Fasade";
import INewsletterFasade from "../typescript/interfaces/fasades/INewsletter-Fasade";
import NewsletterSubscriber from "../models/newsletter/Newsletter-Subscriber";
import NewsletterFasade from "../fasades/newsletter/Newsletter-Fasade";
import IEmailGeneratorService from "../typescript/interfaces/services/IEmail-Generator-Service";
import EmailGeneratorService from "../services/e-mails/Email-Generator-Service";

const container = new Container();

/* Generic bindings */
container.bind<IUnitOfWork>(TYPES.IUnitOfWork).to(UnitOfWork).inRequestScope();
/* 
  Fasades bindings
*/
container
  .bind<IStatsFasade>(TYPES.IStatsFasade)
  .to(StatsFasade)
  .inRequestScope();

container
  .bind<IProjectDetailFasade>(TYPES.IProjectDetailFasade)
  .to(ProjectDetailFasade)
  .inRequestScope();

container
  .bind<IModuleFeatureFasade>(TYPES.IModuleFeatureFasade)
  .to(ModuleFeatureFasade)
  .inRequestScope();

container
  .bind<INewsletterFasade>(TYPES.INewsletterFasade)
  .to(NewsletterFasade)
  .inRequestScope();

container.bind<IUserFasade>(TYPES.IUserFasade).to(UserFasade).inRequestScope();

container
  .bind<IRoleQueryExecutor>(TYPES.IRoleQueryExecutor)
  .to(RoleQueryExecutor)
  .inRequestScope();

container
  .bind<IArticleFasade>(TYPES.IArticleFasade)
  .to(ArticleFasade)
  .inRequestScope();

container
  .bind<ISocialIconsFasade>(TYPES.ISocialIconsFasade)
  .to(SocialIconsFasade)
  .inRequestScope();

container
  .bind<IFileUploaderFasade>(TYPES.IFileUploaderFasade)
  .to(FileUploaderFasade)
  .inRequestScope();

container
  .bind<IGallerySystemFasade>(TYPES.IGallerySystemFasade)
  .to(GallerySystemFasade)
  .inRequestScope();

container
  .bind<IOwnerInfoFasade>(TYPES.IOwnerInfoFasade)
  .to(OwnerInfoFasade)
  .inRequestScope();

/* Services bindings */
container
  .bind<IEmailGeneratorService>(TYPES.IEmailGeneratorService)
  .to(EmailGeneratorService)
  .inRequestScope();

container
  .bind<IEncryptionService>(TYPES.IEncryptionService)
  .to(EncryptionService)
  .inRequestScope();

export default container;
