/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module '*.svelte' {
  import type { Component } from 'svelte'
  const component: Component<Record<string, any>, Record<string, any>>
  export default component
}

declare const __APP_VERSION__: string
