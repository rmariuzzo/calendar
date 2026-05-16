<script lang="ts">
  import { addMonths, subMonths, format } from 'date-fns'
  import ChevronLeft from './icons/ChevronLeft.svelte'
  import ChevronRight from './icons/ChevronRight.svelte'

  interface Props {
    value: Date
  }

  let { value = $bindable() }: Props = $props()

  const nextMonth = () => (value = addMonths(value, 1))
  const previousMonth = () => (value = subMonths(value, 1))
</script>

<div class="controls">
  <button onclick={previousMonth}>
    <ChevronLeft />
  </button>
  <div class="month">{format(value, 'MMMM - yyyy')}</div>
  <button onclick={nextMonth}>
    <ChevronRight />
  </button>
</div>

<style>
  .controls {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    height: 60px;
    padding-bottom: var(--unit);
  }

  button {
    cursor: pointer;
    color: color-mix(in srgb, #fff 25%, #474b5c);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 60px;
    border: var(--color-border) solid var(--border-width-thin);
    border-radius: var(--border-radius-normal);
    background-color: var(--color-white);
    box-shadow: var(--box-shadow-normal);
    transition: var(--transition-all);
  }

  button:hover,
  button:focus {
    color: var(--color-gray);
    border-color: color-mix(in srgb, #fff 50%, #474b5c);
    box-shadow: var(--box-shadow-large);
  }

  button :global(svg) {
    height: var(--unit);
    width: var(--unit);
  }

  .month {
    flex: 1 1 auto;
    padding: 0 var(--unit);
    text-align: center;
    color: var(--color-gray);
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);
  }

  @media (min-width: 320px) {
    .month {
      font-size: var(--font-size-larger);
    }
  }

  @media (min-width: 768px) {
    .month {
      font-size: var(--font-size-largest);
    }
  }
</style>
