import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RouteList } from './constants';

const AppRoutes: React.FC = () => {
	return <RouterProvider router={createBrowserRouter(RouteList)} />;
};

export default AppRoutes;
