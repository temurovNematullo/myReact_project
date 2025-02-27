import style from '../../Users/users.module.css'
import loader from '../../../img/loading.svg'


let Preloader = () => {
    return (
        <div>
            <img className={style.loading} src={loader} alt="" /> 
        </div>
    );
}

export default Preloader