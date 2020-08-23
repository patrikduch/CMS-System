import { createSelector } from "reselect";
import NewsletterSubscriptionContainerStateType from "../../../../typescript/types/shared/redux/containers/newsletter/Newsletter-Subscription-Container-State-Type";

/**
 * @function newsletterState => State separation that contains only newsletter info.
 * @param state  => Previous state object.
 */
const newsletterState = (state: NewsletterSubscriptionContainerStateType) =>
  state;

/**
 * @function getNewsletterInfo => Get cached newsletter info.
 */
const getNewsletterInfo = createSelector(
  [newsletterState],
  (n) => n.newsletterInfo
);

export { getNewsletterInfo };
