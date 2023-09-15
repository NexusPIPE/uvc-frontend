<script lang="ts">
  import UVC, { type UVCOptions } from '$lib/index.js';
  let accessToken = 'None';
  let redrawing = false;
  const redraw = () => {
    if (redrawing) return;
    redrawing = true;
    setTimeout(() => {
      redrawing = false;
    }, 10);
  };
  const options: UVCOptions = {};
  let key = '2'.repeat(64);
</script>

<main>
  <h1>Minimal NexusUVC Demonstration Page</h1>
  <p>
    This page is purely for testing the library. <a
      href="https://nexuspipe.com/uvc/builder">Go to the Builder</a
    >
  </p>
  {#if !redrawing}
    <UVC
      publicKey={key ?? '2'.repeat(64)}
      on:completed={(e) => {
        accessToken = e.detail;
      }}
      on:retry={(e) => {
        accessToken = 'None (retrying)';
      }}
      {options}
    />
  {/if}
  <p class="label">Ticket</p>
  <input
    type="text"
    placeholder="Ticket"
    bind:value={accessToken}
    style="width: 65ch;max-width:calc(100vw - 32px);margin-bottom:5px;"
    readonly
    aria-readonly="true"
  /><br />
  <p class="label">Public Key</p>
  <input
    type="text"
    placeholder="Public Key"
    bind:value={key}
    style="width: 65ch;max-width:calc(100vw - 32px);margin-bottom:5px;"
  /><br />
  <p class="label">Redraw Widget</p>
  <button on:click={redraw} on:keypress={redraw}>Redraw</button>
</main>

<style lang="scss">
  main {
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    .label {
      opacity: 0.5;
      margin-bottom: 0.3rem;
      margin-top: 0.4rem;
    }
  }
</style>
