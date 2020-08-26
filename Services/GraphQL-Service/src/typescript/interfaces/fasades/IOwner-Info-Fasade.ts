import OwnerInfoDto from "../../../dto/models/project-detail/Owner-Info-Dto";
import IOwnerInfoDto from "../dto/owner-info/IOwner-Info-Dto";

export default interface IOwnerInfoFasade {
  getOwnerInfo(): Promise<IOwnerInfoDto>;
  updateCredentials(dto: OwnerInfoDto): Promise<OwnerInfoDto>;
}
