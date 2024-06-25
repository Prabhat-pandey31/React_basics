function Todo2(){

   let todoname ="Go To College";
  let toDodate ="24/06/2024"
  return (
    <div className="container ">
    <div className="row pp-row">
    <div className="col-6">
    {todoname}
    </div>
    <div className="col-4">
  14/06/2024
    </div>
    <div className="col-2"> 
    <button type="button" className="btn btn-danger pp-button ">
      Delete</button>
    </div>
  </div>
  </div>

  );

}
export default Todo2