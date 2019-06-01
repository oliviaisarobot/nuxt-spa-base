export const state = () => ({
  window: {
    height: 0,
    width: 0
  },
  blocks: [],
  breakpoints: {
    'sm': 767,
    'md': 992,
    'lg': 1199
  }
})

export const mutations = {
  setBlocks(state, blocks) {
    state.blocks = blocks
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
