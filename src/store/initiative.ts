import { reactive } from 'vue'

export interface Turn {
    name: string;
    rolled: number;
    active: boolean;
    visible: boolean;
}

export interface Initiative {
    turns: Turn[];
    addTurn():void
    load():void
    save():void
    sort():void
    next():void
    previous():void
    remove(index:number):void
}

export const initiative = reactive<Initiative>({
    turns: [
        {
            name: "Mighty Hero",
            rolled: 15,
            visible: true,
            active: true
        } as Turn,
        {
            name: "Evil Villain",
            rolled: 2,
            visible: true,
            active: false
        } as Turn,
    ],
    addTurn() {
        let newTurn = {} as Turn;
        if (this.turns.length === 0){
            newTurn.active = true;
        }
        this.turns.push(newTurn)
        this.save()
    },
    load(){
        const turnsString = localStorage.getItem("initiative")
        if (turnsString !== null){
            this.turns = JSON.parse(turnsString)
        }
    },
    save() {
        localStorage.setItem("initiative", JSON.stringify(this.turns))
    },
    sort() {
        this.turns.sort(((a, b) => b.rolled - a.rolled))
        const currentActive = this.turns.find((t) => t.active)
        if (currentActive ){
            currentActive.active = false;
        }
        this.turns[0].active = true;
        this.save()
    },
    remove(index:number){
        if(this.turns[index].active){
            this.next()
        }
        this.turns.splice(index, 1);
        this.save()
    },
    next() {
        const currentActive = this.turns.findIndex((t) => t.active)
        this.turns[currentActive].active = false
        if (currentActive >= this.turns.length - 1){
            this.turns[0].active = true
        } else {
            this.turns[currentActive + 1].active = true
        }
    },
    previous() {
        const currentActive = this.turns.findIndex((t) => t.active)
        this.turns[currentActive].active = false
        if (currentActive === 0){
            this.turns[this.turns.length - 1].active = true
        } else {
            this.turns[currentActive - 1].active = true
        }
    }
})