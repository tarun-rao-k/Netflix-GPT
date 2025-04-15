 export const loginValidation=(emailId,password)=>{
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ .test(emailId);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid){return "Email Id not valid"}
    if(!isPasswordValid){return "Password not valid"}

    return null;
}