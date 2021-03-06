// main file
import  {
   AppRegistry,
   StyleSheet,
   Navigator, } from 'react-native';
import React, { Component } from 'react';


import {Container, Header, Content, Footer, Title} from 'native-base';
import Yaks from './Containers/Yaks';
import ComposeYak from './Components/ComposeYak';
import MainLayout from './Containers/MainLayout';
import YakView from './Components/YakView';
import YakViewLayout from './Containers/YakViewLayout';
import Settings from './Components/Settings';
import Feedback from './Components/Feedback';
import FirebaseClass from './Classes/FirebaseClass';

class BisonApp extends Component {

      _renderScene(route, navigator){
        // every scene has these props
        var globalNavigatorProps = { navigator };

        switch (route.ident) {
          case "MainLayout":
                return (
                  <MainLayout {...globalNavigatorProps} />
                );

          case "Yaks":
                return(
                  <Yaks {...globalNavigatorProps} />
                );

          case "YakView":
                return (
                  <YakView {...globalNavigatorProps}
                            item={route.item} />
                );
          case "YakViewLayout":
                return(
                  <YakViewLayout {...globalNavigatorProps}  />
                );
          case "Settings":
                return(
                  <Settings {...globalNavigatorProps} />
                );
          case "Feedback":
                return(
                  <Feedback {...globalNavigatorProps} />
                );
          default:
                return (
                  <Text>{`CRITICAL ERROR! ${route}`}</Text>
                )
        }

      }
       render() {
         FirebaseClass.initFirebase();

           return (
             <Navigator
               initialRoute={{ident:"Yaks"}}
               ref="appnavigator"
               style={styles.navigatorStyles}
               renderScene={this._renderScene}
              />
           );
       }
   }

const styles = StyleSheet.create({

  navigatorStyles: {

  }
});

AppRegistry.registerComponent('BisonApp', () => BisonApp);
