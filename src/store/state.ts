import { reactive } from 'vue'

export interface State {
    showingAddTurn: boolean
}

export const state = reactive<State>({
    showingAddTurn: false
})

