<script lang="ts">
  import ClickableIcon from "./ClickableIcon.svelte"

  export let value: string | number
  export let inputElement: HTMLInputElement | undefined = undefined
  export let disabled: boolean = false
  export let type: 'text' | 'number' | 'search' = 'text'

  function clearValue() {
    value = ''
  }
</script>

<div class={[$$props.class, "input-container"].join(' ')} on:click={() => { inputElement?.focus() }}>
  <slot name="head" />
  {#if type === 'number'}
    <input
      type="number"
      bind:value={value}
      bind:this={inputElement}
      on:keydown
      {disabled}
    />
  {:else if type === 'text'}
    <input
      type="text"
      bind:value={value}
      bind:this={inputElement}
      on:keydown
      {disabled}
    />
  {:else if type === 'search'}
    <input
      type="search"
      bind:value={value}
      bind:this={inputElement}
      on:keydown
      {disabled}
    />
    {#if value !== ''}
      <ClickableIcon
        icon="icon-park-outline:close"
        on:click={clearValue}
      />
    {/if}
  {/if}
  <slot name="tail"/>
  <slot name="action"></slot>
</div>

<style>
  .input-container {
    border: none;
    border-radius: var(--input-border-radius);
    color: inherit;
    padding: 0 1em;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.6);
    background: rgba(255, 255, 255, 0.1);
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    gap: 1em;
    align-items: center;
  }

  .input-container:focus-within {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
    outline: 1px solid #fff;
  }

  input {
    background: transparent;
    border: none;
    box-shadow: none;
    width: 100%;
    flex-grow: 1;
    padding: var(--input-padding-vertical) 0;
  }

  .input-container :global(*) {
    flex-grow: 0;
  }
  
  input:focus {
    outline: none
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
</style>