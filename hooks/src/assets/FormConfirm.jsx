import './FormConfirm.css';

function FormConfirm({ data }) {


  return (
    <form className='formConfirmContainer'>
        <div>
            <span>Please confirm your information is correct</span>
        </div>
        <div className='formConfirmInfo'>
            <span>{data.title}</span>
            <span>{data.firstName}</span>
            <span>{data.lastName}</span>
            <span>{data.email}</span>
            <span>{data.country}</span>
            <span>{data.postcode}</span>
            <button>Confirm</button>
        </div>  
    </form>
  )
};

export default FormConfirm;
