import InitAxios from "./initAxios"

class CoinAxios extends InitAxios {
    constructor() {
        super('')
    }

    getAllCoins() {
        return this.axios.get(`/coins`).then((res) => res.data)
    }



}

export default CoinAxios