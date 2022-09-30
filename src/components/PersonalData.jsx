import '../assets/styles/CommonData.css'

function PersonalData() {
    return (
        <form action="">
            <label>Lugar de nacimiento: </label>
            <input name='nombre' type='text' className='name'/>

            <label>Nacionalidad: </label>
            <input name='nombre' type='text' className='name'/><br />

            <label>Email: </label>
            <input type="email" className="name"/>

            <label>Numero de telefono: </label>
            <input type="tel" className='name'/>
        </form>
    );
}

export default PersonalData;