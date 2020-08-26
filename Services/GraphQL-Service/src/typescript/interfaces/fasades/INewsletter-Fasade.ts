import INewsletterSubscriberDto from "../dto/newsletter/INewsletter-Subscriber-Dto";

/**
 * @interface INewsletterFasade => Contract for "Newsletter" fasade.
 */
interface INewsletterFasade {
  addSubscriber(email: string): Promise<INewsletterSubscriberDto>;
  sendSubscription() : Promise<void>;
}

export default INewsletterFasade;
