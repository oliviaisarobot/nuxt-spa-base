export const state = () => ({
  window: {
    height: 0,
    width: 767,
    scrollY: 0
  },
  nav_short: ['lorem-1', 'lorem-2', 'lorem-3'],
  nav: ['lorem-1', 'lorem-2', 'lorem-3', 'lorem-4', 'lorem-5', 'lorem-6'],
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
