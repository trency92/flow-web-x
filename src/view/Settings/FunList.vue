<template>
  <v-list class="pa-0 func-list full-size">
    <v-subheader class="grey lighten-2">
      <span class="font-weight-bold">{{ $t('menu.settings') }}</span>
    </v-subheader>

    <v-list-item-group v-model="selected" color="primary" active-class="on-active">
      <v-list-item v-for="item in items"
                   :key="item.path"
                   dense
                   class="bottom-border left-border"
                   @click="onMenuItemClick(item.path)">
        <v-list-item-content>
          <v-list-item-subtitle class="font-weight-bold">
            {{ $t(`${item.i18n}`) }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
  export default {
    name: 'SettingsFunList',
    data() {
      return {
        selected: 0,
        items: [
          {
            i18n: 'settings.li.profile',
            path: 'profile'
          },
          {
            i18n: 'settings.li.users',
            path: 'users'
          },
          {
            i18n: 'settings.li.agent',
            path: 'agents'
          },
          {
            i18n: 'settings.li.secret',
            path: 'secrets'
          },
          {
            i18n: 'settings.li.config',
            path: 'configs'
          },
          {
            i18n: 'settings.li.plugin',
            path: 'plugins'
          },
          {
            i18n: 'settings.li.system',
            path: 'system'
          }
        ]
      }
    },
    methods: {
      onMenuItemClick(path) {
        this.$router.push(`/settings/${path}`)
      }
    }
  }
</script>

<style lang="scss">
  .func-list {
    font-size: 1px !important;

    div[role="listitem"][aria-selected="true"] > div::before {
      background-color: #3dace3;
      bottom: 0;
      content: "";
      left: 0;
      position: absolute;
      top: 0;
      width: 3px;
    }

    .on-active{
      color: #ffffff !important;
    }
  }
</style>
