import React, { useContext, useState, useEffect } from "react";
import "./ProfilePage.scss";
import { AuthContext } from "../../state/contexts/AuthContext";
import { submitChanges } from "../../state/reducers/auth";

interface Props {}

const ProfilePage: React.FC<Props> = () => {
	const {
		state: { name: stateName, email: stateEmail, apiToken: stateApiToken },
		dispatch
	} = useContext(AuthContext);
	const [ name, setName ] = useState<string>("");
	const [ email, setEmail ] = useState<string>("");
	const [ apiToken, setApiToken ] = useState<string>("");

	const [ showSaved, setShowSaved ] = useState<boolean>(false);

	useEffect(
		() => {
			setName(stateName || "");
			setEmail(stateEmail || "");
			setApiToken(stateApiToken || "");
		},
		[ stateName, stateEmail, stateApiToken ]
	);

	const saveChanges = () => {
		dispatch(submitChanges(name, email, apiToken));
		setShowSaved(true);
	};

	return (
		<div className="page">
			<div className="content-profile">
				<h1>Profile</h1>
				<label>
					Name:
					<input value={name} onChange={(e) => setName(e.target.value)} />
				</label>
				<label>
					Email:
					<input value={email} onChange={(e) => setEmail(e.target.value)} />
				</label>
				<label>
					API token:
					<input
						value={apiToken}
						onChange={(e) => setApiToken(e.target.value)}
					/>
				</label>
				<div className="button-container">
					<div className={showSaved ? "saved-success" : "saved-success-hidden"}>
						Saved!
					</div>
					<button onClick={saveChanges} className="profile-button">
						Save changes
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
