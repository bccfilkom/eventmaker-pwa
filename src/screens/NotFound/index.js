import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
`;

const Content = styled.div`
	text-align: center;
`;

const Title = styled.div`
	font-size: 30px;
	padding: 20px;
	color: #afafaf;
	font-family: 'Raleway', 'Open Sans', sans-serif;
`;

const NotFound = () => (
	<Container>
		<Content>
			<Title>
				Sorry, the page you are looking for could not be found.
			</Title>
		</Content>
	</Container>
);

export default NotFound;