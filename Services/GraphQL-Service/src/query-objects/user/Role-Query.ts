import { injectable } from 'inversify';

import IRoleQuery from '../../typescript/interfaces/query-objects/IRole-Query';

@injectable()
export default class RoleQuery implements IRoleQuery {
	constructor() {}
}
