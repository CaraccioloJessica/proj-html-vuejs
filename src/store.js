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
  ]
})


