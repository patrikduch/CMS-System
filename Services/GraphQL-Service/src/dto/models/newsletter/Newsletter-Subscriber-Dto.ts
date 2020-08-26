import INewsletterSubscriberDto from "../../../typescript/interfaces/dto/newsletter/INewsletter-Subscriber-Dto";

/* Private fields. */
const _email = new WeakMap();
const _error = new WeakMap();

/**
 * @class ProjectDetailDto => Data transfer object that represents project details contains (projectName property).
 */
class NewsletterSubscriberDto implements INewsletterSubscriberDto {
  getHasError: () => boolean;
  setHasError: (hasError: boolean) => void;

  getEmail: () => string;
  setEmail: (email: string) => void;

  constructor(email: string) {
    /* Data initialization */
    _email.set(this, email);
    _error.set(this, false);

    /* Methods intitialization. */
    this.getEmail = () => {
      return _email.get(this);
    };

    this.setEmail = (email: string) => {
      _email.set(this, email);
    };

    this.getHasError = () => {
      return _error.get(this);
    };

    this.setHasError = (hasError: boolean) => {
      _error.set(this, hasError);
    };
  }
}

export default NewsletterSubscriberDto;
