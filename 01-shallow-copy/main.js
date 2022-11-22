// const obj1 = {
//     a:'a',
//     b:'b',
//     c:{
//         d:'d',
//         e:'e',
//     },
//     editar(){
//         this.a='AAA'
//     }
// }
// // const obj2={};
// // for(prop in obj1){
// //     obj2[prop]=obj1[prop];
// // }

// // const obj3 = Object.assign({},obj1);
// // const obj4 = Object.create(obj1);

// const stringifiedComplexObj = JSON.stringify(obj1);
// const obj2 = JSON.parse(stringifiedComplexObj);  

// function recursiva(){
//     if(validacion){
//         llamados recursivos
//     }else{
//         llamados normales sin recursividad
//     }
// }

const numeritos =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,56,89,99,100,101]
let numerito=0;
for(let index=0;index<numeritos.length;index++){
    numerito=numeritos[index]
    console.log({index,numerito});
}

function recursiva(n){
    if(n.length !=0 ){
        const fNum=n[0];
        console.log(fNum);
        n.shift();
        return recursiva(n)
    }
}

// DEEP COPY 
const obj1 = {
    a:'a',
    b:'b',
    c:{
        d:'d',
        e:'e',
    },
    editar(){
        this.a='AAA'
    }
}


function isObject(subject) {
    return typeof subject == "object"
}
function isArray(subject) {
    return Array.isArray(subject);
}
function deepCopy(subject){
    let copySubject;

    
    const subjectIsObject =isArray(subject);
    const subjectIsArray =isObject(subject);
    
    if(subjectIsArray){
        copySubject=[];
    }else if(subjectIsObject){
        copySubject={};
    }else{
        return subject;
    }

    for(key in subject){
        const keyIsObject=isObject(subject[key])

        if(keyIsObject){
            copySubject[key]=deepCopy(subject[key] )
        }else{
            if(subjectIsArray){
                copySubject.push(subject[key])
            }else{
                copySubject[key]=subject[key];
            }
        }

    }
    return copySubject;
}


// const studentBase={
//     name:undefined,
//     email:undefined,
//     age:undefined,
//     approvedCourses:undefined,
//     learningPaths:undefined,
//     socialMedia:{
//         twitter:undefined,
//         facebook:undefined,
//         instagram:undefined,
//     },
// }
// const juan = deepCopy(studentBase);
// Object.seal(juan);

// juan.age=18;

// class superObject{


//     static isObject(subject) {
//         return typeof subject == "object"
//     }

//     static deepCopy(subject){
//         let copySubject;
    
        
//         const subjectIsObject =isArray(subject);
//         const subjectIsArray =isObject(subject);
        
//         if(subjectIsArray){
//             copySubject=[];
//         }else if(subjectIsObject){
//             copySubject={};
//         }else{
//             return subject;
//         }
    
//         for(key in subject){
//             const keyIsObject=isObject(subject[key])
    
//             if(keyIsObject){
//                 copySubject[key]=deepCopy(subject[key] )
//             }else{
//                 if(subjectIsArray){
//                     copySubject.push(subject[key])
//                 }else{
//                     copySubject[key]=subject[key];
//                 }
//             }
    
//         }
//         return copySubject;
//     }
    
// }

function superObject(){}
superObject.isObject=function(subject) {
    return typeof subject == "object"
}
superObject.deepCopy= function(subject){
    let copySubject;

    
    const subjectIsObject =isArray(subject);
    const subjectIsArray =isObject(subject);
    
    if(subjectIsArray){
        copySubject=[];
    }else if(subjectIsObject){
        copySubject={};
    }else{
        return subject;
    }

    for(key in subject){
        const keyIsObject=isObject(subject[key])

        if(keyIsObject){
            copySubject[key]=deepCopy(subject[key] )
        }else{
            if(subjectIsArray){
                copySubject.push(subject[key])
            }else{
                copySubject[key]=subject[key];
            }
        }

    }
    return copySubject;
}


function requierParam(param){
    throw new Error( param + " es obligatorio");  
} 
function LearningPath({name=requierParam('name'),courses=[]}){
    this.name=name;
    this.courses=courses;
    const private={
        '_name': name,
        '_courses':courses
    }

    // const public={
    //     get name(){
    //         return private._name;
    //     },   
    //     set name(newName){
    //         if(newName.length!=0){
    //             private._name =newName   
    //         }else{
    //             console.warn('your name need al least one charter')
    //         }
    //     }, 
    //     get courses(){
    //         return private._courses;
    //     },   
    // }
    // return public

}
function Student({name=requierParam(name),email=requierParam(email),age,approvedCourses=[],learningPaths=[],twitter,facebook,instagram,}={}
){ 
    this.name = name;   
    this.email = email; 
    this.age=age;
    this.approvedCourses = approvedCourses;
    
    this.socialMedia = {
        twitter,facebook,instagram
    };
    
    const private = {
        '_learningPaths':[],
        
    };

    Object.defineProperty(this, 'learningPaths',{
        get (){
            return private._learningPaths;
        },
        set(newLp){
            
            if (newLp instanceof LearningPath) {
                private._learningPaths.push(newLp);
            }else{
                console.warn('alguno de los LPs no es una instacia del prototipo learnigPaths');
            }
            
        },
    });
    


        for (learningPathIndex in learningPaths) {
            this.learningPaths = learningPaths[learningPathIndex];
        }
    

    // const private ={
    //     '_name':name,
    //     '_learningPaths':learningPaths,
    // };
    // const public={
    //     email,
    //     age,
    //     approvedCourses,
        
    //     socialMedia:{
    //         twitter,
    //         facebook,
    //         instagram,
    //     },
    //     get name(){
    //         return private._name;
    //     },   
    //     set name(newName){
    //         if(newName.length!=0){
    //             private._name =newName   
    //         }else{
    //             console.warn('your name need al least one charter')
    //         }
    //     },
    //     get learningPaths(){
    //         return private._learningPaths;
    //     },    
    //     set learningPaths(newLp){
    //         if(!newLp.name){
    //             console.warn('your LP do not  have the name ')
    //             return;
    //         } 
    //         if(!newLp.courses){
    //             console.warn('your LP do not  have the courses')
    //             return;
    //         }
    //         if(!isArray(newLp.courses)){
    //             console.warn('your LP is not a list')
    //             return;
    //         }
    //         private._learningPaths=newLp;  
    //     },

        // changeName(newName){
        //     private._name = newName;
        // },
        // readName(){
        //     return private._name;
        // }
    // }


    // // Object.defineProperty(public,'readName',{
    // //     configurable:false,
    // //     writable:false,
    // // })
    // // Object.defineProperty(public,'changeName',{
    // //     configurable:false,
    // //     writable:false,
    // // })

    // return public;

}


const EscuelaWeb = new LearningPath({name:'EscuelaWeb'})
const EscuelaVideoGames = new LearningPath({name:'EscuelaVideoGames'})
const juan = new Student({name:'juan',email:'juanito@gmail.com',learningPaths:[EscuelaWeb,EscuelaVideoGames,]})

