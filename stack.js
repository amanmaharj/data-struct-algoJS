//stack

const Stack = function(){
    this.count = 0;
    this.storage = {}

    this.push = function(element){
        this.storage[this.count] = element;
        this.count++
    }

    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }else{
            this.count--
            result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        }
    }

    this.size = function(){
        return this.count;
    }

    this.peek = function(){
        return this.storage[this.count-1]
    }
}


let st = new Stack;
st.push('aman');
console.log(st.size());

st.push('maharjan');
console.log(st.size());

st.pop();
console.log(st.size());

st.pop();
console.log(st.size())

st.pop();
console.log(st.size())



