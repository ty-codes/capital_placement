import { createContext, useContext } from "react";

const DetailsContext = createContext();

const DetailsProvider = ({ children, ...otherProps }) => {
	return (
		<DetailsContext.Provider {...otherProps}>
			{children}
		</DetailsContext.Provider>
	);
};

export const useDetailsContext = () => {
	return useContext(DetailsContext);
};

export default DetailsProvider;
