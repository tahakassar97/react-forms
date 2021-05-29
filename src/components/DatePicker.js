import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default function DatePicker({ selectedDate, setSelectedDate, title }) {
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker
					id="date-picker-dialog"
					label={title}
					style={{ width: '180px' }}
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
