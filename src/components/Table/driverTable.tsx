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
         
            
            <tr>
              <th scope="row">1</th>
              <th>Fauzi Faruq</th>
              <td>081320462168</td>
              <td>Active</td>

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
            </tr>

            <tr>
              <th scope="row">2</th>
              <th>Faris</th>
              <td>081320462168</td>
              <td>Active</td>

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
            </tr>
        
        </tbody>
      </Table>
    </div>
  );
};

export default DriverTable;
