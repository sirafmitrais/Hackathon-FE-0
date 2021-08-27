import instances from "./AxiosInstance";

// below is example
const service = instances.instancePlaceHolder.apiInstance();

const baseURL = 'driver'

class DriverService {
  static getAllDriver() {
    return service.get(`${baseURL}`)
    .then((response) => {
        return response;
    })
    .catch( err => {
        throw err;
    });
  }
}

export default DriverService;
