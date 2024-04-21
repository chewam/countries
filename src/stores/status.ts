import { writable } from "svelte/store"

export type Status = "stop" | "start" | "end"

export default writable<Status>("stop")
