import './style.css'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config.cjs'

const fullConfig = resolveConfig(tailwindConfig)

const navBtn = document.querySelector('#menu')
const menuBar = document.querySelector('[role="menubar"]')

window.addEventListener('resize', () => {
  const breakPoint = parseInt(fullConfig.theme.screens.lg, 10)

  if (window.innerWidth >= breakPoint) {
    navBtn.setAttribute('aria-expanded', false)
    menuBar.classList.remove('flex')
    menuBar.classList.add('hidden')
  }
})

navBtn.addEventListener('click', () => {
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'))
  navBtn.setAttribute('aria-expanded', !isExpanded)
  menuBar.classList.toggle('hidden')
  menuBar.classList.toggle('flex')
})
