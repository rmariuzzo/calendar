<script lang="ts">
  import CalendarControls from './CalendarControls.svelte'
  import CalendarDates from './CalendarDates.svelte'
  import CalendarFooter from './CalendarFooter.svelte'

  let month = $state(new Date())
</script>

<div class="calendar">
  <CalendarControls bind:value={month} />
  <CalendarDates {month} />
  <CalendarFooter />
</div>

<style>
  .calendar {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
    padding: var(--unit);
  }
</style>
