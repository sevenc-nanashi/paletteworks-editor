<script lang="ts">
  import {
    COLORS,
    MARGIN_BOTTOM,
    TEXT_MARGIN,
    TICK_PER_BEAT,
    TICK_PER_MEASURE,
    Z_INDEX
  } from '$lib/consts'

  // Functions
  import { position, PositionManager } from '$lib/position'
  import { getContext, onMount } from 'svelte'

  // Types
  import type PIXI from 'pixi.js'

  // Props
  export let maxTick: number
  export let maxMeasure: number
  export let snapTo: number
  export let timeSignatures: Map<number, [number, number]>

  // Contexts
  const PIXI = getContext<typeof import('pixi.js')>('PIXI')
  const mainContainer = getContext<PIXI.Container>('mainContainer')

  // Stores
  import { preferences } from '$lib/preferences'

  // Variables
  let graphics: PIXI.Graphics

  onMount(async () => {
    graphics = new PIXI.Graphics()
    graphics.zIndex = Z_INDEX.GRID
    mainContainer.addChild(graphics)
  })

  $: if (graphics) {
    drawBackground($position, maxMeasure, snapTo, timeSignatures)
  }

  function drawBackground(
    position: PositionManager,
    maxMeasure: number,
    snapTo: number,
    timeSignatures: Map<number, [number, number]>
  ) {
    const innerHeight = position.containerHeight
    graphics.removeChildren()
    graphics.clear()

    const left = position.calcX(1)

    // Draw beat / measures
    let accumulatedTicks = 0
    let accumulatedMeasures = 0
    ;[...timeSignatures].forEach(([measure, [p, q]], ind, arr) => {
      const beatsPerMeasure = p / q * 4

      const [nextMeasure] = arr[ind + 1] ?? [maxMeasure + 1]
      const startTick = accumulatedTicks
      accumulatedTicks += (nextMeasure - measure) * beatsPerMeasure * TICK_PER_BEAT

      const maxT = maxTick - startTick


      for (let tick = 0; tick < (nextMeasure - measure) * beatsPerMeasure * TICK_PER_BEAT; tick++) {
        const y = position.calcY(startTick + tick)
        if (tick % (beatsPerMeasure * TICK_PER_BEAT) === 0) {
          graphics.lineStyle(2, COLORS.COLOR_BAR_PRIMARY, 1, 0.5)
          graphics.moveTo(left, y)
          graphics.lineTo(left + position.laneAreaWidth, y)

          // const number = (accumulatedBeats + i) / beatsPerMeasure
          const text = new PIXI.BitmapText(`#${accumulatedMeasures + 1}`, {
            fontName: 'Font',
            tint: 0xFFFFFF,
          })
          accumulatedMeasures += 1
          text.x = left - TEXT_MARGIN
          text.y = y
          text.anchor.x = 1
          text.anchor.y = 0.5
          graphics.addChild(text)
        } else if (tick < maxT && tick % (TICK_PER_BEAT * beatsPerMeasure / p) === 0) {
          graphics.lineStyle(1, COLORS.COLOR_BAR_SECONDARY, 1, 0.5)
          graphics.moveTo(left + $preferences.laneWidth, y)
          graphics.lineTo(left + position.laneAreaWidth - $preferences.laneWidth, y)
        } else if (tick < maxT && snapTo < 192 && tick % (TICK_PER_BEAT * beatsPerMeasure / p / snapTo * 4) === 0) {
          graphics.lineStyle(1, COLORS.COLOR_LANE_SECONDARY, 1, 0.5)
          graphics.moveTo(left + $preferences.laneWidth, y)
          graphics.lineTo(left + position.laneAreaWidth - $preferences.laneWidth, y)
        }
      }
    })

    // Draw lanes
    for (let i = 1; i < 14; i++) {
      const x = left + i * $preferences.laneWidth
      const primary = i % 2 !== 0

      if (primary) {
        graphics.lineStyle(2, COLORS.COLOR_LANE_PRIMARY, 1, 0.5)
      } else {
        graphics.lineStyle(1, COLORS.COLOR_LANE_SECONDARY, 1, 0.5)
      }
      graphics.moveTo(x, innerHeight)
      graphics.lineTo(x, position.calcY(maxMeasure * TICK_PER_MEASURE) - MARGIN_BOTTOM)
    }
  }
</script>
