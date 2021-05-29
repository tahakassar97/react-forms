import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		borderRadius: '3px',
		minWidth: '290px',
		height: '60px',
		marginTop: '10px',
		borderLeft: `5px solid rgb(155, 153, 153)`,
		boxShadow: `1px 1px 4px rgba(220, 220, 220, 0.836)`,
		marginRight: '40px',
	},
	margin: {
		margin: '4px',
	},
	root2: {
		display: 'flex',
		borderRadius: '3px',
		minWidth: '290px',
		height: '60px',
		marginTop: '10px',
		borderLeft: `5px solid rgb(30, 104, 40)`,
		boxShadow: `1px 1px 4px rgba(220, 220, 220, 0.836)`,
	},
}));

const styles = {
	paperContainer: {
		backgroundImage: `url(${'/bac.jpg'})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'right',
	},
};
export default function Variants({ data }) {
	const classes = useStyles();

	return (
		<>
			{data.map((element, index) => {
				return (
					<div className={index === 0 ? classes.root : classes.root2} style={styles.paperContainer}>
						<div>
							<Grid container direction="row" justify="space-between" alignItems="center">
								<Grid item>
									<Grid container justify="space-between">
										<Typography gutterBottom variant="body2" className={classes.margin}>
											{element.title}
										</Typography>
									</Grid>
									<Grid container>
										<Typography
											display="inline"
											variant="body1"
											color="textSecondary"
											className={classes.margin}
										>
											{element.number}
										</Typography>
										<Typography
											display="inline"
											variant="body2"
											color="textSecondary"
											component="p"
											className={classes.margin}
											style={{ marginLeft: '2px', marginTop: '5px' }}
										>
											{element.job}
										</Typography>
									</Grid>
								</Grid>
								{index !== 0 ? (
									<>
										<Grid>
											<div
												style={{
													backgroundColor: 'rgba(255, 217, 0, 0.466)',
													marginBottom: '3px',
													borderRadius: '4px',
													marginLeft: '30px',
												}}
											>
												{element.details.new}
											</div>
											<div
												style={{
													backgroundColor: 'rgba(30, 104, 40, 0.300)',
													borderRadius: '4px',
													marginLeft: '30px',
												}}
											>
												{element.details.declined}
											</div>
										</Grid>
									</>
								) : null}
							</Grid>
						</div>
					</div>
				);
			})}
		</>
	);
}
