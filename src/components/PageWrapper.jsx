import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { device } from "../constants";
import { useUserContext } from "../context/UserContext";

const PageWrapper = ({ children, ...others }) => {
	const { isLoggedIn } = useUserContext();
	const isSmallDevice = useMediaQuery({ maxWidth: 768 });

	return (
		<Wrapper
			isLoggedIn={!!isLoggedIn}
			isSmallDevice={isSmallDevice}
			{...others}
		>
			{children}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding-inline: 1.3rem;
	margin-top: 6.2rem;

	margin-left: ${(props) => {
		if (props.page === "login" || props.isSmallDevice) {
			return 0;
		} else {
			return props.theme.sideBarWidth;
		}
	}};

	@media ${device.laptop} {
		margin-left: ${(props) => {
			if (props.page === "login" || props.isSmallDevice) {
				return 0;
			} else {
				return "4rem";
			}
		}};
	}
	
 
	@media ${device.isSmallDevice} {
		padding-inline: 0.65rem;
	}

	@media ${device.tablet} {
		min-height: calc(100vh - 1rem);
		padding-bottom: 1rem;
	}
`;

export default PageWrapper;
