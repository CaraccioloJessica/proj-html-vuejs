import { reactive } from 'vue'

export const store = reactive({
  links: [
    {
      text: 'Home',
      url: '#',
      current: true,
      icon: true,
    },
    {
      text: 'Shop',
      url: '#',
      current: false,
      icon: true,
    },
    {
      text: 'About',
      url: '#',
      current: false,
      icon: false,
    },
    {
      text: 'Blog',
      url: '#',
      current: false,
      icon: false,
    },
    {
      text: 'Contact',
      url: '#',
      current: false,
      icon: false,
    },
    {
      text: 'Shop by brand',
      url: '#',
      current: false,
      icon: true,
    },
  ],

  // array nav che andrà nel footer
  footerLinks: [
    {
      text: 'Home',
      url: '#',
      current: true,
    },
    {
      text: 'Shop',
      url: '#',
      current: false,
    },
    {
      text: 'About',
      url: '#',
      current: false,
    },
    {
      text: 'Blog',
      url: '#',
      current: false,
    },
    {
      text: 'Contact',
      url: '#',
      current: false,
    },
  ]
})


