import instances from "./AxiosInstance";

// below is example
const service = instances.instancePlaceHolder.apiInstance();

const baseURL = 'driver'

class DriverService {
  static getAllDriver() {
    return service.get(`${baseURL}`)
    .then((response) => {
        return response.data;
    })
    .catch( err => {
        throw err;
    });
  }

  static getDetailDriver(id: string){
      return service.get(`${baseURL}/${id}`)
        .then((response) => {
            return response;
        })
        .catch( err => {
            throw err;
        })
  }

  static createDriver(dataDriver: string){
      return service.post(`${baseURL}`, dataDriver)
        .then((response) => {
            return response;
        })
        .catch( err => {
            throw err;
        })
  }

  static deleteDriver(id: string){
      return service.delete(`${baseURL}/${id}`)
        .then((response) => {
            return response;
        })
        .catch( err => {
            throw err;
        })
  }

  static updateDriver(id: string, dataUpdate: string){
      return service.patch(`${baseURL}/${id}`, dataUpdate)
        .then((response) => {
            return response;
        })
        .catch( err => {
            throw err;
        })
  }
}

export default DriverService;
