import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';
import './styles.css';

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
		fontSize: '13px',
	},
	grayItem: {
		backgroundColor: 'rgba(180, 180, 180, 0.200)',
	},
}));

export default function SellerTable({ data_ }) {
	const classes = useStyles();

	const data = data_.map((row, index) => {
		return (
			<TableRow key={index} className={index % 2 === 0 ? classes.grayItem : null}>
				<TableCell align="left" width="4%" className={classes.font}>
					<NavLink to="/info" className="link">
						{row.eventTime}
					</NavLink>
				</TableCell>
				<TableCell align="left" className={classes.font}>
					{row.lcode}
				</TableCell>
				<TableCell align="left" width="12%" className={classes.font}>
					{row.lengthOfStay}
				</TableCell>
				<TableCell align="left" width="10%" className={classes.font}>
					{row.firstName}
				</TableCell>
				<TableCell align="left" width="10%" className={classes.font}>
					{row.lastName}
				</TableCell>
				<TableCell align="left" width="2%" className={classes.font}>
					{row.phone}
				</TableCell>
				<TableCell align="left" width="10%" className={classes.font}>
					{row.parqId}
				</TableCell>
				<TableCell align="left" width="15%" className={classes.font}>
					{row.desiredDate}
				</TableCell>
				<TableCell align="left" className={classes.font}>
					{row.brand}
				</TableCell>
				<TableCell align="left" className={classes.font}>
					{row.city}
				</TableCell>
				<TableCell align="left" width="11%" className={classes.font}>
					{row.typeOfJob}
				</TableCell>
				<TableCell align="left" width="5%" className={classes.font}>
					{row.status}
				</TableCell>
			</TableRow>
		);
	});

	return (
		<TableContainer component={Paper} className={`${classes.container} uniqueName`}>
			<Table className={classes.table} stickyHeader aria-label="sticky table">
				<TableHead>
					<TableRow>
						<TableCell align="left" className={classes.font}>
							Event Time
						</TableCell>
						<TableCell align="left" className={classes.font}>
							LCode
						</TableCell>
						<TableCell align="left" className={classes.font}>
							Length of stay
						</TableCell>
						<TableCell align="left" className={classes.font}>
							First name
						</TableCell>
						<TableCell align="left" className={classes.font}>
							Last name
						</TableCell>
						<TableCell align="left" className={classes.font}>
							Phone
						</TableCell>
						<TableCell align="left" className={classes.font}>
							Parq quote ID
						</TableCell>
						<TableCell align="left" className={classes.font}>
							Desired delivery date
						</TableCell>
						<TableCell align="left" className={classes.font}>
							Brand
						</TableCell>
						<TableCell align="left" className={classes.font}>
							City
						</TableCell>
						<TableCell align="left" className={classes.font}>
							Type of job
						</TableCell>
						<TableCell align="left" className={classes.font}>
							Status
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{data}</TableBody>
			</Table>
		</TableContainer>
	);
}
