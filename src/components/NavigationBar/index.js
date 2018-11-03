import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PersonIcon from '@material-ui/icons/Person';
import BCCIcon from '@material-ui/icons/Help';

import Navigation from './Navigation';
import NavigationItem from './NavigationItem';
import NavigationMainItem from './NavigationMainItem';

const NavigationBar = () => (
	<Navigation>
		<NavigationItem label="Home" value="home" to="/home" icon={<HomeIcon />} />
		<NavigationItem label="Events" value="events" to="/events" icon={<EventNoteIcon />} />
		<NavigationMainItem value="add" to="/add"/>
		<NavigationItem label="Account" value="account" to="/account" icon={<PersonIcon />} />
		<NavigationItem label="About Us" value="about" to="/about" icon={<BCCIcon />} />
	</Navigation>
);

export default NavigationBar;