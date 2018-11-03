import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = styled(CircularProgress)`
	position: absolute;
	top: calc(50% - 70px);
	left: calc(50% - 20px);
`;

export default Loading;