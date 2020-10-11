import axios from 'axios';
import { AuthInfo } from '../model/AuthInfo';
import { User } from '../model/User';

enum USER_SEARCH_API_ENDPOINTS {
    findByUsername = '/findByUsername',
    findByUsernameAndEmail = '/findByUsernameAndEmail'
}

class Api {

    private static DOMAIN: string = 'http://localhost:8080';
    private static BASE_PATH: string = '/shoppy/backend';
    private static USER: string = '/users';
    private static SEARCH_LEVEL: string = '/search';


    public static login(loginInfo: AuthInfo) {
        return new Promise((resolve, reject) => {
            axios.get(this.DOMAIN +
                this.BASE_PATH +
                this.USER +
                this.SEARCH_LEVEL +
                USER_SEARCH_API_ENDPOINTS.findByUsername,
                {
                    auth: {
                        username: loginInfo.username,
                        password: loginInfo.password
                    },
                    params: {
                        username: loginInfo.username,
                    }
                })
                .then((response) => {
                    resolve(response.data)
                }).catch((error) => {
                    reject(error)
                });
        })
    }

    public static isUserRegistered(userInfo: User) {
        return new Promise((resolve, reject) => {
            axios.get(this.DOMAIN +
                this.BASE_PATH +
                this.USER +
                this.SEARCH_LEVEL +
                USER_SEARCH_API_ENDPOINTS.findByUsernameAndEmail,
                {
                    params: {
                        username: userInfo.username,
                        email: userInfo.email
                    }
                })
                .then((response) => {
                    resolve(response.data)
                }).catch((error) => {
                    reject(error)
                });
        })
    }

    public static registerNewUser(userInfo: User) {
        return new Promise((resolve, reject) => {
            axios.post(this.DOMAIN +
                this.BASE_PATH +
                this.USER,
                {
                    ...userInfo
                })
                .then((response) => {
                    resolve(response.data)
                }).catch((error) => {
                    reject(error)
                });
        })
    }

}

export default Api