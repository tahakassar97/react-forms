import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiFilledInput-root': {
			background: '#a0bacc54',
		},
	},
}));

export default function DatePicker({ selectedDate, title, handleDateChange }) {
	const theme = useTheme();
	const downSM = useMediaQuery(theme.breakpoints.down('sm'));
	const classes = useStyles();

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				id="date-picker-dialog"
				label={title}
				className={classes.root}
				InputAdornmentProps={downSM ? { style: { marginRight: '-20px' } } : null}
				style={downSM ? { width: '85%' } : { width: '95%' }}
				inputVariant={'filled'}
				variant="dialog"
				format="yyyy/M/dd"
				value={selectedDate}
				onChange={handleDateChange}
				KeyboardButtonProps={{
					'aria-label': 'change date',
				}}
			/>
		</MuiPickersUtilsProvider>
	);
}
