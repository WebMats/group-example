import axios from '../../axios-sleep';

export const authorizeUser = (user) => dispatch => {
    axios.post('/authorization', user, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }).then(res => {
       console.log(res)
    }).catch((err) => {
       console.log(err);
    });
}