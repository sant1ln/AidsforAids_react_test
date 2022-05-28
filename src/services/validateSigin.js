export const validateUser = async (userSaved,formData) => {
  return new Promise((resolve,reject)=>{
    const {users} = userSaved;
    let userExist = users.filter(user => user.email === formData.email)
    if(userExist.length === 0){
      resolve(true)
    }
  })  
}