import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//this are 2 different libraries that we have not used before
import HomeScreen from "./src/screens/HomeScreen";
import TutorialScreen from "./src/screens/TutorialScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  //this is kind of how we did the routs with react
  //we are gonnalist out all of our routs and teh component that should be rendered
  {
    Home: HomeScreen,
    Tutorial: TutorialScreen,
    Lists: ListScreen,
  },
  {
    initialRouteName: "Lists",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
