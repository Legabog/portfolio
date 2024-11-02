'use server';

import webpush from 'web-push';

webpush.setVapidDetails(
  process.env.VAPID_MAIL_TO,
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!,
);

let subscription: PushSubscription | null = null;

export const subscribeUser = async (sub: PushSubscription) => {
  subscription = sub;
  return { success: true };
};

export const unsubscribeUser = async () => {
  subscription = null;
  return { success: true };
};

export const sendNotification = async (message: string) => {
  if (!subscription) throw new Error('No subscription available');

  try {
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: 'Test Notification',
        body: message,
        icon: '/favicon.svg',
      }),
    );
    return { success: true };
  } catch (error) {
    console.error('Error sending push notification:', error);
    return { success: false, error: 'Failed to send notification' };
  }
};
