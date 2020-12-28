const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  trailingSlash: true,
  pageExtensions: ['js', 'mdx'],
  images: {
    domains: [
      'hackclub.com',
      'dl.airtable.com',
      'emoji.slack-edge.com',
      'cdn.glitch.com'
    ]
  },
  webpack: (config, { isServer }) => {
    if (isServer) require('./lib/sitemap')
    return config
  },
  async redirects() {
    return [
      { source: '/start/', destination: '/', permanent: false },
      { source: '/clubs/', destination: '/', permanent: false },
      { source: '/repl/', destination: '/', permanent: true },
      { source: '/c9/', destination: '/deprecated/cloud9/', permanent: true },
      {
        source: '/cloud9_setup/',
        destination: '/deprecated/cloud9/',
        permanent: true
      },
      {
        source: '/redeem_tech_domain/',
        destination: '/deprecated/tech_domains/',
        permanent: true
      },
      {
        source: '/challenge/',
        destination: '/deprecated/challenge/',
        permanent: true
      },
      { source: '/slack_invite/', destination: '/slack/', permanent: true },
      { source: '/workshops/slack/', destination: '/slack/', permanent: true },
      { source: '/community/', destination: '/slack/', permanent: true },
      { source: '/hack_camp/', destination: '/camp/', permanent: true },
      { source: '/branding/', destination: '/brand/', permanent: true },
      { source: '/ama/', destination: '/amas/', permanent: false },
      { source: '/coc/', destination: '/conduct/', permanent: true },
      {
        source: '/code_of_conduct/',
        destination: '/conduct/',
        permanent: true
      },
      {
        source: '/finder/',
        destination: 'https://finder.hackclub.com',
        permanent: true
      },
      {
        source: '/apply/',
        destination: 'https://apply.hackclub.com',
        permanent: true
      },
      {
        source: '/icons/',
        destination: 'https://icons.hackclub.com',
        permanent: true
      },
      {
        source: '/updates/',
        destination:
          'https://www.youtube.com/playlist?list=PLbNbddgD-XxEC5-_KQTye6nFPBLtI_mds',
        permanent: false
      },
      {
        source: '/admin/',
        destination:
          'https://5c8804a629a378000833619c--hackclub.netlify.com/admin/',
        permanent: false
      },
      {
        source: '/checkup/',
        destination:
          'https://5c8804a629a378000833619c--hackclub.netlify.com/checkup/',
        permanent: false
      },
      {
        source: '/workshops/',
        destination: 'https://hackclub-w.lachlanjc.com/',
        permanent: false
      },
      {
        source: '/workshops/([a-z_]+)/',
        destination: 'https://hackclub-w.lachlanjc.com/$1/',
        permanent: true
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/v3/_next/:path*',
        destination: '/_next/:path*'
      },
      {
        source: '/workshops/_next/:path*',
        destination: 'https://hackclub-w.lachlanjc.com/_next/:path*'
      },
      {
        source: '/team/',
        destination: 'https://hackclub-v2.lachlanjc.com/team/'
      },
      {
        source: '/donate/',
        destination: 'https://hackclub-v2.lachlanjc.com/donate/'
      },
      {
        source: '/philosophy/',
        destination: 'https://hackclub-v2.lachlanjc.com/philosophy/'
      },
      {
        source: '/bank/',
        destination: 'https://hackclub-v2.lachlanjc.com/bank/'
      },
      {
        source: '/camp/',
        destination: 'https://hackclub-v2.lachlanjc.com/camp/'
      },
      {
        source: '/santa/',
        destination: 'https://hackclub-v2.lachlanjc.com/santa/'
      },
      {
        source: '/sponsorship/',
        destination: 'https://hackclub-w.lachlanjc.com/sponsorship/'
      },
      {
        source: '/covid19/',
        destination: 'https://hackclub-w.lachlanjc.com/covid19/'
      },
      {
        source: '/sunsetting-som/',
        destination: 'https://hackclub-w.lachlanjc.com/sunsetting-som/'
      },
      {
        source: '/banner/',
        destination: 'https://hackclub-w.lachlanjc.com/banner/'
      },
      {
        source: '/conduct/',
        destination: 'https://hackclub-w.lachlanjc.com/conduct/'
      },
      {
        source: '/workshop-bounty/',
        destination: 'https://hackclub-w.lachlanjc.com/workshop-bounty/'
      },
      {
        source: '/vip-newsletters/',
        destination: 'https://hackclub-w.lachlanjc.com/vip-newsletters/'
      },
      {
        source: '/vip-newsletters/(.*)',
        destination: 'https://hackclub-w.lachlanjc.com/vip-newsletters/$1'
      },
      {
        source: '/transparency/may-2020/',
        destination: 'https://hackclub-w.lachlanjc.com/transparency-may/'
      },
      {
        source: '/map/',
        destination: 'https://map.hackclub.dev/'
      },
      {
        source: '/:path*',
        destination: 'https://hackclub-v2.lachlanjc.com/:path*'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/banners/(.*)',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }]
      },
      {
        source: '/fonts/(.*)',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }]
      },
      {
        source: '/api/(.+)',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS'
          },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' }
        ]
      }
    ]
  }
})
