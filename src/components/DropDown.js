import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiFilledInput-root': {
			background: '#a0bacc54',
		},
	},
}));

export default function DropDown({
	element,
	elements,
	handleChange,
	inputLabel,
	helperText,
	width,
	isDisabled,
}) {
	const data = elements.map((element) => {
		return <MenuItem value={element.id}>{element.title}</MenuItem>;
	});

	const classes = useStyles();

	return (
		<FormControl
			disabled={isDisabled}
			variant="filled"
			style={width ? { width: width } : { width: 150 }}
			className={!isDisabled ? classes.root : null}
		>
			<InputLabel id="demo-simple-select-filled-label">{inputLabel}</InputLabel>
			<Select
				labelId="demo-simple-select-filled-label"
				id="demo-simple-select-filled"
				value={element}
				native={false}
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
