<script lang="ts">
  import type { Mutation } from '$lib/editing/mutations'
  import type { Writable } from 'svelte/store'

  import Button from '$lib/ui/Button.svelte'

  export let text: string
  export let button: string
  export let undo: () => void
  // export let toastID: number
  export let history: Writable<Mutation<unknown>[]>
  export let mutation: Mutation<unknown>
  export let undone: boolean
  
  $: done = $history.includes(mutation)
</script>

<div class:clicked={done}>
  {#if undone}
    <s>{text}</s>
  {:else}
    {text}
  {/if}
  <Button on:click={undo} class="text" disabled={done}>
    {button}
  </Button>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div > :global(.text) {
    color: #0282c3;
  }

  div.clicked > :global(.text) {
    color: #aaaaaa;
  }
</style>