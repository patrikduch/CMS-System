/**
 * @interface ISocialIconDto => Contract for Social icon data transfer object.
 */
interface ISocialIconDto {
  getCode(): string;
  getName(): string;
  getUrl(): string;
}

export default ISocialIconDto;
