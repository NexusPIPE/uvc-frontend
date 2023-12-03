<!--
  we can render this as a component (using https://svelte.dev/docs#run-time-client-side-component-api) client-side at runtime
-->
<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';
  import type { SvelteWindowAttributes } from 'svelte/elements';
  import json5 from 'json5';
  import type { UVCOptions } from './Options.js';
  export let publicKey: string;
  export let options = {} as Partial<UVCOptions> | string;
  const wrapOptions = (options: Partial<UVCOptions> | string) => {
    if (typeof options === 'string') {
      try {
        return JSON.parse(options);
      } catch (error) {
        try {
          return json5.parse(options);
        } catch (error) {}
      }
      // @ts-ignore
      return { ...((globalThis ?? window)[options] ?? {}) };
    }
    return options;
  };
  let ___windowType = null as unknown as SvelteWindowAttributes;
  let height: string = '75px';
  let mounted = false;
  let iframe: HTMLIFrameElement | null = null;
  let lastDispatchedKey = '';
  export let demoCaptcha = false;
  export let _uvctest = false;
  const dispatch = createEventDispatcher<{
    /** UVC Completed? */
    completed: string;
    /** UVC Remount - e.g. if user failed */
    retry: void;
  }>();
  /**
   * The value on the globalThis/window object to call - passed with string arg - must be a direct descendant of the window object
   * Use addEventListener('completed') for a more robust solution
   */
  export let onCompleted = null as null | string;
  /**
   * The value on the globalThis/window object to call - passed with void arg - must be a direct descendant of the window object
   * Use addEventListener('completed') for a more robust solution
   */
  export let onRetry = null as null | string;
  const onMessage: (typeof ___windowType)['on:message'] /* HACK: this type should be exposed to end-users, but its not */ =
    ({ origin, data }) => {
      const matchesIframe = data.target ? data.target === id : true;
      if (
        (_uvctest
          ? true
          : origin === 'https://uvc.nexus' ||
            origin === 'https://uvc.nexuspipe.com') &&
        data.uvc &&
        matchesIframe
      ) {
        // @ts-ignore
        if (data.type === 'resize') {
          height = `${data.height}px`;
        } else if (data.type === 'ack_key') {
          acked = true;
          lastDispatchedKey = data.key;
        } else {
          const cCB = onCompleted
            ? // @ts-ignore
              (globalThis ?? window)[onCompleted as any]
            : void 0;
          const eCB = onRetry
            ? // @ts-ignore
              (globalThis ?? window)[onRetry as any]
            : void 0;
          switch (data.type) {
            case 'requestOptions':
              iframe!.contentWindow!.postMessage(
                {
                  uvc: true,
                  type: 'writeOptions',
                  ...wrapOptions(options),
                },
                _uvctest ? '*' : origin,
              );
              break;
            case 'completed':
              dispatch('completed', data.token);
              if (cCB) cCB(data.token);
              break;
            case 'retry':
              dispatch('retry');
              if (eCB) eCB();
              break;
            case 'error':
              console.error('got unknown error from uvc:', data);
              break;
            default:
              console.warn('got unknown uvc data:', data);
              break;
          }
        }
      }
    };
  let acked = false;
  const dispatchPublicKey = () => {
    if (iframe)
      // dispatch
      iframe.contentWindow!.postMessage(
        {
          // equivalent to { uvc: true, publicKey: publicKey }
          uvc: true,
          type: 'publicKey',
          key: publicKey,
        },
        _uvctest ? '*' : 'https://uvc.nexuspipe.com',
      );
  };
  onMount(async () => {
    mounted = true;
    while (!acked || !iframe) {
      if (iframe) dispatchPublicKey();
      await new Promise(res => setTimeout(res, 100));
    }
  });
  onDestroy(() => {
    mounted = false;
  });
  $: {
    if (acked && lastDispatchedKey !== publicKey) dispatchPublicKey();
  }
  $: {
    if (acked && iframe) {
      iframe.contentWindow!.postMessage(
        {
          uvc: true,
          type: 'writeOptions',
          ...wrapOptions(options),
        },
        _uvctest ? '*' : 'https://uvc.nexuspipe.com',
      );
    }
  }
  const id = Math.random().toString(36).slice(2);
  const trueAsAny = 'true' as any;
  let lastOptions = wrapOptions(options);
  $: {
    const wrapped = wrapOptions(options);
    if (acked && iframe && lastOptions !== wrapped) {
      iframe.contentWindow!.postMessage(
        {
          uvc: true,
          type: 'writeOptions',
          ...wrapped,
        },
        _uvctest ? '*' : 'https://uvc.nexuspipe.com',
      );
      lastOptions = wrapped;
    }
  }
</script>

<svelte:options
  customElement={{
    tag: 'nexus-uvc',
  }}
/>

<svelte:window on:message={onMessage} />

{@html `<style>
  iframe.uvc {
    border: 0px none #0000;
    width: 100%;
    height: calc(var(--h) + 1px);
    max-width: 458px;
    overflow-y: hidden;
    color-scheme: auto;
  }
</style>`}

{#if mounted}
  {#if publicKey}
    <iframe
      src="{_uvctest ? '' : 'https://uvc.nexuspipe.com'}/v1/frame{demoCaptcha
        ? 'demo'
        : ''}?host={location.host ?? location.hostname}&id={id}"
      frameborder="0"
      class="uvc"
      title="UVC"
      style="--h:{height}"
      on:load={() => {
        dispatchPublicKey();
      }}
      bind:this={iframe}
      allowTransparency={trueAsAny}
      sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation"
    />
  {:else}
    <p style="margin: 0 0;">No Access Key! Please specify an access key!</p>
  {/if}
{/if}
