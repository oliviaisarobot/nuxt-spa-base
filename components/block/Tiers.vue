<template lang="pug">
  div(ref="tierBlock").content-block.container
    div.content-block.tiers.mb-4.mt-4
      div(
        v-for="tier in tierCount" v-if="tierCount > 0"
        :class="{ 'special': tier == specialIndex }"
        :key="'tier-' + tier"
        ).tier-card.mb-4
        .tier-card-insert(:class="{ 'special': tier == specialIndex }")
          .special-text(v-if="tier == specialIndex").uppercase
            i.material-icons.pr-3.inline-block favorite
            | {{ $t('index.tiers.special-text') }}
          .top(:class="{ 'special': tier == specialIndex }")
            h3 {{ $t('index.tiers.tier-' + tier + '.title') }}
            .tier-price
              .currency {{ $t('index.tiers.tier-' + tier + '.price.currency') }}
              .amount {{ $t('index.tiers.tier-' + tier + '.price.amount') }}
              .unit / {{ $t('index.tiers.tier-' + tier + '.price.unit') }}*
            ul.tier-content
              li(v-if="Array.isArray(getTierContent(tier)) === true" v-for="item in getTierContent(tier)")
                i.material-icons.inline-block.pr-2 done
                | {{ item }}
              p(v-else) {{ getTierContent(tier) }}
          .bottom(:class="{ 'special': tier == specialIndex }")
            .tier-link
              form-button(
                :classes="tier == specialIndex ? 'bg-white text-secondary' : 'bg-primary text-white'"
                to="tier"
                )
                template(slot="content") {{ $t('navigation.' + getTierLinkText(tier)) }}
    slot
</template>

<script>
import FormButton from '~/components/form/Button'

export default {
  props: {
    tierCount: {
      type: Number,
      default: 3
    },
    specialIndex: {
      type: Number,
      default: 2
    }
  },
  components: {
    FormButton
  },
  methods: {
    getTierContent(tier) {
      return this.$t('index.tiers.tier-' + tier + '.content')
    },
    getTierLinkText(tier) {
      return this.$t('index.tiers.tier-' + tier + '.link')
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

.tiers {
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  padding: 0;

  .tier-card {
    max-width: 370px;
    min-width: 330px!important;
    overflow: hidden;
    transition: transform .2s ease;
    -webkit-transition: -webkit-transform .2s ease;
    -moz-transition: -moz-transform 0.2s ease;

    &:hover, &:focus, &:focus-within {
      transition: transform .2s ease;
      -webkit-transition: -webkit-transform .2s ease;
      -moz-transition: -moz-transform 0.2s ease;
      -webkit-transform: translate(-2px, -2px);
      -moz-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }

    .tier-card-insert {
      align-items: stretch;
      background: linear-gradient(white, $color-base-gray-light);
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 100%;
      margin: .85em;
      position: relative;
      
      &.special {
        background: linear-gradient($color-base-gray-medium, $color-primary);
      }

      .special-text {
        background: rgba(0, 0, 0, .2);
        color: white;
        left: 0;
        padding: .5em 3em .5em 1em;
        position: absolute;
        top: 0;
        -webkit-clip-path: polygon(100% 0, 76% 100%, 75% 100%, 0% 100%, 0 50%, 0% 0%);
        clip-path: polygon(100% 0, 76% 100%, 75% 100%, 0% 100%, 0 50%, 0% 0%);
      }

      .top {
        flex-grow: 1;
        padding: 1em;
        min-width: 100%;

        &.special {
          color: white;

          li {
            &:not(:last-child) {
              border-bottom: 1px solid white!important;
            }
          }
        }

        h3 {
          font-size: 1.5em!important;
          font-weight: bold;
          height: 45px;
          margin-bottom: 0.5em!important;
          margin-top: 40px;
          text-align: center;
          text-transform: uppercase;
          padding: 0;
        }

        .tier-price {
          align-items: flex-start;
          display: flex;
          font-size: 1.5em;
          height: 75px;
          justify-content: center;
          margin-bottom: 1.25em;
          min-width: 100%;
          text-align: center;

          .currency {
            font-size: .7em;
            margin: 1.5em .5em 0 0;
          }

          .amount {
            font-size: 3em;
            font-weight: bold;
          }

          .unit {
            align-self: flex-end;
            font-size: .7em;
            margin: 1em 0 0 .5em;
          }
        }

        .tier-content {
          opacity: .8;

          li, p {
            font-size: .9em;
            line-height: 1.6em;
            list-style-type: none;
            text-align: center;
          }

          li {
            padding: .5em 0 .5em 0;

            &:not(:last-child) {
              border-bottom: 1px solid $color-base-gray-medium;
            }
          }
        }
      }

      .bottom {
        .tier-link {
          align-items: center;
          align-self: flex-end;
          display: flex;
          justify-content: center;
          margin: 0 0 3em 0;

          .btn {
            text-align: center;
          }
        }
      }
    }
  }
}

</style>
