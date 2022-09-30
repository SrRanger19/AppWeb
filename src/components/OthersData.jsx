import '../assets/styles/CommonData.css'

function OthersDate() {
    return (
        <form action="">
            <label>Direccion: </label>
            <input type='text' className='direccion'/><br />

            <label>Direccion de la calle: </label>
            <input type='text' className='direccion'/><br />

            <label>Codigo Postal: </label>
            <input type="number" className="date"/>

            <label>Referencias: </label>
            <input type='text' className='direccion'/><br />
        </form>
    );
}

export default OthersDate;