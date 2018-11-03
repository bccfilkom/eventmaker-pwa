import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';

import NavigationItem from './NavigationItem';

const StyledNavigationMainItem = styled(NavigationItem)`
	& .selected{
		padding-top: 8 !important;
	}
`;

const StyledMainButton = styled(Avatar)`
  position: absoulte;
	background-color: #597ff5 !important;
  bottom: 8px;
  width: 50px;
  height: 50px;
`;

const NavigationMainItem = ({...other}) => (
	<StyledNavigationMainItem disableRipple={true} {...other} icon={
			<StyledMainButton>
				<AddIcon/>
			</StyledMainButton>
		}/>
);

export default NavigationMainItem;
