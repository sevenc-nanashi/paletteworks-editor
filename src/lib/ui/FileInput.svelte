<script lang='ts'>
  import LL from '$i18n/i18n-svelte'

  import TextInput from '$lib/ui/TextInput.svelte'
  import Button from './Button.svelte'
  import Icon from '@iconify/svelte'
  import Menu from './Menu.svelte'
  import MenuItem from './MenuItem.svelte'
  import MenuTrigger from './MenuTrigger.svelte'
  import MenuDivider from './MenuDivider.svelte'

  import { createEventDispatcher } from 'svelte'
  import toast from '$lib/ui/toast'
  import { download, dropHandler } from '$lib/basic/file'

  export let file: File | null
  export let accept: string
  export let name: string
  export let openIcon: string
  export let text: string
  export let fileIcon: string
  export let loading: boolean

  const dispatch = createEventDispatcher<{
    open: File
  }>()

  let fileList: FileList

  $: file = fileList?.[0] ?? null

  $: if (fileList?.[0]) dispatch('open', fileList?.[0])

  let input: HTMLInputElement

  $: if (input && file !== fileList?.[0]) {
    input.value = ''
  }

  function onclick() {
    input.click()
  }

  let container: HTMLDivElement
  let menu: HTMLDivElement
</script>

<input type="file" bind:files={fileList} {accept} {name} bind:this={input}>

<div
  class="file-container"
  bind:this={container}
  on:dragover|preventDefault|capture={() => { /* empty */ }}
  on:drop|preventDefault|capture={dropHandler(accept, (dropped) => { file = dropped; dispatch('open', file) }, () => { toast.error($LL.editor.messages.unknownFileType()) })}
>
  {#if file}
    <TextInput value={file.name} disabled>
      <div slot="head">
        <Icon icon={fileIcon} />
      </div>
      <Button {loading} class="action" slot="tail" icon={openIcon} on:click={onclick}></Button>
    </TextInput>
  {:else}
    <Button {loading} icon={openIcon} on:click={onclick} style="width: 100%;">{text}</Button>
  {/if}
</div>

<Menu bind:menu>
  <MenuTrigger slot="trigger" contextArea={container} {menu}/>
  {#if file}
    <MenuItem text={$LL.editor.menu.download()} icon="mdi:download" on:click={async () => { if (file) await download(file, file.name) }} />
    <MenuDivider/>
    <MenuItem text={$LL.editor.menu.delete()} icon="mdi:delete" on:click={() => { if (confirm($LL.editor.messages.deleteConfirm())) { input.value = ''; file = null } }} />
  {/if}
</Menu>

<style>
  input {
    display: none;
  }

  input::-webkit-file-upload-button {
    color: white;
  }

  .file-container {
    display: flex;
  }
  .file-container > :global(*) {
    margin: 0;
  }
</style>
