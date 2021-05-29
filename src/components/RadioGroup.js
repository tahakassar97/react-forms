import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup({ formLabel, value1, value2, value, setValue }) {
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<FormControl component="fieldset">
			<FormLabel component="legend">{formLabel}*</FormLabel>
			<RadioGroup
				aria-label={formLabel.toLowerCase()}
				value={value}
				onChange={handleChange}
				style={{ display: 'flex', flexDirection: 'row' }}
			>
				<FormControlLabel value={value1.toLowerCase()} control={<Radio required={true} />} label={value1} />
				<FormControlLabel value={value2.toLowerCase()} control={<Radio required={true} />} label={value2} />
			</RadioGroup>
		</FormControl>
	);
}
