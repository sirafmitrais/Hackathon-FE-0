import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { RootState } from "../../store/reducers";

import { getDriverList } from "../../store/action-creators/driver.action";
import { useEffect } from "react";

const DriverTable = (props: any) => {
  const dispatch = useDispatch();
  const driverAll = useSelector((state: RootState) => state.driver.listDriver);

  console.log("test ini", driverAll);
  useEffect(() => {
    dispatch(getDriverList());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>Driver Name</th>
            <th>Phone Number</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(driverAll.data).map((driver: any) => {
            
            <tr>
              <th scope="row">1</th>
              <td>{driver.phone_number}</td>
              <td>{driver.status}</td>

              <td>
                <button type="button" className="btn btn-primary mr-2">
                  <i className="far fa-eye"></i>
                </button>
                <button type="button" className="btn btn-success mr-2">
                  <i className="fas fa-edit"></i>
                </button>
                <button type="button" className="btn btn-danger">
                  <i className="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default DriverTable;
