import Navigation from "@components/Navigation/Navigation";
import {NavigationContainer} from "@react-navigation/native";
import UserIcon from "@components/UserIcon";
import {useUserContext} from "@context/UserContext";
import Login from "@screens/Login";

export default function App() {
    const userContext = useUserContext();
    const userToken: string = userContext.userToken;

  return (
      <NavigationContainer theme={{colors: {background: 'white'}}}>
          {userToken === '' ? <Login /> :
              <>
                  <Navigation />
                  <UserIcon />
              </>
          }
      </NavigationContainer>
  );
}
