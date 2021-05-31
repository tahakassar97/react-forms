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

export default function ComboBox({ filterBy }) {
	const theme = useTheme();
	const downSM = useMediaQuery(theme.breakpoints.down('sm'));
	const classes = useStyles();

	return (
		<Grid container direction="row" display="flex" justify="center">
			<Autocomplete
				id="combo-box-demo"
				className={classes.root}
				options={top100Films}
				style={downSM ? { width: '100%' } : { width: '95%' }}
				getOptionLabel={(option) => option.title}
				renderInput={(params) => (
					<>
						<TextField
							{...params}
							id="filled-basic"
							label={filterBy}
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

const top100Films = [
	{ title: 'The Shawshank Redemption', year: 1994 },
	{ title: 'The Godfather', year: 1972 },
	{ title: 'The Godfather: Part II', year: 1974 },
	{ title: 'The Dark Knight', year: 2008 },
	{ title: '12 Angry Men', year: 1957 },
	{ title: "Schindler's List", year: 1993 },
	{ title: 'Pulp Fiction', year: 1994 },
	{ title: 'The Lord of the Rings: The Return of the King', year: 2003 },
];
