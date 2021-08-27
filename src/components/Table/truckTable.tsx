import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { RootState } from "../../store/reducers";

import axios from "axios";
import { getTruckList } from "../../store/action-creators/truck.action";
import Truck from "../../views/transporter/Truck";

const TruckTable = (props: any) => {
  const dispatch = useDispatch()
  const trucks = useSelector((state: RootState) =>  state.truck.listTruck)

  console.log(trucks);
  // axios.defaults.baseURL = 'http://localhost:4000/api';
  // const [truck, setTruck] = useState(null)

  // console.log('ini Truck', trucks);



  console.log("test ini", trucks);
  useEffect(() => {
    dispatch(getTruckList());
  }, [dispatch]);

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
