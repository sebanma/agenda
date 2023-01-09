import React from 'react';

const Form = ()=> {
    return(
    <form>
        <div className="mb-3">
             <label htmlfor="name" className="form-label">nombre</label>
             <input type="Text" id="title" className="form-control"></input>
        </div>
        <div className="mb-3">
             <label htmlfor="correo" className="form-label">correo</label>
             <input type="email" id="title" className="form-control"></input>
        </div>
        <div className="mb-3">
             <label htmlfor="tlf-fijo" className="form-label">tlf-fijo</label>
             <input type="tel" id="title" className="form-control"></input>
        </div>
        <div className="mb-3">
             <label htmlfor="tlf-movil" className="form-label">tlf-movil</label>
             <input type="tel" id="title" className="form-control"></input>
        </div>
        <button className="btn btn-primary">Submit</button>
    </form>
    );
}

export default Form;