const juan={
    name: 'Juanito',
    age:19,
    approvedCourses:['Curso 1',''],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse); 
    }
}

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));

// Object.defineProperty(juan,'PruebaNASA',{
//     value:'extraterrestes',
//     writable:false,
//     enumerable:false,
//     configurable:false
// })
// Object.defineProperty(juan,'navigator',{
//     value:'chrome',
//     writable:true,
//     enumerable:false,
//     configurable:true
// })
// Object.defineProperty(juan,'editor',{
//     value:'vs code',
//     writable:false,
//     enumerable:true,
//     configurable:true
// })
// Object.defineProperty(juan,'terminal',{
//     value:'WLS',
//     writable:true,
//     enumerable:true,
//     configurable:false
// })


// Object.seal(juan);
// Object.freeze(juan);
console.log(Object.getOwnPropertyDescriptors(juan));

const juanita={
    age:12,
    email:'juanita@gmail.com'
};