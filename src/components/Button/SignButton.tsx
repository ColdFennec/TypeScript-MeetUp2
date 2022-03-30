
import React, { useState } from 'react';

const SignButton = () => {

	const [disabled, setDisabled] = React.useState(false);
	const [stateSign, setStateSign] = useState("Sign up Event");
	
	const changeText = (text: React.SetStateAction<string>) => setStateSign(text);


	const signedEvent = () => {

		setDisabled(true);

	
		changeText("You signed up event")

	}

	return (
		<div className="sign-button">
			 <button className="signUp-button" onClick={signedEvent} disabled={disabled}>
        {stateSign}
      </button>
		</div>
	)
}

export default SignButton