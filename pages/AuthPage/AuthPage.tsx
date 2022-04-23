import React from "react";
import { Image, Text, View } from "react-native";
import { loginAuth } from "../../api/auth";
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


  const handleRegiserOpen = () => {
    setIsLoginBox(false);
  };
  const handleLogInOpen = () => {
    setIsLoginBox(true);
  };

  const handleLogIn = async (login: string, password: string) => {
    const userData = await loginAuth(login, password)

    const chats = await getChat(1)
    console.log(chats);

    handleMainPageOpen();
  };

  const handleRegister = (
    login: string,
    password: string,
    confirmPassword: string
  ) => {
    // какие-то действия
    handleMainPageOpen();
  };

  return (
    <>
      <View style={styles.logo}>
        <Image source={require(`../../assets/logo.png`)} />
        <Text style={styles.logoText}>Chat</Text>
      </View>
      <View style={styles.main}>
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
