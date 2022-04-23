import React from "react";
import { Image, Text, View } from "react-native";
import { loginAuth, register } from "../../api/auth";
import { getChat } from "../../api/chat";
import LoginBox from "../../components/AuthBox/LoginBox";
import RegisterBox from "../../components/AuthBox/RegisterBox";
import { GlobalContext } from "../../state/GlobalProvider";
import { styles } from "./styles";

interface IAuthProps {
  handleMainPageOpen: () => void;
}

const AuthPage: React.FC<IAuthProps> = ({ handleMainPageOpen }) => {
  const [isLoginBox, setIsLoginBox] = React.useState(true);
  const [isError, setIsError] = React.useState(false)

  const handleRegiserOpen = () => {
    setIsError(false)
    setIsLoginBox(false);
  };
  const handleLogInOpen = () => {
    setIsError(false)
    setIsLoginBox(true);
  };

  const handleLogIn = async (login: string, password: string) => {
    try {
      console.log('as');

      const userData = await loginAuth(login, password)
      handleMainPageOpen();
    } catch (error) {
      setIsError(true)
    }
    //const chats = await getChat(1)
  };

  const handleRegister = async (
    login: string,
    password: string,
    confirmPassword: string
  ) => {
    try {
      const userData = await register(login, password, confirmPassword)
      handleMainPageOpen();
    } catch (error) {
      setIsError(true)
    }

  };

  return (
    <>
      <View style={styles.logo}>
        <Image source={require(`../../assets/logo.png`)} />
        <Text style={styles.logoText}>Chat</Text>
      </View>
      <View style={styles.main}>
        {isError && <Text style={styles.error}>{isLoginBox ? 'Ошибка авторизации' : 'Ошибка регистрации'}</Text>}
        {isLoginBox ? (
          <LoginBox
            handleChangePress={handleRegiserOpen}
            handleLogInPress={handleLogIn}
          />
        ) : (
          <RegisterBox
            handleChangePress={handleLogInOpen}
            handleRegisterPress={handleRegister}
          />
        )}
      </View>
    </>
  );
};

export default AuthPage;
