import { MdDelete } from "react-icons/md";

function Todoitem({ todoName , todoDate }){

  return(

    <div className="container ">
    <div className="row pp-row">
      <div className="col-6">
         {todoName}
      </div>
      <div className="col-4">
        {todoDate}
      </div>
      <div className="col-2"> 
      <button type="button" className="btn btn-danger pp-button"><MdDelete/></button>
      </div>
    </div>
  </div>

  );

}
export default Todoitem;