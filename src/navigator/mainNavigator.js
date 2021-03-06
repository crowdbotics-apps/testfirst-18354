import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile70086Navigator from '../features/UserProfile70086/navigator';
import Maps70067Navigator from '../features/Maps70067/navigator';
import Settings70045Navigator from '../features/Settings70045/navigator';
import Settings70030Navigator from '../features/Settings70030/navigator';
import NotificationList70029Navigator from '../features/NotificationList70029/navigator';
import Maps70028Navigator from '../features/Maps70028/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile70086: { screen: UserProfile70086Navigator },
Maps70067: { screen: Maps70067Navigator },
Settings70045: { screen: Settings70045Navigator },
Settings70030: { screen: Settings70030Navigator },
NotificationList70029: { screen: NotificationList70029Navigator },
Maps70028: { screen: Maps70028Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
