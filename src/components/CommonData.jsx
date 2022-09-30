import '../assets/styles/CommonData.css'

function CommonData() {
    return (
        <form action="">
            <label>Nombre(s): </label>
            <input name='nombre' type='text' className='name'/>

            <label>Apellido(s): </label>
            <input name='nombre' type='text' className='name'/><br />

            <label>Fecha de nacimiento: </label>
            <input type="date" className='date'/>

            <label>Edad: </label>
            <input type="number" className='date'/>

            <label>Sexo: </label>
            <select name="select" className='date'>
                <option value="value1"  className='sel'>Hombre</option> 
                <option value="value2" className='sel'>Mujer</option>
                <option value="value3" className='sel'>No binario</option>
                <option value="value4" selected className='sel'>...</option>
            </select>
        </form>
    );
}

export default CommonData;