class Item{
    static last = 0
    constructor(text){
        this.id = Item.last++
        this.text = text
        this.done = false

    }
}
export default Item