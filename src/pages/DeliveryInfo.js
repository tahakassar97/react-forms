import {
	Container,
	Grid,
	Typography,
	makeStyles,
	FormControl,
	InputLabel,
	FilledInput,
	Button,
} from '@material-ui/core';
import React, { useState } from 'react';
import RadioGroup from '../components/RadioGroup';
import TextField from '../components/TextField';
import DropDown from '../components/DropDown';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
const useStyles = makeStyles((theme) => ({
	headerText: {
		cursor: 'default',
		'&:hover': {
			borderRadius: '10px',
			animationName: 'example',
			animationDuration: '0.25s',
			borderLeft: `8px solid ${theme.palette.secondary.main}`,
			boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
		},
		maxWidth: '350px',
	},
	secondText: {
		cursor: 'default',
		maxWidth: '260px',
	},
	container: {
		backgroundColor: 'white',
		margin: '60px 0px 60px 0px',
		borderRadius: '5px',
		padding: '10px',
	},
}));

const inquiryTypes = [
	{
		id: 1,
		title: 'Inbound Call',
	},
];

const lCodes = [
	{
		id: 1,
		title: 'L150 Cubeit',
	},
];

const brands = [
	{
		id: 1,
		title: 'Cubeit',
	},
];

const jobs = [
	{
		id: 1,
		title: 'Long Distance',
	},
];

const lengths = [
	{
		id: 1,
		title: 2,
	},
];

const distances = [
	{
		id: 1,
		title: 'Local (<25 km)',
	},
];

const units = [
	{
		id: 1,
		title: 2,
	},
	{
		id: 2,
		title: 3,
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
];

export default function DeliveryInfo() {
	const classes = useStyles();
	const theme = useTheme();
	const history = useHistory();
	const downSM = useMediaQuery(theme.breakpoints.down('sm'));
	const [preferredLang, setPreferredLang] = useState('english');
	const [inquiryType, setInquiryType] = useState('');
	const [brand, setBrand] = useState('');
	const [lCode, setLCode] = useState('');
	const [job, setJob] = useState('');
	const [length, setLength] = useState('');
	const [distance, setDistance] = useState('');
	const [multiUnits, setMultiUnits] = useState('yes');
	const [unit, setUnit] = useState('');
	const [status, setStatus] = useState('');
	const [showedComments, setShowedComments] = useState(false);

	const handleInquiryType = (e) => {
		setInquiryType(e.target.value);
	};

	const handleLCode = (e) => {
		setLCode(e.target.value);
	};

	const handleBrand = (e) => {
		setBrand(e.target.value);
	};

	const handleJob = (e) => {
		setJob(e.target.value);
	};

	const handleLength = (e) => {
		setLength(e.target.value);
	};

	const handleDistance = (e) => {
		setDistance(e.target.value);
	};

	const handleUnit = (e) => {
		setUnit(e.target.value);
	};

	const handleStatus = (e) => {
		const value = e.target.value;
		if (value === 2) {
			setShowedComments(true);
		} else if (showedComments) {
			setShowedComments(false);
		}
		setStatus(value);
	};

	return (
		<Container component="main">
			<Grid container direction="row" justify="space-around" className={classes.container}>
				<Grid item xs={12}>
					<Typography
						variant="h6"
						className={classes.headerText}
						style={{
							marginTop: '5%',
							marginLeft: '4%',
						}}
					>
						Delivery Date Restriction - 2020/5/30
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h6" className={classes.secondText}>
						1. CLIENT INFO
					</Typography>
				</Grid>
				<Grid container spacing={1} style={{ marginTop: '2%' }}>
					<Grid item xs={6} sm={4} md={3}>
						<RadioGroup
							formLabel="Preferred Language"
							value1="English"
							value2="French"
							value={preferredLang}
							setValue={setPreferredLang}
						/>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<TextField required={true} label="Lead ID" />
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<TextField required={false} label="City" />
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<TextField required={false} label="Unit Size" />
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<TextField required={true} label="Park quote ID" />
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<DropDown
							inputLabel="Inquiry Type *"
							element={inquiryType}
							elements={inquiryTypes}
							handleChange={handleInquiryType}
							helperText={false}
							width={downSM ? '100%' : '68%'}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<DropDown
							inputLabel="LCode *"
							element={lCode}
							elements={lCodes}
							handleChange={handleLCode}
							helperText={false}
							width={downSM ? '100%' : '83%'}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<DropDown
							inputLabel="Brand *"
							element={brand}
							elements={brands}
							handleChange={handleBrand}
							helperText={false}
							width={downSM ? '100%' : '83%'}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField required={true} label="First Name" width={downSM ? '100%' : '83%'} />
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField required={true} label="Last Name" width={downSM ? '100%' : '83%'} />
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField required={true} label="Phone Number" width={downSM ? '100%' : '83%'} />
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField required={true} label="Email" width={downSM ? '100%' : '83%'} />
					</Grid>
					<Grid item xs={12} sm={6}>
						<DropDown
							inputLabel="Type Of Job *"
							element={job}
							elements={jobs}
							handleChange={handleJob}
							helperText={false}
							width={downSM ? '100%' : '83%'}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<DropDown
							inputLabel="Length Of Stay * (cycle)"
							element={length}
							elements={lengths}
							handleChange={handleLength}
							helperText={false}
							width={downSM ? '100%' : '83%'}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<DropDown
							inputLabel="Delivery Distance (DE)*"
							element={distance}
							elements={distances}
							handleChange={handleDistance}
							helperText={false}
							width={downSM ? '100%' : '83%'}
						/>
					</Grid>
					<Grid item xs={6}>
						<RadioGroup
							formLabel="Multiple Units"
							value1="Yes"
							value2="No"
							value={multiUnits}
							setValue={setMultiUnits}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<DropDown
							inputLabel="If Yes, how many?"
							element={unit}
							elements={units}
							handleChange={handleUnit}
							helperText={false}
							width={downSM ? '100%' : '83%'}
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth variant="filled">
							<InputLabel
								htmlFor="filled-adornment-amount"
								style={downSM === false ? { marginLeft: '4%', marginRight: '4%' } : null}
							>
								Notes
							</InputLabel>
							<FilledInput
								style={downSM === false ? { marginLeft: '4%', marginRight: '4%' } : null}
								id="filled-adornment-amount"
								multiline
								rows={4}
							/>
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<DropDown
							inputLabel="Status *"
							element={status}
							elements={states}
							handleChange={handleStatus}
							helperText={false}
							width={downSM ? '100%' : '83%'}
						/>
					</Grid>
					{showedComments ? (
						<Grid item xs={12}>
							<FormControl fullWidth variant="filled">
								<InputLabel
									htmlFor="filled-adornment-amount"
									style={downSM === false ? { marginLeft: '4%', marginRight: '4%' } : null}
								>
									Comments
								</InputLabel>
								<FilledInput
									style={downSM === false ? { marginLeft: '4%', marginRight: '4%' } : null}
									id="filled-adornment-amount"
									multiline
									rows={4}
								/>
							</FormControl>
						</Grid>
					) : null}
					<Grid
						container
						direction="row"
						display="flex"
						justify="space-evenly"
						style={{ margin: '10px 0px 40px 0px' }}
					>
						<Grid item xs={5}>
							<Button
								variant="contained"
								color="primary"
								fullWidth
								className={classes.button}
								endIcon={<EditRoundedIcon />}
							>
								Update
							</Button>
						</Grid>
						<Grid item xs={5}>
							<Button
								variant="contained"
								color="primary"
								fullWidth
								onClick={() => {
									history.push('/');
								}}
								className={classes.button}
								startIcon={<ArrowBackIosRoundedIcon />}
							>
								Back to list
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}
