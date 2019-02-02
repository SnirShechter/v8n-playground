const specialObject = require('./specialObject');


let good = {
    id:2,
    site:{
        name:'site name',
        sections:[
            {
                id:5,
                title:'section title',
                description:'section description'
            }
        ]
    }
};

let bad = {
    id:2,
    site:{
        name:'site name',
        sections:[
            {
                id:5,
                title:3, // Title is a number, not string
                description:'section description'
            }
        ]
    }
};


console.log('TEST GOOD');
console.log(specialObject.test(good));
console.log('TEST BAD');
console.log(specialObject.test(bad));