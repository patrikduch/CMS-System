import React from "react";
import PageTitle from "../../../components/common/title/Page-Title";

/**
 * @function AdminLoginHeader => Component that represents title for admin login form.
 */
const AdminLoginHeader: React.FC = () => {
	return (
		<PageTitle isCentered={true}>
			Přihlášení
		</PageTitle>
	  );
}

export default AdminLoginHeader;
