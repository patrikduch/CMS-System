/**
 * @interface INewsletterSubscriberDto => Contract for NewsletterSubscriber data transfer object.
 */
interface INewsletterSubscriberDto {
  getEmail: () => string;
  setEmail: (email: string) => void;

  getHasError: () => boolean;
  setHasError: (hasError: boolean) => void;
}

export default INewsletterSubscriberDto;
