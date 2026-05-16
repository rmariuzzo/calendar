<script lang="ts">
  import CalendarControls from './CalendarControls.svelte'
  import CalendarDates from './CalendarDates.svelte'
  import CalendarFooter from './CalendarFooter.svelte'

  let month = $state(new Date())
</script>

<div class="calendar">
  <CalendarControls value={month} onChange={(v) => (month = v)} />
  <CalendarDates {month} />
  <CalendarFooter />
</div>

<style>
  .calendar {
    height: 100vh;
    padding: var(--unit);
  }
</style>
