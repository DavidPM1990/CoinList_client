import InitAxios from "./initAxios"


class ProfileAxios extends InitAxios {
    constructor() {
        super('profile');
    }

    profile(token) {
        return this.axios.get('/', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((response) => response.data);
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new ProfileAxios();
        }
        return this.instance;
    }

    // getUserWithFav(id, body) {
    //     return this.axios
    //         .get(`/favorite-coins/${id}`, body, {
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem('tokenAuth')}`,
    //             }
    //         })
    //         .then((data) => console.log(data))
    // }

    // updateFavCoins(id, body) {
    //     return this.axios
    //         .put(`/favorite-coins/${id}`, body, {
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem('tokenAuth')}`,
    //             }
    //         })
    //         .then((response) => console.log('soy la respuesta de updateFavCoins', response.data));
    // }

}

export default ProfileAxios.getInstance();
