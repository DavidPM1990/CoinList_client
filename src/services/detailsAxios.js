import InitAxios from "./initAxios"



class DetailsAxios extends InitAxios {
    constructor() {
        super('')
    }

    getOneCoin(id) {
        return this.axios.get(`/coins/details/${id}`).then((res) => res.data)
    }

    // getChart(id, days) {
    //     return this.axios.get(`/chart/${id}`).then((res) => res.data)
    // }
}

export default DetailsAxios