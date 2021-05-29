import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function BasicTextFields({ required, label, width }) {
	return (
		<TextField
			required={required}
			id="filled-basic"
			label={label}
			variant="filled"
			style={width ? { width: width } : null}
		/>
	);
}
