module.exports = {
  siteTitle: 'My Request',
  manifestName: 'My Request',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/my-request-favicon.png',
  // pathPrefix: `/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'My Request',
  subHeading:
    'Connecting Performers with their audience on a whole new frequency',
  // social
  socialLinks: [
    {
      style: 'solid',
      icon: 'fa-envelope',
      name: 'Email',
      url: process.env.HELP_EMAIL_LINK,
    },
    {
      style: 'brands',
      icon: 'fa-buffer',
      name: 'Softstack Factory',
      url: 'https://www.softstackfactory.com',
    },
  ],
};
