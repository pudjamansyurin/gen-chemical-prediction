<template>
  <v-menu :nudge-width="150" offset-y>
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-card :dark="darker">
      <v-list class="py-0" dense>
        <template v-if="!webview">
          <v-list-item @click="toggleFullscreen">
            <v-list-item-icon>
              <v-icon>{{ iconFullscreen }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ fullscreen ? "Normal-screen" : "Full-screen" }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </template>

        <v-list-item @click="TOGGLE_DENSER">
          <v-list-item-icon>
            <v-icon>{{ denseIcon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ denser ? "Bigger" : "Smaller" }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item @click="logout()">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Logout </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import { mapMutations } from "vuex";

import { TOGGLE_DENSER } from "@/Store/app/mutation-types";
import { NavigationMixin, FullscreenMixin } from "@/Mixins";

export default {
    mixins: [NavigationMixin, FullscreenMixin],
    computed: {
        denseIcon() {
            return this.denser ? "mdi-table" : "mdi-table-large";
        },
    },
    methods: {
        ...mapMutations("app", [TOGGLE_DENSER]),
    },
};
</script>

<style>
</style>
