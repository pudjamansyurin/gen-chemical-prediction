<template>
  <v-dialog
    :value="value"
    @input="$emit('input', $event)"
    :fullscreen="mobile || fullscreen"
    :max-width="width"
    :dark="darker"
    persistent
    scrollable
  >
    <v-card :loading="disabled">
      <v-card-title>
        <v-row no-gutters>
          <v-col cols="12" sm="5">
            <span class="headline">{{ title }}</span>

            <v-btn v-if="!mobile" @click="fullscreen = !fullscreen" icon>
              <v-icon>{{ iconFullscreen }}</v-icon>
            </v-btn>
          </v-col>
          <v-col v-if="tabs.length > 0" cols="12" sm="7">
            <v-tabs
              :value="tab"
              @change="$emit('update:tab', $event)"
              background-color="transparent"
              active-class="font-weight-bold"
              height="30"
              hide-slider
              right
            >
              <v-tab v-for="item in tabs" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>
          </v-col>
        </v-row>
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text class="py-5" :style="cardTextHeight">
        <v-tabs-items
          v-if="tabs.length > 0"
          :value="tab"
          @input="$emit('update:tab', $event)"
          :dark="darker"
          touchless
        >
          <v-tab-item v-for="item in tabs" :key="item">
            <slot :name="item"> </slot>
          </v-tab-item>
        </v-tabs-items>
        <slot v-else></slot>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click="$emit('input', false)" color="blue darken-1" text>
          Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-if="!readonly"
          :disabled="disabled"
          @click="$emit('submit')"
          color="primary"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: "Detail Item",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        width: {
            type: [String, Number],
            default: 600,
        },

        tabs: {
            type: Array,
            default: () => [],
        },
        tab: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            fullscreen: true,
        };
    },
    computed: {
        cardTextHeight() {
            if (!this.mobile && !this.fullscreen) return "max-height: 500px;";
        },
        iconFullscreen() {
            return this.fullscreen ? "mdi-fullscreen-exit" : "mdi-fullscreen";
        },
    },
};
</script>

<style>
</style>
