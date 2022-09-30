import'../assets/styles/CommonData.css'

function Description() {
    return (
        <form action="" className='text'>
            <label>Acerca de ti: </label><br />
            <textarea cols="90" rows="15"></textarea><br />
            <input type="button" value="Guardar" />
        </form>
    );
}

export default Description;