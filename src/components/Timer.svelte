<script lang="ts">
  import { formattedTimer } from "../stores/timer"

  let hours = 0
  let minutes = 0
  let seconds = 0

  formattedTimer.subscribe((timer) => {
    hours = timer.hours
    minutes = timer.minutes
    seconds = timer.seconds
  })
</script>

<span class="countdown ml-2 font-mono text-lg">
  <span style={`--value:${hours};`}></span>h
  <span style={`--value:${minutes};`}></span>m
  <span style={`--value:${seconds};`}></span>s
</span>
