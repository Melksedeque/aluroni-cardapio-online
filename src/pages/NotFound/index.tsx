import styles from './NotFound.module.scss';
import notFound from 'assets/not_found.svg';
import classNames from 'classnames';
import stylesTema from 'styles/Tema.module.scss';

export default function NotFound() {
  return (
    <div className={classNames({
        [styles.container]: true,
        [stylesTema.container]: true,
    })}>
        <img src={notFound} alt="" />
        <p>
            <a href="/">Go back to homepage</a>
        </p>
    </div>
  )
}