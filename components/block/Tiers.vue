<template lang="pug">
  div(ref="tierBlock").content-block.container
    div.content-block.tiers.mb-4.mt-4
      div(
        v-for="tier in tierCount" v-if="tierCount > 0"
        :class="{ 'special': tier == specialIndex }"
        :key="'tier-' + tier"
        ).tier-card.mb-4
        .tier-card-insert
          .special-text(v-if="tier == specialIndex") {{ $t('index.tiers.special-text') }}
          .top(:class="{ 'special': tier == specialIndex }")
            h3 {{ $t('index.tiers.tier-' + tier + '.title') }}
            .tier-price
              .currency {{ $t('index.tiers.tier-' + tier + '.price.currency') }}
              .amount {{ $t('index.tiers.tier-' + tier + '.price.amount') }}
              .unit / {{ $t('index.tiers.tier-' + tier + '.price.unit') }}*
            ul.tier-content
              li(v-if="Array.isArray(getTierContent(tier)) === true" v-for="item in getTierContent(tier)") {{ item }}
              p(v-else) {{ getTierContent(tier) }}
          .bottom(:class="{ 'special': tier == specialIndex }")
            .tier-link
              b-btn(
                :to="localePath(getTierLinkText(tier))"
                :variant=" tier == specialIndex ? 'light' : 'secondary'"
                ) {{ $t('navigation.' + getTierLinkText(tier)) }}
    slot
</template>

<script>
export default {
  props: {
    tierCount: {
      type: Number,
      default: 3
    },
    specialIndex: {
      type: Number,
      default: 3
    }
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
    transition: transform .5s ease;

    &:hover, &:focus, &:focus-within {
      transform: scale(1.05);
    }

    .tier-card-insert {
      align-items: stretch;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 100%;
      padding: 1em;
      position: relative;

      .special-text {
        background: linear-gradient(0.25turn, $color-base-gray-light, $color-base-gray-medium);
        color: white;
        font-weight: bold;
        left: 1em;
        padding: .5em 0 .5em 1em;
        position: absolute;
        text-transform: uppercase;
        top: 1em;
        width: 50%;
      }

      .top {
        background: linear-gradient(white, $color-base-gray-light);
        flex-grow: 1;
        padding: 1em;
        min-width: 100%;

        &.special {
          background: linear-gradient($color-base-gray-medium, $color-secondary);
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
          height: 85px;
          margin-bottom: 0.5em!important;
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
        background-color: $color-base-gray-light;

        &.special {
          background-color: $color-secondary!important;
        }

        .tier-link {
          align-items: center;
          align-self: flex-end;
          display: flex;
          justify-content: center;
          margin: 0 0 1.5em 0;

          .btn {
            text-align: center;
          }
        }
      }
    }
  }
}

</style>
