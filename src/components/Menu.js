import React, { useRef, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Fab, makeStyles } from '@material-ui/core';
import { UnfoldMore } from '@material-ui/icons';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const useStyles = makeStyles((theme) => ({
	avatar1: {
		width: '19px',
		height: '23px',
	},
	avatar2: {
		width: '23px',
		height: '23px',
	},
	fab: {
		transform: 'rotate(90deg)',
		transition: '0.3s',
		background: '#a0bacc54',
	},
	fabReverse: {
		transform: 'rotate(0deg)',
		transition: '0.3s',
		background: '#a0bacc54',
	},
}));

const StyledMenu = withStyles({
	paper: {
		border: '1px solid #3d8da5',
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center',
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		'&:focus': {
			backgroundColor: theme.palette.primary.main,
			'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem);

export default function CustomizedMenus({ stringsData, columns }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const csvLink = useRef();
	const classes = useStyles();
	const [isOpen, setOpen] = useState(false);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setOpen(false);
	};

	const handleDownloadAsPdf = () => {
		const doc = new jsPDF();
		doc.autoTable({
			columns: [columns],
			body: [stringsData],
		});
		doc.save(`data ${new Date().toLocaleDateString()}.pdf`);
	};

	const handleDownloadAsExcel = () => {
		csvLink.current.link.click();
	};

	return (
		<div>
			<Fab
				aria-controls="customized-menu"
				aria-haspopup="true"
				size="small"
				variant="round"
				className={isOpen ? classes.fab : classes.fabReverse}
				onClick={handleClick}
			>
				<UnfoldMore />
			</Fab>
			<StyledMenu
				id="customized-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<StyledMenuItem onClick={handleDownloadAsPdf}>
					<ListItemIcon>
						<img alt="icon" src="/pdf.png" onClick={handleDownloadAsPdf} className={classes.avatar1} />
					</ListItemIcon>
					<ListItemText primary="Export as PDF" />
				</StyledMenuItem>
				<StyledMenuItem onClick={handleDownloadAsExcel}>
					<ListItemIcon>
						<CSVLink
							data={stringsData}
							filename={`data${new Date().toLocaleDateString()}.csv`}
							onClick={handleDownloadAsExcel}
							ref={csvLink}
							target="_blank"
						>
							<img alt="icon" src="/excel.png" className={classes.avatar2} />
						</CSVLink>
					</ListItemIcon>
					<ListItemText primary="Export as Excel" />
				</StyledMenuItem>
			</StyledMenu>
		</div>
	);
}
