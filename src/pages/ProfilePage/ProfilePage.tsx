import React, { useContext, useState, useEffect } from "react";
import "./ProfilePage.scss";
import { AuthContext } from "../../state/contexts/AuthContext";
import { submitData, simulateLoad } from "../../state/reducers/auth";

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
			dispatch(simulateLoad(true));
			const timeOut = setTimeout(() => {
				dispatch(simulateLoad(false));
				setName(stateName || "");
				setEmail(stateEmail || "");
				setApiToken(stateApiToken || "");
			}, 500);
			return () => {
				clearTimeout(timeOut);
			};
		},
		[ dispatch, stateName, stateEmail, stateApiToken ]
	);

	const saveChanges = () => {
		dispatch(simulateLoad(true));
		const timeOut = setTimeout(() => {
			dispatch(simulateLoad(false));
			dispatch(submitData(name, email, apiToken));
			setShowSaved(true);
		}, 500);

		return () => {
			clearTimeout(timeOut);
		};
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
