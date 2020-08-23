import { HelmetData } from 'react-helmet';

/**
 * @class HelpmetIntegration =>  Helper method for manipulation with SEO with arbitrary library "react-helmet".
 */
export default class HelmetIntegration {

	/**
	 * @function getMeta => Renders all passed meta tags.
	 * @param helmetData  =>  React-helment data instance.
	 */
	public static getMeta(helmetData: HelmetData) {
		return helmetData.meta.toString();
	}

	/**
	 * @function getTitle => Renders title of application.
	 * @param helmetData  =>  React-helment data instance.
	 */
	public static getTitle(helmetData: HelmetData) {
		// Seo title fix
		const title = helmetData.title
			.toString()
			.replace('data-react-helmet="true"', '');
		return title;
	}
}
