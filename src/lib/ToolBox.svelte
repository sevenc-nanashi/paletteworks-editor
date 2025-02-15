<script lang="ts">
  import LL, { setLocale, locale } from '$i18n/i18n-svelte'
  import { loadLocaleAsync } from '$i18n/i18n-util.async'

  import { locales } from '$i18n/i18n-util'
  import { LANGUAGE_ENDONYMS } from '$i18n/metadata'

  import Icon, { addIcon } from '@iconify/svelte'

  import Menu from '$lib/ui/Menu.svelte'
  import MenuItem from '$lib/ui/MenuItem.svelte'
  import MenuDivider from '$lib/ui/MenuDivider.svelte'
  import MenuTrigger from '$lib/ui/MenuTrigger.svelte'

  import ToolButton from '$lib/ui/ToolButton.svelte'

  import { ALLOWED_SNAPPINGS, MODES } from '$lib/editing/modes'
  import type { Mode, SnapTo } from '$lib/editing/modes'

  import toast from '$lib/ui/toast'
  import { createEventDispatcher } from 'svelte'

  addIcon('custom:logo', {
    body: `<path d="M258 29L472.609 243.609L256 337.821L256 335.486V74L72.2283 257.891L256 337.821V358L103.869 291.478L256 443.708L256 358L481.684 259.316L258 483L37.4242 262.424L31 256L42.1788 244.821L258 29Z" fill="currentColor"></path>`,
    width: 512,
    height: 512
  })

  export let currentMode: Mode
  export let snapTo: SnapTo
  export let openMainMenu: (() => void) | undefined = undefined

  let menu: HTMLDivElement
  import { KEYBOARD_SHORTCUTS } from '$lib/control/keyboard'

  const dispatch = createEventDispatcher<{
    export: void,
    image: void,
    copy: void,
    cut: void,
    paste: void,
    undo: void,
    redo: void,
    new: void,
    open: void,
    selectall: void,
    unselectall: void,
    preferences: void,
    upload: void,
    openlibrary: void,
    about: void
  }>()

  import CustomSnappingDialog from './dialogs/CustomSnappingDialog.svelte'

  let customSnappingDialogOpened: boolean = false
  let customSnappingDialogValue: number = 0
  $: customSnappingDialogValue = snapTo
  let snappingSelect: HTMLSelectElement
</script>

<div class="toolbox-container">
  <Menu bind:menu={menu}>
    <MenuTrigger {menu} slot="trigger" bind:open={openMainMenu}>
      <button class="menu-trigger">
        <Icon icon="custom:logo" width=36 />
        <span class="title">PaletteWorks</span>
        <Icon icon="ph:caret-down-fill" width=15 />
      </button>
    </MenuTrigger>

    <MenuItem icon="ic:outline-insert-drive-file" text={$LL.editor.menu.file()}>
      <MenuItem icon="eos-icons:content-new" text={$LL.editor.menu.new()} on:click={() => dispatch('new')} tooltip={{ description: $LL.editor.menuDescription.new(), keys: KEYBOARD_SHORTCUTS.new, placement: 'right'}}/>
      <MenuDivider/>
      <MenuItem icon="ic:baseline-folder-open" text={$LL.editor.menu.open()} on:click={() => dispatch('open') } tooltip={{ description: $LL.editor.menuDescription.open(), keys: KEYBOARD_SHORTCUTS.open, placement: 'right'}}/>
      <MenuDivider/>
      <MenuItem icon="mdi:file-export-outline" text={$LL.editor.menu.save()} on:click={() => dispatch('export')} tooltip={{ description: $LL.editor.menuDescription.save(), keys: KEYBOARD_SHORTCUTS.export, placement: 'right'}}/>
      <MenuDivider/>
      <MenuItem icon="ic:baseline-photo-camera" text={$LL.editor.menu.image()} on:click={() => dispatch('image')} tooltip={{ description: $LL.editor.menuDescription.image(), keys: KEYBOARD_SHORTCUTS.image, placement: 'right'}}/>
    </MenuItem>
    <MenuDivider/>
      <MenuItem icon="ic:sharp-edit" text={$LL.editor.menu.edit()}>
        <MenuItem icon="ic:round-undo" text={$LL.editor.menu.undo()} on:click={() => dispatch('undo')} tooltip={{ description: $LL.editor.menuDescription.undo(), keys: KEYBOARD_SHORTCUTS.undo, placement: 'right'}} />
        <MenuItem icon="ic:round-redo" text={$LL.editor.menu.redo()} on:click={() => dispatch('redo')} tooltip={{ description: $LL.editor.menuDescription.redo(), keys: KEYBOARD_SHORTCUTS.redo, placement: 'right'}}/>
        <MenuDivider/>
        <MenuItem icon="ic:baseline-select-all" text={$LL.editor.menu.selectall()} on:click={() => dispatch('selectall')} tooltip={{ description: $LL.editor.menuDescription.selectall(), keys: KEYBOARD_SHORTCUTS.selectall, placement: 'right'}}/>
        <MenuItem icon="mdi:select-remove" text={$LL.editor.menu.unselectall()} on:click={() => dispatch('unselectall')}/>
        <MenuDivider/>
        <MenuItem icon="ic:content-cut" text={$LL.editor.menu.cut()} on:click={() => dispatch('cut')} />
        <MenuItem icon="mdi:content-copy" text={$LL.editor.menu.copy()} on:click={() => dispatch('copy')} />
        <MenuItem icon="mdi:content-save" text={$LL.editor.menu.paste()} on:click={() => dispatch('paste')} />
      </MenuItem>
    <MenuDivider/>
    <MenuItem icon="fluent:library-28-filled" text={$LL.editor.menu.library()}>
      <MenuItem icon="mdi:format-list-bulleted" text={$LL.editor.menu.listall()} on:click={() => dispatch('openlibrary')} />
      <MenuDivider/>
      <MenuItem icon="mdi:cloud-upload" text={$LL.editor.menu.upload()} on:click={() => dispatch('upload')} />
    </MenuItem>
    <MenuDivider/>
    <MenuItem icon="ion:earth" text={$LL.editor.menu.language()}>
      {#each locales as l}
        <MenuItem icon="ion:language-outline" text={`${l} - ${LANGUAGE_ENDONYMS[l]}`} on:click={async () => { await loadLocaleAsync(l); setLocale(l) }} checked={$locale === l} />
      {/each}
    </MenuItem>
    <MenuItem icon="vaadin:cog" text={$LL.editor.menu.preferences()} on:click={() => dispatch('preferences')}/>
    <MenuDivider/>
    <MenuItem icon="vaadin:question-circle-o" text={$LL.editor.menu.help()} href="https://wiki.purplepalette.net/create-charts/editor/paletteworks" />
    <MenuItem icon="vaadin:info-circle-o" text={$LL.editor.menu.about()} on:click={() => { dispatch('about') } }/>
  </Menu>

  <div class="tool-container">
    {#each MODES as mode}
      <ToolButton {mode} bind:currentMode />
    {/each}
    <select bind:value={snapTo} on:change={() => {
      if (snappingSelect.selectedIndex === snappingSelect.options.length - 1) {
        customSnappingDialogOpened = true
        customSnappingDialogValue = snapTo
        return
      }
    }} bind:this={snappingSelect} on:blur={() => {
      if (snappingSelect.selectedIndex === snappingSelect.options.length - 1) {
        customSnappingDialogOpened = true
        customSnappingDialogValue = snapTo
        return
      }
    }}>
      {#each ALLOWED_SNAPPINGS as snap}
        <option value={snap}>{$LL.editor.snapTo.snap({ n: snap })}</option>
      {/each}
      <option value={snapTo} on:click={() => { customSnappingDialogOpened = true }}>{$LL.editor.snapTo.custom()} {customSnappingDialogValue}</option>
    </select>
  </div>
</div>

<CustomSnappingDialog
  bind:opened={customSnappingDialogOpened}
  bind:value={customSnappingDialogValue}
  on:ok={() => {
    if (isNaN(customSnappingDialogValue)) {
      toast.error($LL.editor.messages.nonNumeralInputError())
      return
    }

    if (customSnappingDialogValue < 1 || customSnappingDialogValue > 1920) {
      toast.error($LL.editor.messages.outOfRangeInputError({ from: 1, to: 1920 }))
      return
    }

    snapTo = customSnappingDialogValue
  }}
/>
<style>
  .toolbox-container {
    display: grid;
    /* width: 15em; */
    grid-template-rows: auto 1fr;
    height: 100vh;
  }

  .title {
    font-size: 1.5em;
    font-weight: bold;
    vertical-align: baseline;
  }

  .toolbox-container .menu-trigger {
    width: 100%;
    padding: 1em;
    border: none;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'Jura', sans-serif;
    font-weight: 800;
    font-size: 1em;
    gap: 0.5em;
    background: rgba(0, 0, 0, 0.025);
    color: var(--color-text-main);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.45);
  }

  .toolbox-container .menu-trigger:hover {
    filter: brightness(1.5);
  }

  .tool-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    height: 100%;
    overflow-y: auto;
    scrollbar-width: none;
  }

  .tool-container::-webkit-scrollbar {
    display: none;
  }

  select {
    font-size: 1.125em;
    padding: 0.25em 0.5em;
    border-radius: 1em;
    margin: 1em 0;
  }
</style>
