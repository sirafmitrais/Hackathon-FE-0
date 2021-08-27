import instances from "./AxiosInstance";

// below is example
const service = instances.instancePlaceHolder.apiInstance();

const baseURL = "truck";

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
}

export default TruckService;
