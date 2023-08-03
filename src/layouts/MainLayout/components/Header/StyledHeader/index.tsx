import styled from 'styled-components';
import { Layout } from 'antd';
import { Colors } from '../../../../../styles/constants';

const StyledHeader = styled(Layout.Header)`
	background-color: ${Colors.background} !important;
	border-bottom: 1px solid ${Colors.secondaryText} !important;
	position: sticky;
	top: 0;
	padding: 0px 10px !important;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 10;

	.logo-container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	@media screen and (min-width: 1024px) {
		.logo-container button {
			display: none !important;
		}

		.logo-container {
			gap: 0px;
		}
	}
`;

export default StyledHeader;
