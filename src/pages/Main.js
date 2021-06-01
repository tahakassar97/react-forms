import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
// import DropDown from '../components/DropDown';
import DatePicker from '../components/DatePicker';
import Paper from '../components/Paper';
import Table from '../components/Table';
import AutoCompletePicker from '../components/AutoCompletePicker';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const dateFormat = require('dateformat');

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: 'white',
		margin: '60px 0px 60px 0px',
		minHeight: '620px',
		maxWidth: '96%',
		padding: '50px 5px 5px 5px',
		borderRadius: '5px',
		float: 'right',
	},
}));

// const brands = [
// 	{
// 		id: 1,
// 		title: 'Cubeit',
// 	},
// 	{
// 		id: 2,
// 		title: 'PUPS',
// 	},
// ];

// const cities = [
// 	{
// 		id: 1,
// 		title: 'Edmonton',
// 	},
// 	{
// 		id: 2,
// 		title: 'Brampton',
// 	},
// 	{
// 		id: 3,
// 		title: 'Ajax',
// 	},
// 	{
// 		id: 4,
// 		title: 'Manchester',
// 	},
// ];

// const jobs = [
// 	{
// 		id: 1,
// 		title: 'Long Distance',
// 	},
// 	{
// 		id: 2,
// 		title: 'Move_Store',
// 	},
// 	{
// 		id: 3,
// 		title: 'Store',
// 	},
// ];

// const states = [
// 	{
// 		id: 1,
// 		title: 'Decline',
// 	},
// 	{
// 		id: 2,
// 		title: 'New',
// 	},
// 	{
// 		id: 3,
// 		title: 'Completed',
// 	},
// ];

// const data = ['Brands', 'Cities', 'Jobs', 'States'];

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
		eventTime: `2021-05-26
	18:50:33`,
		lcode: 'L170',
		lengthOfStay: '3',
		firstName: 'Ali',
		lastName: 'Mustasa',
		phone: '5547446667',
		parqId: 'R-2062655',
		desiredDate: '2021-06-26',
		brand: 'Cubeit',
		city: 'Ajax',
		typeOfJob: 'Long Distance',
		status: 'New',
	},
	{
		eventTime: `2021-05-25
	18:50:33`,
		lcode: 'L150',
		lengthOfStay: '2',
		firstName: 'Saleem',
		lastName: 'Mustasa',
		phone: '647446667',
		parqId: 'R-206263H',
		desiredDate: '2021-06-03',
		brand: 'AAA',
		city: 'Ajax',
		typeOfJob: 'Long Distance',
		status: 'Declined',
	},
	{
		eventTime: `2021-05-25
	18:50:33`,
		lcode: 'L150',
		lengthOfStay: '2',
		firstName: 'Linda',
		lastName: 'Mustasa',
		phone: '647446667',
		parqId: 'R-206232T',
		desiredDate: '2021-06-03',
		brand: 'EEEE',
		city: 'Manchester',
		typeOfJob: 'Move',
		status: 'Success',
	},
	{
		eventTime: `2021-05-25
	18:50:33`,
		lcode: 'L150',
		lengthOfStay: '4',
		firstName: 'Saleem',
		lastName: 'Mustasa',
		phone: '647446667',
		parqId: 'R-206263H',
		desiredDate: '2021-06-03',
		brand: 'XXXX',
		city: 'Ajax',
		typeOfJob: 'Long Distance',
		status: 'Declined',
	},
];

let brands = data3.map((brand) => {
	return brand.brand;
});

brands.unshift('All');

let cities = data3.map((city) => {
	return city.city;
});

cities.unshift('All');

let names = data3.map((name) => {
	return `${name.firstName} ${name.lastName}`;
});

names.unshift('All');

let jobs = data3.map((job) => {
	return job.typeOfJob;
});

jobs.unshift('All');

let states = data3.map((status) => {
	return status.status;
});

states.unshift('All');

const formatDate = (date) => {
	const d = dateFormat(date, 'yyyy/mm/dd');
	return d;
};

export default function Main() {
	const [brand, setBrand] = useState('');
	const [city, setCity] = useState('');
	const [job, setJob] = useState('');
	const [status, setStatus] = useState('');
	const [name, setName] = useState('');
	const [selectedStartDate, setSelectedStartDate] = useState(formatDate(new Date()));
	const [selectedEndDate, setSelectedEndDate] = useState(formatDate(new Date()));
	const classes = useStyles();
	const theme = useTheme();
	const downSM = useMediaQuery(theme.breakpoints.down('xs'));
	const [data, setData] = useState(data3);

	const handleBrand = (e, values) => {
		if (values !== 'All') {
			setBrand(values);
			const filteredData = data3.filter((row) => row.brand === values);
			setData(filteredData);
		}
		if (values === null || values === 'All') {
			setData(data3);
		}
	};

	const handleCity = (e, values) => {
		if (values !== 'All') {
			setCity(values);
			const filteredData = data3.filter((row) => row.city === values);
			setData(filteredData);
		}
		if (values === null || values === 'All') {
			setData(data3);
		}
	};

	const handleJob = (e, values) => {
		if (values !== 'All') {
			setJob(values);
			const filteredData = data3.filter((row) => row.typeOfJob === values);
			setData(filteredData);
		}
		if (values === null || values === 'All') {
			setData(data3);
		}
	};

	const handleStatus = (e, values) => {
		if (values !== 'All') {
			setStatus(values);
			const filteredData = data3.filter((row) => row.status === values);
			setData(filteredData);
		}
		if (values === null || values === 'All') {
			setData(data3);
		}
	};

	const handleName = (e, values) => {
		if (values !== 'All') {
			setName(values);
			const filteredData = data3.filter((row) => `${row.firstName} ${row.lastName}` === values);
			setData(filteredData);
		}
		if (values === null || values === 'All') {
			setData(data3);
		}
	};

	const handleStartDate = (date) => {
		setSelectedStartDate(formatDate(date));
	};

	const handleEndDate = (date) => {
		setSelectedEndDate(formatDate(date));
		let filteredData = [];
		for (let i of data3) {
			if (selectedStartDate <= formatDate(i.desiredDate) && formatDate(i.desiredDate) <= selectedEndDate)
				filteredData.push(i);
		}
		setData(filteredData);
	};

	return (
		<Container className={classes.root}>
			<Grid className={classes.container}>
				<Grid container direction="row" justify="space-around">
					<Grid item xs={5} md={2}>
						<AutoCompletePicker
							filterBy="Brand"
							data={brands}
							selected={brand}
							handleChange={handleBrand}
						/>
					</Grid>
					<Grid item xs={5} md={2}>
						<AutoCompletePicker filterBy="City" data={cities} selected={city} handleChange={handleCity} />
					</Grid>
					<Grid
						item
						xs={11}
						sm={3}
						md={2}
						direction="row"
						display="flex"
						justify="center"
						style={downSM ? { marginTop: '10px' } : null}
					>
						<AutoCompletePicker filterBy="Name" data={names} selected={name} handleChange={handleName} />
					</Grid>
					<Grid item xs={5} sm={3} md={1}>
						<AutoCompletePicker filterBy="Job" data={jobs} selected={job} handleChange={handleJob} />
					</Grid>
					<Grid item xs={5} sm={3} md={1}>
						<AutoCompletePicker
							filterBy="Status"
							data={states}
							selected={status}
							handleChange={handleStatus}
						/>
					</Grid>
					<Grid item xs={6} sm={4} md={2}>
						<DatePicker
							selectedDate={selectedStartDate}
							handleDateChange={handleStartDate}
							title="Start Date"
						/>
					</Grid>
					<Grid item xs={6} sm={4} md={2}>
						<DatePicker selectedDate={selectedEndDate} handleDateChange={handleEndDate} title="End Date" />
					</Grid>
				</Grid>
				<Grid container direction="row" justify="space-evenly">
					<Paper data={data2} />
				</Grid>
				<Table data_={data} />
			</Grid>
		</Container>
	);
}
