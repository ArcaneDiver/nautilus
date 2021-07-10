const API_URL = 'https://eu.ui-avatars.com/api/';

const formatName = (name: string) => name.replaceAll(' ', '+');

export const getIconUrlFromName = (name: string) =>
  `${API_URL}?name=${formatName(name)}&background=random`;
