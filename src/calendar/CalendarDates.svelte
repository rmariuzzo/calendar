<script lang="ts">
  import {
    addWeeks,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    getDate,
    isSameDay,
    isSameMonth,
    startOfMonth,
    startOfWeek,
    format,
    getWeeksInMonth,
  } from 'date-fns'

  interface Props {
    month: Date
  }

  let { month }: Props = $props()

  const weekStartsOn = 1 as const
  const now = new Date()

  let dates = $derived(
    eachDayOfInterval({
      start: startOfWeek(startOfMonth(month), { weekStartsOn }),
      end: addWeeks(
        endOfWeek(endOfMonth(month), { weekStartsOn }),
        6 - getWeeksInMonth(month, { weekStartsOn })
      ),
    })
  )
</script>

<ul class="dates">
  {#each dates as date (date.getTime())}
    <li
      class="date"
      class:in-month={isSameMonth(date, month)}
      class:today={isSameDay(date, now)}
    >
      {#if getDate(date) === 1}{format(date, 'MMM')} {/if}{getDate(date)}
    </li>
  {/each}
</ul>

<style>
  .dates {
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
    border-radius: 10px;
    box-shadow: var(--box-shadow-normal);
  }

  .date {
    flex: 0 0 14.285714%;
    height: calc((100vh - 140px) / 6);
    color: color-mix(in srgb, #fff 75%, #474b5c);
    text-align: right;
    background-color: var(--color-white);
    padding: 10px;
  }

  .date.in-month {
    color: var(--color-gray);
    background-color: #ffffff;
  }

  .date.today {
    position: relative;
    font-weight: var(--font-weight-bold);
    background-color: color-mix(in srgb, white 40%, #3069ed);
    box-shadow: var(--box-shadow-normal);
  }

  .date.today::after {
    content: '';
    border: var(--color-primary) solid var(--border-width-normal);
    border-radius: var(--border-radius-small);
    position: absolute;
    left: -2px;
    right: -2px;
    top: -2px;
    bottom: -2px;
  }

  .date:nth-last-child(n + 8) {
    border-bottom: var(--color-border) solid var(--border-width-thin);
  }

  .date:not(:nth-child(7n)) {
    border-right: var(--color-border) solid var(--border-width-thin);
  }
</style>
