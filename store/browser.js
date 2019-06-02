export const state = () => ({
  window: {
    height: 0,
    width: 0
  },
  anchors: ['anchor-1', 'anchor-2', 'anchor-3', 'anchor-4'],
  breakpoints: {
    'sm': 767,
    'md': 992,
    'lg': 1199
  }
})

export const mutations = {
  setAnchors(state, anchors) {
    state.anchors = anchors
  },

  setBrowserSize(state) {
    state.window.height = window.innerHeight
    state.window.width = window.innerWidth
  }
}

export const getters = {
  isMobile: (state) => {
    return state.window.width < state.breakpoints.sm || typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1
  }
}
