export const validateUser = async (userSaved,formData) => {
  return new Promise((resolve,reject)=>{
    const {users} = userSaved;
    if(formData.email  === ''|| formData.password === ''){
      reject('Please fill all form')
    }
    let userExist = users.filter(user => user.email === formData.email)
    if(userExist.length > 0){
       let passwordIsOk = users.filter(user => user.password === formData.password)
        if(passwordIsOk.length > 0) {
          console.log(true)
          resolve(true);
        }
    }
    reject('Email or password are incorrent')
  })  
}