import { createContext, useContext, useEffect, useState } from "react";
import { getFromStorage, setToStorage } from "../constants";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(getFromStorage("user"));
	// const [user, setUser] = useState({
	// 	firstname: "Bolatito",
	// 	lastname: "Adeoye",
	// 	email: "bolatito@gmail.com",
	// 	phoneNumber: "",
	// 	dateCreated: new Date(),
	// });
	const [isLoggedIn, setIsLoggedIn] = useState(getFromStorage("token"));

	useEffect(() => {
		setToStorage("user", user);
	}, [user]);

	// testing

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
                isLoggedIn,
                setIsLoggedIn
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => {
	return useContext(UserContext);
};

export default UserProvider;
