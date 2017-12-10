import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import './App.css';
import {lightBlue500 ,grey700 ,yellowA700,white, cyan500, brown900, blue500 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import MailIcon from 'material-ui/svg-icons/communication/mail-outline';



const TabsExampleIconText = () => (
  <Tabs tabItemContainerStyle={{width: '400px'}}  inkBarStyle ={{background: lightBlue500 }} className="Tabss">>
    <Tab
  icon={<ActionHome/>}
      label="Home"
    />
    <Tab
    icon={<NotificationsIcon/>}
      label="Notifications"
    />
    <Tab
      icon={<MailIcon/>}
      label="Messages"
    />
  </Tabs>
);

export default TabsExampleIconText;
