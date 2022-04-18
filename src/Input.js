import React from 'react';

const Input =(props) =>
(<>
    <input type="Button" 
        onClick={props._UbahNama}
        value="Ubah Nama">
    </input>
    <br />
    <label>Nama Baru : </label>
    <input type="Text" 
        onBlur={(event) => props._UbahNama2(event.target.value)}>
    </input>
    <br />
    <label>Umur Baru : </label>
    <input type="Text" 
    onBlur={(event) => props._UbahUmur2(event.target.value)}>
    </input>
</>)
export default Input