/*  Type checking.*/

import EmailDataTypeProps from "../../types/newsletter/Newsletter-Data-Type-Props";

/**
 * @interface IEmailGeneratorService => Contract for email generation service.
 */
interface IEmailGeneratorService {
  generateNewsletterEmail(data: EmailDataTypeProps): Promise<string>;
}

export default IEmailGeneratorService;
