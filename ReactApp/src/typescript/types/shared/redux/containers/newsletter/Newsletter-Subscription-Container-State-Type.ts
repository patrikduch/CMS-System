/**
 * @type NewsletterSubscriptionContainerStateType => Type anotation for Redux container that handels Newsletter subscription. Respective adding new subscriber to the IS.
 */
type NewsletterSubscriptionContainerStateType = {
  newsletterInfo: {
    email: string;
  };
};

export default NewsletterSubscriptionContainerStateType;
