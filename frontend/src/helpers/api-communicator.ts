import axios from 'axios'

export async function loginUser(email: string, password: string){
    const res = await axios.post('/user/login', { email, password })
    if (res.status !== 200) {
        throw new Error('Unable to login')
    }
    const data = await res.data;
    return data;
}

export async function checkAuthStatus(){
    const res = await axios.get('/user/auth-status');
    if (res.status !== 200) {
        throw new Error('Unable to authenticate');
    }
    const data = await res.data;
    return data;
}