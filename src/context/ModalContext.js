import { useContext, useState, createContext } from 'react';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [modalType, setModalType] = useState("");
    const [isOpenModal, setIsOpenModal] = useState(false);

    const changeModalType = (modal) => {
        setIsOpenModal(true);
        setModalType(modal);
    };

    return (
        <ModalContext.Provider value={{ modalType, changeModalType, setModalType, isOpenModal, setIsOpenModal }}>
            {children}
        </ModalContext.Provider>
    )
};

export const useModalContext = () => {
    return useContext(ModalContext);
};

export default ModalProvider;