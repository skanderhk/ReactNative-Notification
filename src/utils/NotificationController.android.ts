import {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';

// // Create the channel
PushNotification.createChannel(
  {
    channelId: 'channel-id', // (required)
    channelName: 'My channel', // (required)
    channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    playSound: true, // (optional) default: true
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  },
  created => console.log(`createChannel returned '${created}'!`), // (optional) callback returns whether the channel was created, false means it already existed.
);

const NotificationController = () => {
  useEffect(() => {
    PushNotification.getChannels(function (channel_ids) {
      console.log(channel_ids); // ['channel_id_1']
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log(
        'Message handled in the background!',
        JSON.stringify(remoteMessage),
      );
      PushNotification.localNotification({
        channelId: 'channel-id',
        title: 'Background message',
        message: remoteMessage.notification?.body,
        playSound: true,
        soundName: 'default',
        color: 'blue',
      });
    });

    const unsbscribe = messaging().onMessage(async remoteMessage => {
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
        color: 'yellow',
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
    return () => {
      unsbscribe();
    };
  }, []);

  return null;
};

export default NotificationController;
