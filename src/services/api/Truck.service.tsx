import instances from "./AxiosInstance";

// below is example
const service = instances.instancePlaceHolder.apiInstance();

const baseURL = "trucks";

class TruckService {
  static getAllTruck() {
    return service
      .get(`${baseURL}`)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      });
  }

  static getDetailTruck(id: string){
    return service.get(`${baseURL}/${id}`)
      .then((response) => {
          return response;
      })
      .catch( err => {
          throw err;
      })
}

static createTruck(dataTruck: string){
    return service.post(`${baseURL}`, dataTruck)
      .then((response) => {
          return response;
      })
      .catch( err => {
          throw err;
      })
}

static deleteTruck(id: string){
    return service.delete(`${baseURL}/${id}`)
      .then((response) => {
          return response;
      })
      .catch( err => {
          throw err;
      })
}

static updateTruck(id: string, dataUpdate: string){
    return service.put(`${baseURL}/${id}`, dataUpdate)
      .then((response) => {
          return response;
      })
      .catch( err => {
          throw err;
      })
}
}

export default TruckService;
