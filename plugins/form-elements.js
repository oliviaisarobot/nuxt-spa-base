import Vue from 'vue'

import FormButton from '~/components/form/Button'
import FormInput from '~/components/form/Input'

const components = {
  FormButton,
  FormInput
}

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})
