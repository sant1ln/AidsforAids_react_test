export const validateUser = async (userSaved,formData) => {
  return new Promise((resolve,reject)=>{
    const {users} = userSaved;
    let userExist = users.filter(user => user.email === formData.email)
    if(userExist){
       let passwordIsOk = users.filter(user => user.password === formData.password)
        if(passwordIsOk) {
          console.log(true)
          resolve(true);
        }
    }
    reject('Email or password are incorrent')
  })  
}