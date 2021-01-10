import { writable } from 'svelte/store'

export const snackbar = writable(null)

export const updateSnackbar = value => {
    snackbar.set(value)
}