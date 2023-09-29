import { createContext, useContext } from "react";

const CreateContext = createContext();

const CreateProvider = ({ children, ...otherProps }) => {
	return (
		<CreateContext.Provider {...otherProps}>{children}</CreateContext.Provider>
	);
};

export const useCreateContext = () => {
	return useContext(CreateContext);
};

export default CreateProvider;
