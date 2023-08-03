import { RouteNames } from './enums';

export const getRouteNames = (route: string): string => {
	switch (route) {
		case RouteNames.HOME:
			return '/';

		case RouteNames.EXCEL_TO_CSV:
			return '/convert-excel-to-csv';

		default:
			return '/';
	}
};
