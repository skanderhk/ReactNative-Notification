import PushNotification from 'react-native-push-notification';

export const ConfigNotif = () => {
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
    created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
};
// const LocalPushController = () => {
//   PushNotification.localNotification({
//     channelId: 'channel-id',
//     /* Android Only Properties */
//     id: '0', // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
//     ticker: 'My Notification Ticker', // (optional)
//     autoCancel: true, // (optional) default: true
//     largeIcon: 'ic_launcher', // (optional) default: "ic_launcher". Use "" for no large icon.
//     smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher". Use "" for default small icon.
//     bigText: 'My big text that will be shown when notification is expanded', // (optional) default: "message" prop
//     subText: 'This is a subText', // (optional) default: none
//     color: 'red', // (optional) default: system default
//     vibrate: true, // (optional) default: true
//     vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
//     tag: 'some_tag', // (optional) add tag to message
//     group: 'group', // (optional) add group to message
//     ongoing: false, // (optional) set whether this is an "ongoing" notification
//     priority: 'high', // (optional) set notification priority, default: high
//     visibility: 'private', // (optional) set notification visibility, default: private
//     importance: 'high', // (optional) set notification importance, default: high

//     /* iOS only properties */
//     alertAction: 'view', // (optional) default: view
//     category: '', // (optional) default: empty string

//     /* iOS and Android properties */
//     title: 'My Notification Title', // (optional)
//     message: 'My Notification Message', // (required)
//     playSound: false, // (optional) default: true
//     soundName: 'default', // (optional) Sound to play when the notification is shown. Sound files can be in the main bundle of the client app or in the Library/Sounds folder of the app's data container. See iOS Developer Library for more details.
//     number: '10', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
//     repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
//     actions: '["Show Order", "Hide"]', // (Android only) See the doc for notification actions to know more
//   });
// };
