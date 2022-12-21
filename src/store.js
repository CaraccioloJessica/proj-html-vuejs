import { reactive } from 'vue'

export const store = reactive({
  links: [
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
    {
      text: 'Shop by brand',
      url: '#',
      current: false,
    },
  ]
})


