import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@material-ui/data-grid';

function CustomToolbar() {
	return (
		<GridToolbarContainer>
			<GridToolbarExport />
		</GridToolbarContainer>
	);
}

export default function ExportSelectorGrid() {
	const data = [
		{
			name: 'name',
			age: 20,
		},
		{
			name: 'name',
			age: 20,
		},
	];

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
