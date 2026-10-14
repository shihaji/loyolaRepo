 // ES6 MODULE

 console.log("hello from dev branch")

let add=(a,b)=>{
    return a+b;
}

let subtract=(a,b)=>{
    return a-b;
}

let multiply=(a,b)=>{
    return a*b;
}

let findMax=(a,b)=>{
    if(a>b){ 
        return a;
    }else{
        return b;
    }
}

let findMin=(a,b)=>{
    if(a<b){
        return a;
    }else{
        return b;
    }
}



export default add;  // default export  


export {subtract,multiply,findMax};  // named export 