import InitAxios from "./initAxios";

class UserWithFavs extends InitAxios {
    constructor() {
        super('profile')
    }

    updateFavCoins(id, body) {
        return this.axios
            .put(`/favorite-coins/${id}`, body, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('tokenAuth')}`,
                }
            })
            .then((response) => console.log('soy la respuesta de updateFavCoins', response));
    }


    getUserWithFav(id) {
        return this.axios
            .get(`/favorite-coins/${id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('tokenAuth')}`,
                }
            })
            .then((data) => console.log(data))
    }


}

export default UserWithFavs