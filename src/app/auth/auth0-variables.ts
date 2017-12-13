interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'q6VcFbXvqXJOzhyEO8WQWr4fG8pHIPIl',
  domain: 'makimenko.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
