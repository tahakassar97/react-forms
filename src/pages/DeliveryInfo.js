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
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import LocationCityRoundedIcon from '@material-ui/icons/LocationCityRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PhoneIphoneRoundedIcon from '@material-ui/icons/PhoneIphoneRounded';
import AlternateEmailRoundedIcon from '@material-ui/icons/AlternateEmailRounded';
import NoteRoundedIcon from '@material-ui/icons/NoteRounded';
import CommentIcon from '@material-ui/icons/Comment';
import MenuIcon from '@material-ui/icons/Menu';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import TimelineIcon from '@material-ui/icons/Timeline';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

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
		maxWidth: '240px',
	},
	container: {
		backgroundColor: 'white',
		margin: '60px 0px 60px 0px',
		borderRadius: '5px',
		padding: '10px',
	},
	root: {
		'& .MuiFilledInput-root': {
			background: '#a0bacc54',
		},
	},
}));

// const inquiryTypes = [
// 	{
// 		id: 1,
// 		title: 'Inbound Call',
// 	},
// ];

// const lCodes = [
// 	{
// 		id: 1,
// 		title: 'L150 Cubeit',
// 	},
// ];

// const brands = [
// 	{
// 		id: 1,
// 		title: 'Cubeit',
// 	},
// ];

// const jobs = [
// 	{
// 		id: 1,
// 		title: 'Long Distance',
// 	},
// ];

// const lengths = [
// 	{
// 		id: 1,
// 		title: 2,
// 	},
// ];

// const distances = [
// 	{
// 		id: 1,
// 		title: 'Local (<25 km)',
// 	},
// ];

// const units = [
// 	{
// 		id: 1,
// 		title: 2,
// 	},
// 	{
// 		id: 2,
// 		title: 3,
// 	},
// ];

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
	// const [inquiryType, setInquiryType] = useState('');
	// const [brand, setBrand] = useState('');
	// const [lCode, setLCode] = useState('');
	// const [job, setJob] = useState('');
	// const [length, setLength] = useState('');
	// const [distance, setDistance] = useState('');
	// const [unit, setUnit] = useState('');
	const [status, setStatus] = useState('');
	const [multiUnits, setMultiUnits] = useState('yes');
	const [showedComments, setShowedComments] = useState(false);

	// const handleInquiryType = (e) => {
	// 	setInquiryType(e.target.value);
	// };

	// const handleLCode = (e) => {
	// 	setLCode(e.target.value);
	// };

	// const handleBrand = (e) => {
	// 	setBrand(e.target.value);
	// };

	// const handleJob = (e) => {
	// 	setJob(e.target.value);
	// };

	// const handleLength = (e) => {
	// 	setLength(e.target.value);
	// };

	// const handleDistance = (e) => {
	// 	setDistance(e.target.value);
	// };

	// const handleUnit = (e) => {
	// 	setUnit(e.target.value);
	// };

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
						CLIENT INFO
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
					<Grid item xs={6} sm={4} md={3} display="flex" alignItems="center">
						<TextField
							required={true}
							label="Lead ID"
							width={downSM ? '100%' : '75%'}
							isDisabled={true}
							icon={<DescriptionRoundedIcon />}
						/>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<TextField
							required={false}
							label="City"
							isDisabled={true}
							width={downSM ? '100%' : '75%'}
							icon={<LocationCityRoundedIcon />}
						/>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<TextField
							required={false}
							label="Unit Size"
							isDisabled={true}
							icon={<CodeRoundedIcon />}
							width={downSM ? '100%' : '75%'}
						/>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<TextField
							required={true}
							label="Park quote ID"
							isDisabled={true}
							icon={<DescriptionRoundedIcon />}
							width={downSM ? '100%' : '75%'}
						/>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<TextField
							label="Inquiry Type *"
							isDisabled={true}
							width={downSM ? '100%' : '75%'}
							icon={<MenuIcon />}
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<TextField
							label="LCode *"
							isDisabled={true}
							width={downSM ? '100%' : '75%'}
							icon={<ConfirmationNumberIcon />}
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<TextField
							label="Brand *"
							isDisabled={true}
							width={downSM ? '100%' : '75%'}
							icon={<BrandingWatermarkIcon />}
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<TextField
							required={true}
							isDisabled={true}
							label="First Name"
							icon={<AccountCircleRoundedIcon />}
							width={downSM ? '100%' : '75%'}
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<TextField
							required={true}
							isDisabled={true}
							icon={<AccountCircleRoundedIcon />}
							label="Last Name"
							width={downSM ? '100%' : '75%'}
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<TextField
							required={true}
							isDisabled={true}
							label="Phone Number"
							icon={<PhoneIphoneRoundedIcon />}
							width={downSM ? '100%' : '75%'}
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<TextField
							required={true}
							icon={<AlternateEmailRoundedIcon />}
							isDisabled={true}
							label="Email"
							width={downSM ? '100%' : '75%'}
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<TextField
							required={true}
							isDisabled={true}
							label="Type Of Job"
							icon={<MenuIcon />}
							width={downSM ? '100%' : '75%'}
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<TextField
							isDisabled={true}
							label="Length Of Stay*"
							icon={<TimelineIcon />}
							width={downSM ? '100%' : '75%'}
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<TextField
							isDisabled={true}
							label="Delivery Distance*"
							icon={<InsertChartIcon />}
							width={downSM ? '100%' : '75%'}
						/>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<RadioGroup
							formLabel="Multiple Units"
							value1="Yes"
							value2="No"
							value={multiUnits}
							isDisabled={true}
							setValue={setMultiUnits}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<TextField
							inputLabel="If Yes, how many?"
							isDisabled={true}
							label="If Yes, how many?"
							icon={<FormatListBulletedIcon />}
							width={downSM ? '100%' : '88%'}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<DropDown
							inputLabel="Status *"
							element={status}
							elements={states}
							handleChange={handleStatus}
							helperText={false}
							width={downSM ? '100%' : '88%'}
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth variant="filled">
							<InputLabel
								htmlFor="filled-adornment-amount"
								style={downSM === false ? { marginLeft: '3%', marginRight: '3%' } : null}
							>
								Notes
							</InputLabel>
							<FilledInput
								endAdornment={<NoteRoundedIcon position="end" />}
								style={downSM === false ? { marginLeft: '3%', marginRight: '3%' } : null}
								id="filled-adornment-amount"
								disabled={true}
								multiline
								rows={4}
							/>
						</FormControl>
					</Grid>
					{showedComments ? (
						<Grid item xs={12}>
							<FormControl fullWidth variant="filled" className={classes.root}>
								<InputLabel
									htmlFor="filled-adornment-amount"
									style={downSM === false ? { marginLeft: '3%', marginRight: '3%' } : null}
								>
									Comments
								</InputLabel>
								<FilledInput
									endAdornment={<CommentIcon style={{ fill: 'gray' }} />}
									style={downSM === false ? { marginLeft: '3%', marginRight: '3%' } : null}
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
						style={{ margin: '10px 7px 40px 7px' }}
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
						<Grid item xs={6}>
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
