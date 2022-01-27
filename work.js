const Person={
    firstName:"Haleemath",
    lastName:"Sameena",
    fullName :function(){
        return this.firstName + "and" + this.lastName
    }

}
console.log(Person.fullName());

const es5={
    id:23,
    counter: function counter(){
        const that=this;
        setTimeout(function(){
            console.log(that.id);

        }, 2000);
    }
};

console.log(es5.counter());
