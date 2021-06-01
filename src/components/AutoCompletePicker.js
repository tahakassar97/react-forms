import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { FormHelperText, Grid } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiFilledInput-root': {
			background: '#a0bacc54',
		},
	},
}));

export default function ComboBox({ filterBy, data, selected, handleChange }) {
	const theme = useTheme();
	const downSM = useMediaQuery(theme.breakpoints.down('sm'));
	const classes = useStyles();
	return (
		<Grid container direction="row" display="flex" justify="center">
			<Autocomplete
				id="combo-box-demo"
				className={classes.root}
				options={data}
				value={selected}
				defaultValue={selected}
				filterSelectedOptions
				onChange={handleChange}
				style={downSM ? { width: '100%' } : { width: '95%' }}
				getOptionLabel={(option) => option}
				renderInput={(params) => (
					<>
						<TextField
							{...params}
							id="filled-basic"
							label={filterBy}
							value={selected}
							variant="filled"
							className={classes.root}
						/>
						<FormHelperText>Filter by {filterBy}</FormHelperText>
					</>
				)}
			/>
		</Grid>
	);
}
