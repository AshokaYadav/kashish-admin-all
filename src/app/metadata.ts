// // src/app/metadata.ts
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//     title: 'Kashish India Pvt Ltd - Online Mobile Recharge & Bill Payment Service',
//     description: 'Kashish India offers fast, secure online mobile recharge, DTH top-up, and utility bill payment services. Enjoy quick transactions, multiple payment options, and 24/7 reliability.',
//     keywords: [
//         'online mobile recharge',
//         'DTH recharge',
//         'bill payment service',
//         'fast recharge India',
//         'secure recharge platform',
//         '24/7 recharge',
//         'prepaid recharge online',
//         'utility bill payment'
//     ]
// }




// src/app/metadata.ts
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kashish India Pvt Ltd | Online Mobile & DTH Recharge',
  description:
    'Kashish India Pvt Ltd offers fast, secure recharge & bill payment in India – mobile, DTH, data card & utility bills. 24/7 support.',
  keywords: [
    'kashish india pvt ltd',
    'kashish india jaipur',
    'kashis india',
    'online mobile recharge',
    'DTH recharge',
    'bill payment services',
    'utility bill payments',
    'fast mobile recharge',
    'secure recharge platform',
    '24/7 recharge India',
  
  ],

  // ✅ Canonical URL
  alternates: {
    canonical: 'https://kashishindiapvtltd.com',
  },

  // ✅ Robots tag
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // ✅ Author info
  authors: [{ name: 'Kashish India Pvt Ltd', url: 'https://kashishindiapvtltd.com' }],

  // ✅ OpenGraph for social sharing
  openGraph: {
    title: 'Kashish India Pvt Ltd | Fast & Secure Recharge Services',
    description:
      'Recharge mobile, DTH, data card, and utility bills instantly and securely with Kashish India Pvt Ltd. 24/7 service and seamless payment experience.',
    url: 'https://kashishindiapvtltd.com',
    siteName: 'Kashish India Pvt Ltd',
    images: [
      {
        url: 'https://partner.kashishindiapvtltd.com/login/image.png',
        width: 1200,
        height: 630,
        alt: 'Kashish India - Reliable Recharge Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  // ✅ Twitter card
  twitter: {
    card: 'summary_large_image',
    title: 'Kashish India Pvt Ltd | Online Recharge & Bill Payments',
    description:
      'Fast, secure and reliable recharge for mobile, DTH, and utility bills with Kashish India Pvt Ltd, available 24/7 across India.',
    images: ['https://partner.kashishindiapvtltd.com/login/image.png'],
  },

  // ✅ Extra meta tags (publisher + schema markup)
  other: {
    publisher: 'Kashish India Pvt Ltd',
    'application-name': 'Kashish India Pvt Ltd',
    'schema-org': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Kashish India Pvt Ltd',
      url: 'https://kashishindiapvtltd.com',
      logo: 'https://partner.kashishindiapvtltd.com/login/image.png',
      sameAs: [
        'https://facebook.com/kashishindiapvtltd',
        'https://twitter.com/kashishindiapvtltd',
        'https://linkedin.com/company/kashishindiapvtltd',
      ],
    }),
  },
};
