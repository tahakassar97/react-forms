import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import DropDown from '../components/DropDown';
import DatePicker from '../components/DatePicker';
import Paper from '../components/Paper';
import Table from '../components/Table';
import AutoCompletePicker from '../components/AutoCompletePicker';

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: 'white',
		margin: '60px 0px 60px 0px',
		minHeight: '620px',
		padding: '50px 5px 5px 5px',
		borderRadius: '5px'
	},
}));

const brands = [
	{
		id: 1,
		title: 'Cubeit',
	},
	{
		id: 2,
		title: 'PUPS',
	},
];

const cities = [
	{
		id: 1,
		title: 'Edmonton',
	},
	{
		id: 2,
		title: 'Brampton',
	},
	{
		id: 3,
		title: 'Ajax',
	},
	{
		id: 4,
		title: 'Manchester',
	},
];

const jobs = [
	{
		id: 1,
		title: 'Long Distance',
	},
	{
		id: 2,
		title: 'Move_Store',
	},
	{
		id: 3,
		title: 'Store',
	},
];

const states = [
	{
		id: 1,
		title: 'Decline',
	},
	{
		id: 2,
		title: 'New',
	},
	{
		id: 3,
		title: 'Completed',
	},
];

const data = ['Brands', 'Cities', 'Jobs', 'States'];

const data2 = [
	{
		title: 'TOTAL RECORDS',
		number: '10',
		job: 'jobs',
	},
	{
		title: 'SUCCESSFUL JOBS',
		number: '3 (30%)',
		job: 'jobs',
		details: {
			new: 'New 2 (20%)',
			declined: 'Declined 5 (50%)',
		},
	},
];

const data3 = [
	{
		eventTime: `2021-05-25
	18:50:33`,
		lcode: 'L150',
		lengthOfStay: '2',
		firstName: 'Saleem',
		lastName: 'Mustasa',
		phone: '647446683',
		parqId: 'R-206263H',
		desiredDate: '2021-06-03',
		brand: 'Cubeit',
		city: 'Ajax',
		typeOfJob: 'Long Distance',
		status: 'Declined',
	},
	{
		eventTime: `2021-05-25
	18:50:33`,
		lcode: 'L150',
		lengthOfStay: '2',
		firstName: 'Saleem',
		lastName: 'Mustasa',
		phone: '647446683',
		parqId: 'R-206263H',
		desiredDate: '2021-06-03',
		brand: 'Cubeit',
		city: 'Ajax',
		typeOfJob: 'Long Distance',
		status: 'Declined',
	},
	{
		eventTime: `2021-05-25
	18:50:33`,
		lcode: 'L150',
		lengthOfStay: '2',
		firstName: 'Saleem',
		lastName: 'Mustasa',
		phone: '647446683',
		parqId: 'R-206263H',
		desiredDate: '2021-06-03',
		brand: 'Cubeit',
		city: 'Ajax',
		typeOfJob: 'Long Distance',
		status: 'Declined',
	},
	{
		eventTime: `2021-05-25
	18:50:33`,
		lcode: 'L150',
		lengthOfStay: '2',
		firstName: 'Saleem',
		lastName: 'Mustasa',
		phone: '647446683',
		parqId: 'R-206263H',
		desiredDate: '2021-06-03',
		brand: 'Cubeit',
		city: 'Ajax',
		typeOfJob: 'Long Distance',
		status: 'Declined',
	},
];

export default function Main() {
	const [brand, setBrand] = useState('');
	const [city, setCity] = useState('');
	const [job, setJob] = useState('');
	const [status, setStatus] = useState('');
	const [selectedDate, setSelectedDate] = React.useState(new Date());
	const classes = useStyles();

	const handleBrand = (e) => {
		setBrand(e.target.value);
	};

	const handleCity = (e) => {
		setCity(e.target.value);
	};

	const handleJob = (e) => {
		setJob(e.target.value);
	};

	const handleStatus = (e) => {
		setStatus(e.target.value);
	};

	return (
		<Container>
			<Grid className={classes.container}>
				<Grid container direction="row" justify="space-around">
					<Grid item xs={6} md={3}>
						<DropDown
							elements={brands}
							element={brand}
							handleChange={handleBrand}
							inputLabel={data[0]}
							helperText={true}
						/>
					</Grid>
					<Grid item xs={6} md={3}>
						<DropDown
							elements={cities}
							element={city}
							handleChange={handleCity}
							inputLabel={data[1]}
							helperText={true}
						/>
					</Grid>
					<Grid item xs={6} md={3}>
						<DropDown
							elements={jobs}
							element={job}
							handleChange={handleJob}
							inputLabel={data[2]}
							helperText={true}
						/>
					</Grid>
					<Grid item xs={6} md={3}>
						<DropDown
							elements={states}
							element={status}
							handleChange={handleStatus}
							inputLabel={data[3]}
							helperText={true}
						/>
					</Grid>
					<Grid item xs={6} md={3} direction="row" display="flex" justify="center">
						<AutoCompletePicker filterBy="First Name" />
					</Grid>
					<Grid item xs={6} md={3} direction="row" display="flex" justify="center">
						<AutoCompletePicker filterBy="Last Name" />
					</Grid>
					<Grid item xs={6} md={3}>
						<DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} title="Start Date" />
					</Grid>
					<Grid item xs={6} md={3}>
						<DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} title="End Date" />
					</Grid>
				</Grid>
				<Grid container direction="row" justify="flex-start">
					<Paper data={data2} />
				</Grid>
				<Table data_={data3} />
			</Grid>
		</Container>
	);
}
