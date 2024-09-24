import { getTheme, subscribeToTheme } from '@cqcl/quantinuum-ui'

;(() => {
  document.body.setAttribute('data-theme', getTheme().isDark ? 'dark' : 'light')
  subscribeToTheme(({ isDark }) => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  })
})()
