import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

function CustomToolbar() {
	return (
		<GridToolbarContainer>
			<GridToolbarExport />
		</GridToolbarContainer>
	);
}

export default function ExportSelectorGrid() {
	// const data = [
	// 	{
	// 		'name'
	// 	},
	// 	{

	// 	}
	// ]

	return (
		<div style={{ height: 300, width: '100%' }}>
			<DataGrid
				{...data}
				components={{
					Toolbar: CustomToolbar,
					
				}}
			/>
		</div>
	);
}
