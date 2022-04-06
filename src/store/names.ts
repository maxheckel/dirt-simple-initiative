import { reactive } from 'vue'

interface Names{
    list: string[]
    save():void
    load():void
    add():void
    remove(index:number):void
}

export const names = reactive<Names>({
    list: [],
    save() {
    },
    add() {
    },
    load() {
    },
    remove(index: number) {
    }
})