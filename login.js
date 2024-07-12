const errorMsg = document.getElementById('error-msg');
const username = document.getElementById('username');
const password = document.getElementById('password');
const btn = document.getElementById('btn');

console.log(username.textContent);

db = [{
    name:'lindo',
    password:'123'
},

{name:'gidiza',
    password:'abc'
}
];

btn.onclick=(e)=>{
    e.preventDefault;
    inputs={
        name:username.value,
        password:password.value
    
    };
    
    

   const res= Login(db,inputs);
    if(res.isLogin){
        localStorage.setItem('username',res.user.name);
        console.log(res);
        location.assign('myPage.html');
    }else{
        console.log(res);
        errorMsg.innerText = res.message;
    }
    
};
//const user = db.find((user)=>user.id===parseInt(id));
function Login(db1,input){
    console.log(input.password)
    if(input.name.trim()&&input.password){
        const user = db1.find((user)=>user.name===input.name.trim());
        if(input.name.trim().toLowerCase()==user.name&&input.password==user.password){
            return{message:"succesefuly login", isLogin:true, user:user}
        }else{
            return{message:"password and/or username is incorrect", isLogin:false}
        }

    }else{
        return {message:'All fields must be filled', isLogin:false}
    }
};




const c_errorMsg = document.getElementById('create-error-msg');
const c_username = document.getElementById('create-username');
const c_password = document.getElementById('create-password');
const c_btn = document.getElementById('create-btn');


//Sign up
function signUp(db1,input){
    //if all field are filled
    if(input.name.trim()&&input.password){
        const user = db1.find((user)=>user.name===input.name.trim());
        console.log(user);
        if(user==null){
            db.push({name:input.name.trim().toLowerCase(), password: input.password})
            return{message:"Your account has been", isSignin:true, user: user}
            
        }else if(input.name.trim().toLowerCase()==user.name){
            return{message:"Username already exist, try another one", isSignin:false}
        }

    }else{
        return {message:'All fields must be filled', isSignin:false}
    }
};


c_btn.onclick=(e)=>{
    e.preventDefault;
    inputs={
        name:c_username.value,
        password:c_password.value
    
    };
    
    console.log(c_username.value)

   const res= signUp(db,inputs);
    if(res.isSignin){
        c_errorMsg.innerText = res.message;
    }else{
        console.log(res);
        c_errorMsg.innerText = res.message;
    }
    
};