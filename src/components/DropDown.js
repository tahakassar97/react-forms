import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 130,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function DropDown({ element, elements, handleChange, inputLabel, helperText, width }) {
	const classes = useStyles();
	const data = elements.map((element) => {
		return <MenuItem value={element.id}>{element.title}</MenuItem>;
	});

	return (
		<FormControl
			variant="filled"
			className={width ? null : classes.formControl}
			style={width ? { width: width } : null}
		>
			<InputLabel id="demo-simple-select-filled-label">{inputLabel}</InputLabel>
			<Select
				labelId="demo-simple-select-filled-label"
				id="demo-simple-select-filled"
				value={element}
				onChange={handleChange}
			>
				<MenuItem value=" ">
					<em>All</em>
				</MenuItem>
				{data}
			</Select>
			<FormHelperText>{helperText ? `Filter by ${inputLabel}` : null}</FormHelperText>
		</FormControl>
	);
}
