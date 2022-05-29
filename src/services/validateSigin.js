export const validateUser = async (userSaved,formData) => {
  return new Promise((resolve,reject)=>{
    const {users} = userSaved;
    if(formData.email  === ''|| formData.name  === '' || formData.password === ''){
      reject('Please fill all form')
    }
    let userExist = users.filter(user => user.email === formData.email)
    if(userExist.length === 0){
      resolve(true)
    }
    reject('User already exists')
  })  
}