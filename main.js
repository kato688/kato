function LinkedLists(){
    function Node(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }

    this.length=0;
    let firstNode=null;
    let lastNode=null;

    this.push=function(value){
        let node=new Node(value);
        if(firstNode===null){
            firstNode=node;
            lastNode=node;
        }else{
            lastNode.next=node;
            node.prev=lastNode;
            lastNode=node;
        }
        this.length++;
    }

    this.unshift=function(value){
        let node=new Node(value);
            if(firstNode===null){
                firstNode=node;
                lastNode=node;
            }else{
                node.next=firstNode;
                firstNode.prev=node;
                firstNode=node;
            }
            this.length++;
    }
        
    this.pop=function(){
        if(lastNode!==null && this.length>1){
            lastNode=lastNode.prev;
            lastNode.next=null;
            this.length--;
        }else{
            lastNode=null;
            firstNode=null;
            this.length=0;
        }
        
    }

    this.shift=function(){
        if(firstNode!==null && this.length>1){
            firstNode=firstNode.next;
            firstNode.prev=null;
            this.length--;
        }else{
            lastNode=null;
            firstNode=null;
            this.length=0;
        }
    }

    this.forEach=function(fun){
        let start=firstNode;
        let index=0;
        while(start!==null){
            fun(start.value, index);
            start=start.next;
            index++;
        }
        
    }

    this.forEachReverse=function(func){
        let end=lastNode;
        let index=this.length-1;
        while(end!==null){
            func(end.value, index);
            end=end.prev;
            index--;
        }
    }
    
    this.toArray=function(){
        let arr=[];
        this.forEach( e => arr.push(e));

        return arr;
    }
    
    this.remove=function(index){
        let value;
        stopCount(function(e,i){ 
            value=e.value;
            let prev=e.prev;
            let next=e.next;
            if(index ===i){
                if(e.prev!=null){
                    prev.next=next;
                    return true;
                }
                    if(e.next!=null){
                        firstNode=firstNode.next;
                        return true;
                    }
                        if(e.next===null && e.prev===null){
                            firstNode=null;
                            lastNode=null;
                            return true;
                        }
            return true;
            }
        });
        this.length--;
        return value;
    }

    this.includes=function(value){
        let result=false;
        stopCount((elem) => {
            if(elem.value === value){
                result=true;
                return true;
            }
            
        })
        return result;
    }

    function stopCount(func){
        let start=firstNode;
        let index=0;
        while(start!=null){
            if(func(start,index)){
                break;
            }
            start=start.next;
            index++;
        }
    }




}

let nodes=new LinkedLists();
nodes.push(1);
nodes.push(2);
nodes.push(3);
nodes.unshift(-1);
nodes.unshift(-2);
nodes.unshift(-3);
/* nodes.pop();
nodes.pop();
nodes.pop();
nodes.pop();
nodes.pop();
nodes.pop();
nodes.pop(); */
/* nodes.shift();
nodes.shift();
nodes.shift();
nodes.shift();
nodes.shift();
nodes.shift(); */
//console.log(nodes.includes(3));

console.log(nodes.remove(2));



console.log(nodes.toArray());
nodes.forEach(e => console.log(e));
/* console.log("Let Try reverse!");
nodes.forEachReverse((e,i)=>{
    console.log( e + " " + " index is: "+ " " + i)
}); */
console.log(nodes.length);