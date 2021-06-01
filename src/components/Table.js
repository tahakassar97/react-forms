import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { Fab, Grid, TableRow, TableSortLabel } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Menu from '../components/Menu';
import './styles.css';
import { Cancel, NavigateNext, FiberNewRounded, CheckCircle } from '@material-ui/icons';
import { useHistory } from 'react-router';
// import Box from '@material-ui/core/Box';
// import Collapse from '@material-ui/core/Collapse';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 650,
	},
	container: {
		height: '100%',
		marginTop: '2%',
		boxShadow: `0px 0px 1px ${theme.palette.primary.main}`,
	},
	font: {
		fontSize: '12px',
	},
	grayItem: {
		backgroundColor: 'rgba(180, 180, 180, 0.200)',
	},
	avatar: {
		cursor: 'pointer',
		width: '35px',
		height: '20px',
	},
	newIcon: {
		width: '30px',
		height: '30px',
		color: '#c1ce0a',
	},
	cancelIcon: {
		width: '30px',
		height: '30px',
		color: '#832d2d',
	},
	successIcon: {
		width: '30px',
		height: '30px',
		color: '#329740',
	},
	root: {
		float: 'right',
		paddingRight: '1.5%',
		margin: '10px 0px',
	},
	header: {
		fontSize: '11px',
		fontWeight: 'bold',
		lineHeight: '1.5',
	},
}));

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const headCells = [
	{ id: 'Event Time', numeric: true, disablePadding: false, label: 'Event Time' },
	{ id: 'LCode', numeric: true, disablePadding: false, label: 'LCode' },
	{ id: 'Length of stay', numeric: true, disablePadding: false, label: 'Length of stay' },
	{ id: 'First name', numeric: false, disablePadding: false, label: 'First name' },
	{ id: 'Last name', numeric: false, disablePadding: false, label: 'Last name' },
	{ id: 'Phone', numeric: true, disablePadding: false, label: 'Phone' },
	{ id: 'Parq quote ID', numeric: true, disablePadding: false, label: 'Parq quote ID' },
	{ id: 'Desired delivery date', numeric: true, disablePadding: false, label: 'Desired delivery date' },
	{ id: 'Brand', numeric: false, disablePadding: false, label: 'Brand' },
	{ id: 'City', numeric: false, disablePadding: false, label: 'City' },
	{ id: 'Type of job', numeric: false, disablePadding: false, label: 'Type of job' },
	{ id: 'Status', numeric: false, disablePadding: false, label: 'Status' },
];

const theme = createMuiTheme({
	overrides: {
		MuiTableCell: {
			root: {
				padding: '4px 8px',
			},
		},
	},
});

export default function SellerTable({ data_ }) {
	const classes = useStyles();
	const [order, setOrder] = React.useState('');
	const [orderBy, setOrderBy] = React.useState('');
	const history = useHistory();

	const columns = [
		'Event Time',
		'LCode',
		'Length of stay',
		'First name',
		'Last name',
		'Phone',
		'Parq quote ID',
		'Desired delivery date',
		'Brand',
		'City',
		'Type of job',
		'Status',
	];

	const stringsData = data_.map((row) => {
		return Object.values(row);
	});

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleOpenDetails = () => {
		history.push('/info');
	};

	stringsData.unshift(columns);

	const data = stableSort(data_, getComparator(order, orderBy)).map((row, index) => {
		return (
			<TableRow key={index} className={index % 2 === 0 ? classes.grayItem : null} hover tabIndex={-1}>
				<TableCell align="left" width="9%" className={classes.font} component="td" scope="row">
					{row.eventTime}
				</TableCell>
				<TableCell align="left" className={classes.font} component="td" scope="row">
					{row.lcode}
				</TableCell>
				<TableCell align="left" width="12%" className={classes.font} component="td" scope="row">
					{row.lengthOfStay}
				</TableCell>
				<TableCell align="left" width="10%" className={classes.font} component="td" scope="row">
					{row.firstName}
				</TableCell>
				<TableCell align="left" width="10%" className={classes.font} component="td" scope="row">
					{row.lastName}
				</TableCell>
				<TableCell align="left" width="2%" className={classes.font} component="td" scope="row">
					{row.phone}
				</TableCell>
				<TableCell align="left" width="23%" className={classes.font} component="td" scope="row">
					{row.parqId}
				</TableCell>
				<TableCell align="left" width="20%" className={classes.font} component="td" scope="row">
					{row.desiredDate}
				</TableCell>
				<TableCell align="left" className={classes.font} component="td" scope="row">
					{row.brand}
				</TableCell>
				<TableCell align="left" className={classes.font} component="td" scope="row">
					{row.city}
				</TableCell>
				<TableCell align="left" width="11%" className={classes.font} component="td" scope="row">
					{row.typeOfJob}
				</TableCell>
				<TableCell align="center" width="5%" className={classes.font} component="td" scope="row">
					{row.status.includes('New') ? (
						<FiberNewRounded className={classes.newIcon} />
					) : row.status.includes('Declined') ? (
						<Cancel className={classes.cancelIcon} />
					) : (
						<CheckCircle className={classes.successIcon} />
					)}
				</TableCell>
				<TableCell align="left" width="5%" className={classes.font} component="td" scope="row">
					<Fab color="primary" aria-label="edit" className={classes.avatar} onClick={handleOpenDetails}>
						<NavigateNext />
					</Fab>
				</TableCell>
			</TableRow>
		);
	});

	// TODO Collapsible table

	function EnhancedTableHead(props) {
		const { classes, order, orderBy, onRequestSort } = props;
		const createSortHandler = (property) => (event) => {
			onRequestSort(event, property);
		};

		return (
			<TableHead>
				<TableRow>
					{headCells.map((headCell) => (
						<TableCell
							key={headCell.id}
							padding={headCell.disablePadding ? 'none' : 'default'}
							sortDirection={orderBy === headCell.id ? order : false}
							align="left"
							className={classes.header}
						>
							<TableSortLabel
								active={orderBy === headCell.id}
								direction={orderBy === headCell.id ? order : 'asc'}
								onClick={createSortHandler(headCell.id)}
							>
								{headCell.label}
							</TableSortLabel>
						</TableCell>
					))}
					<TableCell> </TableCell>
				</TableRow>
			</TableHead>
		);
	}

	return (
		<>
			<Grid container display="flex" direction="row" justify="flex-end" className={classes.root}>
				<Menu stringsData={stringsData} columns={columns} />
			</Grid>
			<ThemeProvider theme={theme}>
				<TableContainer component={Paper} className={`${classes.container} uniqueName`}>
					<Table id="table" className={classes.table} stickyHeader aria-labelledby="tableTitle">
						<EnhancedTableHead
							classes={classes}
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
						/>
						<TableBody>{data}</TableBody>
					</Table>
				</TableContainer>
			</ThemeProvider>
		</>
	);
}
