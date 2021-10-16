import React from 'react';
import NewRegister from './new_register';
import OldRegister from './old_register';

interface Props {
	choice: boolean;
}

const Register: React.FC<Props> = ({ choice }) => (
	<div>
		<div>{choice ? <NewRegister /> : <OldRegister />}</div>
	</div>
);

export default Register;
