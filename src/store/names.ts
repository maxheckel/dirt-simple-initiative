import { reactive } from 'vue'

interface Names{
    list: string[]
    memoized: any
    save():void
    load():void
    add(name:string):void
    remove(name:string):void
}

function onlyUnique(value:any, index:any, self:any):any {
    return self.indexOf(value) === index;
}
export const names = reactive<Names>({
    list: [],
    memoized: {},
    save() {
        this.list = this.list.filter(onlyUnique)
        localStorage.setItem("names", JSON.stringify(this.list))
    },
    add(name:string) {
        if(!name || name == "Mighty Hero" || name == "Evil Villain"){
            return;
        }
        if (this.memoized[name.toLowerCase()] && this.memoized[name.toLowerCase()] === true){
            return
        }
        this.list.push(name)
        this.memoized[name.toLowerCase()] = true
        this.list = this.list.filter(onlyUnique)
    },
    load() {
        const turnsString = localStorage.getItem("names")
        if (turnsString !== null){
            this.list = JSON.parse(turnsString)
            this.list.forEach((value => this.memoized[value] = true))
        }
        this.list = this.list.filter(onlyUnique)
    },
    remove(name: string) {
        this.memoized[name.toLowerCase()] = false;
        const index = this.list.indexOf(name)
        this.list.splice(index, 1);
    }
})