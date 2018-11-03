import React from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const Navigation = styled(({history, children, ...other}) => {
	let activeNavigation = history.location.pathname.match(/([a-z0-9]+)/i);
  activeNavigation = activeNavigation ? activeNavigation[0] : '/'
	return (
		<BottomNavigation {...other} value={activeNavigation}>
				{children}
		</BottomNavigation>
	)
})`
	width: 100%;
	position: absolute;
	bottom: 0;
	border-top: 0.09px solid #ddd;
`;

export default withRouter(Navigation);