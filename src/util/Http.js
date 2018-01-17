import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import {
    AppRegistry,
    StyleSheet,
    Text,
		Alert,
    TouchableOpacity,
    View
} from 'react-native';

import bodyEncrypt from './bodyEncrypt';

export default function request(url, body) {

  return new Promise((resolve, reject) => {
		fetch(url,{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: body,
		})
		.then((response) => {
      console.log(response);
      // console.log(response.text());
			return response.json();
		})
		.then((jsonData) => {
      if (jsonData.msg == "session_id错误，用户不存在，请重新登陆。") {
        if (global.isBeLogin != true) {
          global.isBeLogin = true;
          storage.remove({
            key: 'sessionID'
          });
          storage.remove({
            key: 'loginType'
          });
          const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({routeName: 'LoginByPhone'})
            ]
            });
          global.navigation.dispatch(resetAction);
        }
      } else {
        resolve(jsonData);
      }
		})
		.catch((error) => {
			reject(error);
		});
	})

}
