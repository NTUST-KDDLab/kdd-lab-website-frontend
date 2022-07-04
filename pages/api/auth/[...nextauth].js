import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import axiosInstance from '../../../components/axiosInstance';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
      checks: console.log(),
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        const response = await axiosInstance.get(
          `/auth/${account.provider}/callback?access_token=${account.access_token}`
        );
        const data = response.data;
        token.jwt = data.jwt;
        token.user = data.user.id;
      }

      return Promise.resolve(token);
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      console.log(session, token);
      session.jwt = token.jwt;
      session.user.id = token.id;
      return Promise.resolve(session);
    },
  },

  // TODO
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
});
