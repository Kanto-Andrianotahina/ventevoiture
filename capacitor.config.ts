import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.ventevoiture',
  appName: 'ventevoiture',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
