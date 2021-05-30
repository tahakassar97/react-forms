import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
// import DropDown from '../components/DropDown';
import DatePicker from '../components/DatePicker';
import Paper from '../components/Paper';
import Table from '../components/Table';
import AutoCompletePicker from '../components/AutoCompletePicker';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
		eventTime: `2021-05-25
	18:50:33`,
		lcode: 'L150',
		lengthOfStay: '2',
		firstName: 'Saleem',
		lastName: 'Mustasa',
		phone: '647446667',
		parqId: 'R-206263H',
		desiredDate: '2021-06-03',
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
		firstName: 'Saleem',
		lastName: 'Mustasa',
		phone: '647446667',
		parqId: 'R-206263H',
		desiredDate: '2021-06-03',
		brand: 'EEEE',
		city: 'Ajax',
		typeOfJob: 'Long Distance',
		status: 'Success',
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
		brand: 'XXXX',
		city: 'Ajax',
		typeOfJob: 'Long Distance',
		status: 'Declined',
	},
];

export default function Main() {
	// const [brand, setBrand] = useState('');
	// const [city, setCity] = useState('');
	// const [job, setJob] = useState('');
	// const [status, setStatus] = useState('');
	const [selectedDate, setSelectedDate] = React.useState(new Date());
	const classes = useStyles();
	const theme = useTheme();
	const downSM = useMediaQuery(theme.breakpoints.down('xs'));

	// const handleBrand = (e) => {
	// 	setBrand(e.target.value);
	// };

	// const handleCity = (e) => {
	// 	setCity(e.target.value);
	// };

	// const handleJob = (e) => {
	// 	setJob(e.target.value);
	// };

	// const handleStatus = (e) => {
	// 	setStatus(e.target.value);
	// };

	return (
		<Container className={classes.root}>
			<Grid className={classes.container}>
				<Grid container direction="row" justify="space-around">
					<Grid item xs={5} md={3}>
						<AutoCompletePicker filterBy="Brand" />
					</Grid>
					<Grid item xs={5} md={3}>
						<AutoCompletePicker filterBy="City" />
					</Grid>
					<Grid item xs={5} md={3}>
						<AutoCompletePicker filterBy="Job" />
					</Grid>
					<Grid item xs={5} md={3}>
						<AutoCompletePicker filterBy="Status" />
					</Grid>
					<Grid item xs={5} sm={3} md={4}>
						<DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} title="Start Date" />
					</Grid>
					<Grid item xs={5} sm={3} md={4}>
						<DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} title="End Date" />
					</Grid>
					<Grid
						item
						xs={11}
						sm={3}
						md={4}
						direction="row"
						display="flex"
						justify="center"
						style={downSM ? { marginTop: '10px' } : null}
					>
						<AutoCompletePicker filterBy="Name" />
					</Grid>
				</Grid>
				<Grid container direction="row" justify="space-evenly">
					<Paper data={data2} />
				</Grid>
				<Table data_={data3} />
			</Grid>
		</Container>
	);
}
