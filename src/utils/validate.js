export const checkValidData = (name,email,password) =>{
    const isNameValidate = /^[A-Za-z]+/.test(name)
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
    if(!isNameValidate) return 'Name is not valid'
    if(!isEmailValid) return "Email id is not valid"
    if(!isPasswordValid) return "Password is not valid"
    return null;
}