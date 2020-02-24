export const state = () => ({
  window: {
    height: 0,
    width: 767,
    scrollY: 0
  },
  nav_short: ['anchor-1', 'anchor-2', 'anchor-3'],
  nav: ['anchor-1', 'anchor-2', 'anchor-3', 'anchor-4', 'anchor-5', 'anchor-6'],
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  }
})

export const mutations = {
  setAnchors(state, anchors) {
    state.anchors = anchors
  },

  setBrowserSize(state) {
    state.window.height = window.innerHeight
    state.window.width = window.innerWidth
  },

  setScrollY(state) {
    state.window.scrollY = window.scrollY
  }
}

export const getters = {
  isMobile: (state) => {
    if (process.browser) {
      return state.window.width < state.breakpoints.sm || typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1
    }
  }
}
