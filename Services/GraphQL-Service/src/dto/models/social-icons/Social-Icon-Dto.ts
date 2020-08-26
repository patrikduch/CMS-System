import ISocialIconDto from "../../../typescript/interfaces/dto/social-icons/ISocial-Icon-Dto";

/* Social icon`s name private field. */
const _name = new WeakMap();
/* Social icon`s code private field. */
const _code = new WeakMap();
/* Social icon`s url private field. */
const _url = new WeakMap();

/* Data transfer object to handle social icons  */
class SocialIconDto implements ISocialIconDto {
  /**
   * @function getName => Get name of social icon.
   */
  getName: () => string;

  /**
   * @function getCode => Get code of social icon.
   */
  getCode: () => string;

  /**
   * @function getUrl => Get url of social icon.
   */
  getUrl: () => string;

  constructor(name: string, code: string, url: string) {
    _name.set(this, name);
    _code.set(this, code);
    _url.set(this, url);

    this.getName = () => {
      return _name.get(this);
    };

    this.getCode = () => {
      return _code.get(this);
    };

    this.getUrl = () => {
      return _url.get(this);
    };
  }
}

export default SocialIconDto;
