import Auth0 from 'react-native-auth0';

const DOMAIN = 'arcanediver.eu.auth0.com';
const CLIENT_ID = 'Ktn44t5dvkh3S2K3fiAsnDNhkFfbwCcT';

export const auth0Client = new Auth0({
  domain: DOMAIN,
  clientId: CLIENT_ID,
});