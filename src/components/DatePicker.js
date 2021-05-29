import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function DatePicker({ selectedDate, setSelectedDate, title }) {
	const theme = useTheme();
	const downSM = useMediaQuery(theme.breakpoints.down('sm'));

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker
					id="date-picker-dialog"
					label={title}
					style={downSM === false ? { width: '71%'} : null}
					inputVariant={'filled'}
					variant="dialog"
					format="MM / dd / yyyy"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
			</MuiPickersUtilsProvider>
		</>
	);
}
