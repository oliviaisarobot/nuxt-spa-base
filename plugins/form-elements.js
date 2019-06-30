import Vue from 'vue'

import FormButton from '~/components/form/Button'
import FormInput from '~/components/form/Input'
import FormSelect from '~/components/form/Select'

const components = {
  FormButton,
  FormInput,
  FormSelect
}

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})
