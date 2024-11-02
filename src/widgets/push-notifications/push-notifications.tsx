import { FC } from 'react';

import { useLogic } from './lib';
import { Wrapper, Title, Text, Button, Input } from './push-notifications.styled';

export const PushNotifications: FC = () => {
  const {
    isSupported,
    subscription,
    unsubscribeFromPush,
    message,
    onChangeHandler,
    sendTestNotification,
    subscribeToPush,
  } = useLogic();

  if (!isSupported) return <Text>Push notifications are not supported in this browser.</Text>;

  return (
    <Wrapper>
      <Title>Push Notifications</Title>
      {subscription ? (
        <>
          <Text>You are subscribed to push notifications.</Text>
          <Button onClick={ unsubscribeFromPush }>Unsubscribe</Button>
          <Input
            placeholder='Enter notification message'
            type='text'
            value={ message }
            onChange={ onChangeHandler }
          />
          <Button onClick={ sendTestNotification }>Send Test</Button>
        </>
      ) : (
        <>
          <Text>You are not subscribed to push notifications.</Text>
          <Button onClick={ subscribeToPush }>Subscribe</Button>
        </>
      )}
    </Wrapper>
  );
};
