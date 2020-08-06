/// <reference types="react-scripts" />

declare module 'styled-media-helper' {
  export default <M extends string>(media: Record<M, number>): {
    up: (media: M) => string
    down: (media: M) => string
    between: (mediaMin: M, mediaMax: M) => string
    only: (media: M) => string
  } => {}
}
