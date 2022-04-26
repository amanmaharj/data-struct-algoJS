
// function Lueue(){
//     let collection = [];

//     this.enque = function(element){
//         collection.push(element);
//     }

//     this.dequeue = function(){
//         collection.shift();
//     }

//    this.firstOne = function (){
//         return collection[0];
//     }

//     this.length = function(){
//         return collection.length;
//     }
//     this.reset = function(){
//         return collection.length = 0;
//     }
// }
// let que = new Lueue;


// class Leo{
//     constructor(collection = []){
//         this.collection = collection
//         this.enque = function(element){
//             collection.push(element);
//         }   
        
//         this.dequeue = function(){
//             collection.shift();
//         }
    
//        this.firstOne = function (){
//             return collection[0];
//         }
    
//         this.length = function(){
//             return collection.length;
//         }
    
//         this.reset = function(){
//             return collection.length = 0;
//         }

//         this.show = function(){
//             return collection
//         }

//     }
// }

// let leo = new Leo()

// leo.enque('aman')

// leo.enque('manisha')

// leo.dequeue();

// console.log(leo.firstOne());
// console.log(leo.show())

let PriorityQueue = function(){

    let collection = []

    this.enque = function(element){
        if(this.isEmpty()){
            return collection.push(element);
        }else{
            let added = false;
            for(i=0;i<collection.length;i++){
                if(collection[i][1]>element[1]){
                    collection.splice(i,0,element)
                    added = true;
                    break;
                }
            }
            
            if(!added){
                collection.push(element);
            }
        }
        
    }
    
    this.deque = function(){
        return collection.shift();
    }

    this.show = function(){
        console.log(collection);
    }
    this.isEmpty = function(){
        return collection.length === 0;
    }
}

let prio = new PriorityQueue;

prio.enque(['jackson', 2]);


prio.enque(['harison', 1]);
prio.show()


