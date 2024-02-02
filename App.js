/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Splash from './src/screen/auth/splash'
import Signup from './src/screen/auth/Signup';
import Config from "react-native-config";

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Signin from './src/screen/auth/Signin';

//web
// client id : 849236722100-6gahg9k3b2pndj4sjcv0r32blrboh3hb.apps.googleusercontent.com
//client secrate key : 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

// ios client id : 849236722100-l56ajaaenluuqjt2p3ses7c5lvptvle0.apps.googleusercontent.com


const web_client_id = "849236722100-6gahg9k3b2pndj4sjcv0r32blrboh3hb.apps.googleusercontent.com"
const ios_client_id ="849236722100-l56ajaaenluuqjt2p3ses7c5lvptvle0.apps.googleusercontent.com"
//const reverse_ios_client_id ="com.googleusercontent.apps.849236722100-l56ajaaenluuqjt2p3ses7c5lvptvle0"



const App = () => {

useEffect(()=> {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: Config.Google_web_client_id, // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId: Config.Google_ios_client_id, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });
},[])

  return (
    <SafeAreaView>
     
     <Signin/>
     
    </SafeAreaView>
  )

};



export default App;
