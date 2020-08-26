import ISocialIconDto from "../dto/social-icons/ISocial-Icon-Dto";

export default interface ISocialIconsFasade {
  getAll(): Promise<any>;
  updateSocialIcon(id: number, data: ISocialIconDto): Promise<ISocialIconDto>;
}
