import './style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

// Init AOS after partials are loaded
AOS.init({
  duration: 600,
  once: true,
})

// Load partials into all matching elements
async function loadPartial(selector, file) {
  const res = await fetch(file)
  const html = await res.text()
  
  document.querySelectorAll(selector).forEach(el => {
    el.innerHTML = html
  })
}

// IIFE to handle async operations
;(async () => {
  await loadPartial('#header', 'src/partials/header.html')
  await loadPartial('.buttons', 'src/partials/buttons.html')
  await loadPartial('#footer', 'src/partials/footer.html')
})()