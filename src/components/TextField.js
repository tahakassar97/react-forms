import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiFilledInput-root': {
			background: '#a0bacc54',
		},
	},
}));

export default function BasicTextFields({ required, label, width, isDisabled, icon }) {
	const classes = useStyles();

	return (
		<TextField
			required={required}
			id="filled-basic"
			disabled={isDisabled}
			label={label}
			InputProps={{
				endAdornment: icon,
			}}
			className={!isDisabled ? classes.root : null}
			variant="filled"
			style={width ? { width: width } : null}
		/>
	);
}
