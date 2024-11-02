'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { subscribeUser, unsubscribeUser, sendNotification } from '@shared/lib';

export const useLogic = () => {
  const [isSupported, setIsSupported] = useState<boolean>(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);
  const [message, setMessage] = useState<string>('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value);
  const registerServiceWorker = async () => {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'none',
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  };

  const urlBase64ToUint8Array = (base64String: string) => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/\\-/g, '+').replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };

  const subscribeToPush = async () => {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!),
    });
    setSubscription(sub);
    await subscribeUser(sub);
  };

  const unsubscribeFromPush = async () => {
    await subscription?.unsubscribe();
    setSubscription(null);
    await unsubscribeUser();
  };

  const sendTestNotification = async () => {
    if (subscription) {
      await sendNotification(message);
      setMessage('');
    }
  };

  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);

  return {
    isSupported,
    subscription,
    unsubscribeFromPush,
    message,
    onChangeHandler,
    sendTestNotification,
    subscribeToPush,
  };
};
