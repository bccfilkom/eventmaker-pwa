import React from 'react';
import { withRouter } from 'react-router-dom'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const NavigationItem = ({ to="/", history, onClick=() => {}, ...other}) => (
		<BottomNavigationAction
			onClick={() => {
				history.push(to);
				onClick();
			}}
			{...other} />
);

export default withRouter(NavigationItem);
