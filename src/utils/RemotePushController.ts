import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';

console.log('------------------------------------');
console.log('Configuring Push Notifications');
console.log('Platform.OS', Platform.OS);
console.log('Platform.Version', Platform.Version);
console.log('------------------------------------');

const RemotePushController = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  messaging().onTokenRefresh(fcmToken => {
    console.log('New token refresh:', fcmToken);
  });

  messaging().onMessage(async remoteMessage => {
    console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    PushNotification.localNotification({
      channelId: 'channel-id',
      title: 'On Message',
      message: remoteMessage.notification?.body,
      playSound: true,
      soundName: 'default',
      smallIcon:
        'https://camion-ksa.com/Content/img/logo/icon-144_transparent.png',
      largeIcon:
        'https://camion-ksa.com/Content/img/logo/icon-144_transparent.png',
      bigText: remoteMessage.notification?.body,
      subText: remoteMessage.notification?.title,
      color: 'green',
      vibrate: true,
      vibration: 300,
      tag: 'some_tag',
      group: 'group',
      ongoing: false,
      priority: 'high',
      visibility: 'private',
      importance: 'high',
      alertAction: 'view',
      category: '',
      number: '10',
      repeatType: 'day',
      actions: '["Show Order", "Hide"]',
    });
  });

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    PushNotification.localNotification({
      channelId: 'channel-id',
      title: 'On Notification Opened App',
      message: remoteMessage.notification?.body,
      playSound: true,
      soundName: 'default',
      smallIcon:
        'https://camion-ksa.com/Content/img/logo/icon-144_transparent.png',
      largeIcon:
        'https://camion-ksa.com/Content/img/logo/icon-144_transparent.png',
      bigText: remoteMessage.notification.body,
      subText: remoteMessage.notification.title,
      color: 'red',
      vibrate: true,
      vibration: 300,
      tag: 'some_tag',
      group: 'group',
      ongoing: false,
      priority: 'high',
      visibility: 'private',
      importance: 'high',
      alertAction: 'view',
      category: '',
      number: '10',
      repeatType: 'day',
      actions: '["Show Order", "Hide"]',
    });
  });

  // messaging()
  //   .getIsHeadless()
  //   .then(isHeadless => {
  //     console.log('isHeadless', isHeadless);
  //   });

  //   // Construct the notification
  //   PushNotification.configure({
  //     // (optional) Called when Token is generated (iOS and Android)
  //     onRegister: function (token) {
  //       console.log('TOKEN:', token);
  //     },

  //     // (required) Called when a remote is received or opened, or local notification is opened
  //     onNotification: function (notification: any) {
  //       PushNotification.localNotification({
  //         channelId: 'channel-id',
  //         title: notification.title,
  //         message: notification.message,
  //         playSound: true,
  //         soundName: 'default',
  //         smallIcon:
  //           'https://camion-ksa.com/Content/img/logo/icon-144_transparent.png',
  //         largeIcon:
  //           'https://camion-ksa.com/Content/img/logo/icon-144_transparent.png',
  //         largeIconUrl:
  //           'https://camion-ksa.com/Content/img/logo/icon-144_transparent.png',
  //         vibrate: true,
  //         color: '#000',
  //       });
  //     },

  //     // senderID: '342556791069',
  //     popInitialNotification: true,
  //     requestPermissions: Platform.OS === 'ios',
  //   });
};

export default RemotePushController;
