/*
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

goog.provide('app.Constants');


/**
 * Shared game constants
 */
app.Constants = {
  CANVAS_WIDTH_LANDSCAPE: 1600,
  CANVAS_HEIGHT_LANDSCAPE: 900,
  CANVAS_WIDTH_PORTRAIT: 900,
  CANVAS_HEIGHT_PORTRAIT: 1200,
  NUM_BACKUPS: 32,

  COLORPICKER_DEFAULT: '8bc34a',

  ROTATE_ANGLE: 45,

  PEN_MIN: 5,
  PEN_MAX: 50,
  PENCIL_MIN: 5,
  PENCIL_MAX: 10,
  ERASER_MIN: 10,
  ERASER_MAX: 100,
  SHAPE_MIN: 0.5,
  SHAPE_MAX: 3.0,
  STAMP_MIN: 0.5,
  STAMP_MAX: 2.5,
  STICKER_MIN: 0.25,
  STICKER_MAX: 1.5,
  SPRAY_CIRCLE_SIZE: 50,
  SPRAY_MIN: 100,
  SPRAY_MAX: 300,
  TINSEL_MIN: 0.1,
  TINSEL_MAX: 0.2,
  FROSTING_MIN: 0.05,
  FROSTING_MAX: 0.2,
  NEON_MIN: 5,
  NEON_MAX: 15,
  PAINT_ROLLER_MIN: 25,
  PAINT_ROLLER_MAX: 100,

  SNOW_MAX_X: 0.02,
  SNOW_MAX_Y: 0.05,
  SNOW_MAX_SIZE: 10,
  SNOW_MAX_PARTICLES: 60,
  SNOW_MIN_DISTANCE: 0.2,

  SPRINKLE_SPRAY_CONFIG: {
    images: [
      { elemId: 'sprinkle2' },
      { elemId: 'sprinkle3' },
      { elemId: 'sprinkle4' },
      { elemId: 'sprinkle5' }
    ]
  },
  CANDY_SPRAY_CONFIG: {
    maxOffset: 50,
    images: [
      { name: 'image-candy-jellybean',
        color: '#ff0619' },
      { name: 'image-candy-jellybean',
        color: '#af0000' },
      { name: 'image-candy-jellybean',
        color: '#259b24' },
      { name: 'image-candy-jellybean',
        color: '#22af22' },
      { name: 'image-candy-jellybean',
        color: '#00750b' },
      { name: 'image-candy-sprinkle-round',
        noRotate: true,
        color: '#ff0619' },
      { name: 'image-candy-sprinkle-round',
        noRotate: true,
        color: '#af0000' },
      { name: 'image-candy-sprinkle-round',
        noRotate: true,
        color: '#259b24' },
      { name: 'image-candy-sprinkle-round',
        noRotate: true,
        color: '#22af22' },
      { name: 'image-candy-sprinkle-round',
        noRotate: true,
        color: '#00750b' },
      { name: 'image-candy-sprinkle-round',
        noRotate: true,
        color: '#f2faff' },
      { name: 'image-candy-sprinkle',
        color: '#ff0619' },
      { name: 'image-candy-sprinkle',
        color: '#af0000' },
      { name: 'image-candy-sprinkle',
        color: '#259b24' },
      { name: 'image-candy-sprinkle',
        color: '#22af22' },
      { name: 'image-candy-sprinkle',
        color: '#00750b' },
      { name: 'image-candy-sprinkle',
        color: '#f2faff' },
      { name: 'image-candy-sprinkle-tree',
        color: '#ff0619' },
      { name: 'image-candy-sprinkle-tree',
        color: '#af0000' },
      { name: 'image-candy-sprinkle-tree',
        color: '#259b24' },
      { name: 'image-candy-sprinkle-tree',
        color: '#00750b' },
      { name: 'image-candy-sprinkle-leaf',
        color: '#259b24' },
      { name: 'image-candy-sprinkle-leaf',
        color: '#00750b' },
      { name: 'image-candy-sucker',
        color: '#e51c23' },
      { name: 'image-candy-sucker',
        color: '#259b24' },
      { name: 'image-candy-wrapper1',
        color: '#e51c23' },
      { name: 'image-candy-wrapper1',
        color: '#259b24' },
      { name: 'image-candy-wrapper2',
        color: '#e51c23' },
      { name: 'image-candy-wrapper2',
        color: '#259b24' },
      { name: 'image-candy-mint-swirl',
        color: '#ff0619' },
      { name: 'image-candy-mint-swirl',
        color: '#af0000' },
      { name: 'image-candy-mint-swirl',
        color: '#259b24' },
      { name: 'image-candy-mint-swirl',
        color: '#22af22' },
      { name: 'image-candy-mint-swirl',
        color: '#00750b' },
      { name: 'image-candy-mint-wheel',
        color: '#ff0619' },
      { name: 'image-candy-mint-wheel',
        color: '#af0000' },
      { name: 'image-candy-mint-wheel',
        color: '#259b24' },
      { name: 'image-candy-mint-wheel',
        color: '#22af22' },
      { name: 'image-candy-mint-wheel',
        color: '#00750b' },
      { name: 'image-candy-gumdrop',
        color: '#ff0619' },
      { name: 'image-candy-gumdrop',
        color: '#af0000' },
      { name: 'image-candy-gumdrop',
        color: '#259b24' },
      { name: 'image-candy-gumdrop',
        color: '#22af22' },
      { name: 'image-candy-gumdrop',
        color: '#00750b' },
      { elemId: 'candycane_green' },
      { elemId: 'candycane_greens' },
      { elemId: 'candycane_holiday' },
      { elemId: 'candycane_red' },
      { elemId: 'candycane_reds' },
      { elemId: 'candycane_tropical' },
      { elemId: 'candycane_holiday' },
      { elemId: 'chocolate_gumdrop' },
      { elemId: 'chocolate_nuts' },
      { elemId: 'chocolate_pretzel' },
      { elemId: 'chocolate_squiggle' },
      { elemId: 'chocolate_stripes' },
      { elemId: 'chocolate_swirl' },
      { elemId: 'cookie_choc_chip' },
      { elemId: 'cookie_kiss' },
      { elemId: 'jellybean_green_dots' },
      { elemId: 'jellybean_red_dots' },
      { elemId: 'sprinkle_snow' }
    ]
  },
  CONFETTI_SPRAY_CONFIG: {
    maxOffset: 50,
    images: [
      { name: 'image-confetti-curve',
        color: '#e51c23' },
      { name: 'image-confetti-curve',
        color: '#259b24' },
      { name: 'image-confetti-curve',
        color: '#9c27b0' },
      { name: 'image-confetti-curve',
        color: '#ffeb3b' },
      { name: 'image-confetti-curve',
        color: '#ffc107' },
      { name: 'image-confetti-curve',
        color: '#e91e63' },
      { name: 'image-confetti-curve',
        color: '#5677fc' },
      { name: 'image-confetti-triangle',
        color: '#e51c23' },
      { name: 'image-confetti-triangle',
        color: '#259b24' },
      { name: 'image-confetti-triangle',
        color: '#9c27b0' },
      { name: 'image-confetti-triangle',
        color: '#ffeb3b' },
      { name: 'image-confetti-triangle',
        color: '#ffc107' },
      { name: 'image-confetti-triangle',
        color: '#e91e63' },
      { name: 'image-confetti-triangle',
        color: '#5677fc' },
      { name: 'image-confetti-circle',
        color: '#e51c23' },
      { name: 'image-confetti-circle',
        color: '#259b24' },
      { name: 'image-confetti-circle',
        color: '#9c27b0' },
      { name: 'image-confetti-circle',
        color: '#ffeb3b' },
      { name: 'image-confetti-circle',
        color: '#ffc107' },
      { name: 'image-confetti-circle',
        color: '#e91e63' },
      { name: 'image-confetti-circle',
        color: '#5677fc' },
      { name: 'image-confetti-outlined-circle',
        color: '#e51c23' },
      { name: 'image-confetti-outlined-circle',
        color: '#259b24' },
      { name: 'image-confetti-outlined-circle',
        color: '#9c27b0' },
      { name: 'image-confetti-outlined-circle',
        color: '#ffeb3b' },
      { name: 'image-confetti-outlined-circle',
        color: '#ffc107' },
      { name: 'image-confetti-outlined-circle',
        color: '#e91e63' },
      { name: 'image-confetti-outlined-circle',
        color: '#5677fc' },
      { name: 'image-confetti-squiggle',
        color: '#e51c23' },
      { name: 'image-confetti-squiggle',
        color: '#259b24' },
      { name: 'image-confetti-squiggle',
        color: '#9c27b0' },
      { name: 'image-confetti-squiggle',
        color: '#ffeb3b' },
      { name: 'image-confetti-squiggle',
        color: '#ffc107' },
      { name: 'image-confetti-squiggle',
        color: '#e91e63' },
      { name: 'image-confetti-squiggle',
        color: '#5677fc' }
    ]
  },

  HOLIDAY_SPRAY_CONFIG: {
    maxOffset: 100,
    images: [
      { name: 'image-string-light',
        color: '#259b24' },
      { name: 'image-string-light',
        color: '#e51c23' },
      { name: 'image-string-light',
        color: '#5677fc' },
      { name: 'image-string-light',
        color: '#ffeb3b' },
      { elemId: "candle" },
      { elemId: "candycane_red" },
      { elemId: "cookie_man" },
      { elemId: "cookie_snowman" },
      { elemId: "cookie_stocking" },
      { elemId: "cookie_tree" },
      { elemId: "firewood" },
      { elemId: "holiday_bells" },
      { elemId: "holiday_hat" },
      { elemId: "holiday_mitten" },
      { elemId: "holly" },
      { elemId: "milk" },
      { elemId: "mug_green" },
      { elemId: "mug_red" },
      { elemId: "red_bow" },
      { elemId: "snowglobe_snowman" },
      { elemId: "snowglobe_tree" },
      { elemId: "stocking_green" },
      { elemId: "stocking_pink" },
      { elemId: "stocking_red" },
      { elemId: "stocking_yellow" }
    ]
  },

  OCEAN_SPRAY_CONFIG: {
    maxOffset: 100,
    images: [
      { elemId: "box_fish" },
      { elemId: "coral_large" },
      { elemId: "coral_medium" },
      { elemId: "coral_small" },
      { elemId: "fish_little" },
      { elemId: "fish_pink" },
      { elemId: "fish_teal" },
      { elemId: "fish_yellow" },
      { elemId: "jellyfish" },
      { elemId: "light_fish" },
      { elemId: "ocean_bubble",
        frequencyFactor: 20 },
      { elemId: "seashell" },
      { elemId: "seaweed_green" },
      { elemId: "seaweed_lime" },
      { elemId: "starfish" },
      { elemId: "turtle" }
    ]
  },

  // Needs to match _colors.scss
  SVG_COLOR_MATRIX: {
    '#8bc34a': {
      'primary': '#8bc34a',
      'highlight': '#93d839',
      'medium': '#65af35',
      'dark': '#1d9904',
      'complement': '#e51c23'
    },
    '#ffeb3b': {
      'primary': '#ffeb3b',
      'highlight': '#fffb73',
      'medium': '#ffcc3e',
      'dark': '#ffa33e',
      'complement': '#03a9f4'
    },
    '#ffc107': {
      'primary': '#ffc107',
      'highlight': '#ffdb08',
      'medium': '#ffa506',
      'dark': '#ff7708',
      'complement': '#e91e63'
    },
    '#ff5722': {
      'primary': '#ff5722',
      'highlight': '#ff8101',
      'medium': '#ef4010',
      'dark': '#e51b23',
      'complement': '#ffc107'
    },
    '#e91e63': {
      'primary': '#e91e63',
      'highlight': '#fc3d86',
      'medium': '#d60756',
      'dark': '#b20044',
      'complement': '#ff9800'
    },
    '#259b24': {
      'primary': '#259b24',
      'highlight': '#22af22',
      'medium': '#008e00',
      'dark': '#00750b',
      'complement': '#ffc107'
    },
    '#cddc39': {
      'primary': '#cddc39',
      'highlight': '#e7ef41',
      'medium': '#b5cc0e',
      'dark': '#6dba00',
      'complement': '#9c27b0'
    },
    '#ff9800': {
      'primary': '#ff9800',
      'highlight': '#ffb703',
      'medium': '#ff7503',
      'dark': '#ff5703',
      'complement': '#e91e63'
    },
    '#e51c23': {
      'primary': '#e51c23',
      'highlight': '#ff0619',
      'medium': '#c61724',
      'dark': '#af0000',
      'complement': '#8bc34a'
    },
    '#9c27b0': {
      'primary': '#9c27b0',
      'highlight': '#c30fe8',
      'medium': '#8a11a8',
      'dark': '#6e0687',
      'complement': '#cddc39'
    },
    '#3f51b5': {
      'primary': '#3f51b5',
      'highlight': '#4661e0',
      'medium': '#2e46aa',
      'dark': '#293e96',
      'complement': '#ff9800'
    },
    '#03a9f4': {
      'primary': '#03a9f4',
      'highlight': '#06c5f2',
      'medium': '#0692f2',
      'dark': '#0677f2',
      'complement': '#ffeb3b'
    },
    '#6ae5b9': {
      'primary': '#6ae5b9',
      'highlight': '#8efcdc',
      'medium': '#40d39b',
      'dark': '#53bca6',
      'complement': '#9c27b0'
    },
    '#9e9e9e': {
      'primary': '#9e9e9e',
      'highlight': '#bdbdbd',
      'medium': '#848484',
      'dark': '#777777',
      'complement': '#e51c23'
    },
    '#f2faff': {
      'primary': '#f2faff',
      'highlight': '#ffffff',
      'medium': '#d4ecf9',
      'dark': '#acd1e2',
      'complement': '#03a9f4'
    },
    '#673ab7': {
      'primary': '#673ab7',
      'highlight': '#764acc',
      'medium': '#54349b',
      'dark': '#48219e',
      'complement': '#ff9800'
    },
    '#5677fc': {
      'primary': '#5677fc',
      'highlight': '#6c9dff',
      'medium': '#3f66e0',
      'dark': '#1c40c6',
      'complement': '#cddc39'
    },
    '#009688': {
      'primary': '#009688',
      'highlight': '#06bca6',
      'medium': '#008474',
      'dark': '#007a7a',
      'complement': '#5677fc'
    },
    '#795548': {
      'primary': '#795548',
      'highlight': '#895c4e',
      'medium': '#6b493f',
      'dark': '#593d36',
      'complement': '#03a9f4'
    },
    '#212121': {
      'primary': '#212121',
      'highlight': '#333333',
      'medium': '#111111',
      'dark': '#000000',
      'complement': '#3f51b5'
    },

    // for mint swirl stamps
    '#ff0619': {
      'highlight': '#ff0619',
    },
    '#af0000': {
      'highlight': '#af0000',
    },
    '#22af22': {
      'highlight': '#259b24',
    },
    '#00750b': {
      'highlight': '#00750b',
    }
  },
};
