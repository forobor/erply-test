import React from "react";
import "./ProfilePage.scss";

interface Props {}

const ProfilePage: React.FC<Props> = () => {
	return (
		<div className="page">
			<div className="content-profile">
				<h1>Profile</h1>
				<label>
					Name:
					<input />
				</label>
				<label>
					Email:
					<input />
				</label>
				<label>
					API token:
					<input />
				</label>
				<div className="button-container">
					<button>Save changes</button>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
