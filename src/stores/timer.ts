import { writable, derived } from "svelte/store"

// Create a writable store for the timer
const timer = writable(0)

// Function to update the timer value every second
const updateTimer = () => {
  setInterval(() => {
    timer.update((n) => n + 1)
  }, 1000)
}

// Call the function to start the timer
updateTimer()

// Derive store to split the timer into hours, minutes, and seconds
const formattedTimer = derived(timer, ($timer) => {
  const hours = Math.floor($timer / 3600)
  const minutes = Math.floor(($timer % 3600) / 60)
  const seconds = $timer % 60
  return { hours, minutes, seconds }
})

// Export the formattedTimer store
export { formattedTimer }
