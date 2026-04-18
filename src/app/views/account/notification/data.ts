export type NotificationType = {
  id: string;
  title: string;
  description: string;
  checked: boolean;
};

export const notificationData: NotificationType[] = [
  {
    id: 'checkPrivacy1',
    title: 'News and updates',
    description: 'News about product and feature updates',
    checked: true,
  },
  {
    id: 'checkPrivacy2',
    title: 'Tips and tutorials',
    description: 'Tips on getting more out of unlimited',
    checked: true,
  },
  {
    id: 'checkPrivacy3',
    title: 'User research',
    description: 'Tips on getting more out of unlimited',
    checked: false,
  },
  {
    id: 'checkPrivacy4',
    title: 'Comments',
    description: 'Comments on your post and replies to comments',
    checked: false,
  },
  {
    id: 'checkPrivacy5',
    title: 'Reminders',
    description: 'I would like to receive booking assistance reminders',
    checked: false,
  },
];

export const generalData: NotificationType[] = [
  {
    id: 'checkPrivacy6',
    title: 'Notify on updates and activity',
    description: "You'll be notified when anyone shares a report or invite you to a projects",
    checked: true,
  },
  {
    id: 'checkPrivacy7',
    title: 'Send weekly digest',
    description: 'A weekly update on changes in theme statement and more',
    checked: true,
  },
  {
    id: 'checkPrivacy8',
    title: 'Collaborators',
    description: 'I would like to receive booking assistance reminders',
    checked: false,
  },
];
