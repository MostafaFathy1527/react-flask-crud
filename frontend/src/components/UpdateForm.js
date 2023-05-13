const UpdateForm = ({ id, name, age, onSubmit }) => {
  return (
   <form onSubmit={onSubmit}>
     {/* Name and age inputs */}
     <button type="submit">Update</button>    
   </form>   
  );  
};
export default UpdateForm;