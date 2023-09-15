# UVC SDK

The UVC SDK for SvelteKit, Svelte and Plain HTML.

## Table of Contents

- [UVC SDK](#uvc-sdk)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Client Usage](#client-usage)
    - [SvelteKit](#sveltekit)
    - [Plain HTML](#plain-html)
      - [With a preprocessor (like Parcel)](#with-a-preprocessor-like-parcel)
        - [Event Listener](#event-listener)
        - [Global-Scope Callback](#global-scope-callback)
      - [Without a preprocessor](#without-a-preprocessor)
  - [Server Usage](#server-usage)

## Installation

```bash
pnpm i @nexusuvc/frontend
```

## Client Usage

### SvelteKit

```svelte
<script lang="ts">
  import UVC from '@nexusuvc/frontend';
</script>

<UVC publicKey="<Your Public Key>" options={{}} on:completed={e=>console.log('done with ticket',e.detail)} />
```

### Plain HTML

#### With a preprocessor (like Parcel)

##### Event Listener

```html
<script type="module">
  import '@nexusuvc/frontend/vanilla';

  const uvc = document.querySelector('#your-uvc');
  uvc.addEventListener('completed',e=>{
    console.log('done with ticket',e.detail);
  });
</script>

<nexus-uvc publicKey="<Your Public Key>" options={{}} id="your-uvc"></nexus-uvc>
```

##### Global-Scope Callback

```html
<script type="module">
  import '@nexusuvc/frontend/vanilla';

  // the completed function must live in the global scope - it's body cannot be passed to the event, and it cannot be something like console.log that doesn't directly live in the global scope
  window.completedFunc = (ticket)=>{
    console.log('done with ticket',ticket);
  }
</script>

<nexus-uvc publicKey="<Your Public Key>" options={{}} onCompleted="completedFunc"></nexus-uvc>
```

#### Without a preprocessor

Same as above, but use `https://unpkg.com/@nexusuvc/frontend@^1.0.0/vanilla/index.js` instead of `@nexusuvc/frontend/vanilla`.

## Server Usage

```ts
const validate = (privateKey: string, ticket: string)
const response = await fetch(`https://uvc.nexuspipe.com/uvc/evaluate/${encodeURIComponent(privateKey)}/${encodeURIComponent(ticket)}`).then(r=>r.ok?r.json():{
  success:false,
  challenge_ts:"",
  hostname:"",
  'error-codes':[],
  'internal-cause':new Error('Invalid response from UVC server'),
  response: r,
}).catch(e=>({success:false,challenge_ts:"",hostname:"",'error-codes':[],'internal-cause':e}));
return response.success
```

You can implement this in any language, but the above is a TypeScript example.
