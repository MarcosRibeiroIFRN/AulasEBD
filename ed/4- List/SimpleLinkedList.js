/*
    class node

*/

class Node{
    constructor (value){
        this.value=value;
        this.next =null;
    }
}
class SimpleLinkedList{
    constructor(){
        this.head=null;
        this.length=0;
    }
    append(value){
        //..
        let node=new Node(value)
        if (this.head===null){
            this.head=node
        }
        else{
            let current =this.head
            while(current.next!==null){
                current=current.next;
            }
            current.next=node;
        }
        this.length++;
    }
    shift(value){
        let node=new Node(value)
        if(this.head===null){
            this.head=node;
        }
        else{
            node.next=this.head;
            this.head=node;
        }
        this.length++;
    }
    clear(){
        this.head=null;
        this.length=0;
    }
    list(){
        let list=[]
        if (this.head===null){
            return list;
        }
        else{
            let current = this.head;
            list.push(current.value);
            while(current.next!==null){
                current=current.next;
                list.pish(current.value);
            }
        }
    }
    length (){
        return this.length;
    }
}