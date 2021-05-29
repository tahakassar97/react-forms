import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { FormHelperText, Grid } from '@material-ui/core';

export default function ComboBox({ filterBy }) {
	return (
		<Grid container direction="row" display="flex" justify="center">
			<Autocomplete
				id="combo-box-demo"
				options={top100Films}
				style={{ width: '180px' }}
				getOptionLabel={(option) => option.title}
				renderInput={(params) => (
					<>
						<TextField {...params} label={filterBy} variant="filled" />
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
