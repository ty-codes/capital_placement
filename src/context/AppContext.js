import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [modalType, setModalType] = useState();
	const [isOpenModal, setIsOpenModal] = useState(false);

	const changeModalType = (modal) => {
		setIsOpenModal(true);
		setModalType(modal);
	};

	// useEffect(() => {
	// 	setToStorage("user", user);
	// }, [user]);

	return (
		<AppContext.Provider
			value={{
				// user,
				// setUser,
				// isLoggedIn,
				// setIsLoggedIn,
				// isPlayListModalOpen,
				// setIsPlayListModalOpen,
				// songToAddToPlayList,
				// setSongToAddToPlayList,
				isOpenModal,
				setIsOpenModal,
				modalType,
				setModalType,
				changeModalType,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};

export default AppProvider;
