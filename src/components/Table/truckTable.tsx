import { Table } from "reactstrap";

const TruckTable = (props: any) => {
  return (
    <div className="container mt-5">
      <Table>
        <thead>
          <tr>
            <th>License Number</th>
            <th>Truck Trype</th>
            <th>Plate Type</th>
            <th>Production Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">B 2021 ABC</th>
            <td>Tronton</td>
            <td>Yellow</td>
            <td>2021</td>
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

export default TruckTable;
