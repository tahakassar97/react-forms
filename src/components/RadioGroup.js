import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup({ formLabel, value1, value2, value, setValue, isDisabled }) {
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<FormControl component="fieldset">
			<FormLabel component="legend" disabled={isDisabled}>
				{formLabel}*
			</FormLabel>
			<RadioGroup
				aria-label={formLabel.toLowerCase()}
				value={value}
				onChange={!isDisabled ? handleChange : null}
				style={{ display: 'flex', flexDirection: 'row' }}
			>
				<FormControlLabel value={value1.toLowerCase()} control={<Radio required={true} />} label={value1} />
				<FormControlLabel value={value2.toLowerCase()} control={<Radio required={true} />} label={value2} />
			</RadioGroup>
		</FormControl>
	);
}
