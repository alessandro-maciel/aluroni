import classNames from 'classnames';
import styles from './NotFound.module.scss';
import styleTema from 'styles/Tema.module.scss';
import {ReactComponent as NotFoundImage} from 'assets/not_found.svg';
import {useNavigate} from 'react-router-dom';

export default function NotFound(){
  const navigate = useNavigate();

  return (
    <div className={classNames({
      [styles.container]: true,
      [styleTema.container]: true,
    })}>
      <div className={styles.voltar}>
        <button onClick={()=>navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage />
    </div>
  );
}