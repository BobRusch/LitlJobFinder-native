import AsyncStorage from "@react-native-community/async-storage";
import * as Facebook from "expo-facebook";

import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./types";

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

export const facebookLogin = () => async (dispatch) => {
  try {
    let token = await AsyncStorage.getItem("fb_token");

    if (token) {
      // Dispatch an action saying FB login is done
      dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
      // Start up FB Login process
      doFacebookLogin(dispatch);
    }
  } catch (err) {
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async (dispatch) => {
  try {
    await Facebook.initializeAsync({ appId: "460510365164640" });
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile", "email"],
    });

    if (type === "cancel") {
      return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }

    await AsyncStorage.setItem("fb_token", token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } catch (err) {
    console.log(err);
  }
};
