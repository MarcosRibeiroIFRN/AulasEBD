class Stack{
    constructor(){
        this._items=[]
    }

    /**
     * Insert element in stack
     * @param {any} element -elemento inserido
     */
    push(element){
        this._items.push(element)
    }
    /**
     * Remove last element from stack
     * @returns removed element
     */
    pop(){
        return this._items.pop();
    }

    /**
     * show last element
     * @returns {any} element
     */
    peek(){
        return this._items.peek()
    }
    
    /**
     * check if stack is empty
     * @returns {boolean} result 
     */
    
    isEmpty(){
        return this._items.length==0;
    }

    /**
     * return the stack's size
     * @returns {number} size
     */

    size(){
        return this._items.length;
    }
}
export default Stack