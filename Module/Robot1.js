import {Human1} from './Human1'

export function promoting() {}

export default class Robot1 extends Human1{
    constructor(name1,mechanic1){
        super(name1); // calling super class constructor
        this.mechanic1 = mechanic1;
    }

    action1() {
        console.log('Robot Test');
    }
}