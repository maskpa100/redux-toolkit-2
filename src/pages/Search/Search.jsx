
import s from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Search = (props) => {
    const {funOrState, funOrValue, funOpState, funOpValue, setImages, totalCount} = props;
    const { orState, orValue, opState, opValue, images } = props.searchReducer;
    const IconCheck = <FontAwesomeIcon className={s.iconCheck} icon="fa-solid fa-check" />;


    return (
        <div>
            <div className={s.word}>
                <input id="words_search" type="text" placeholder="Поиск.." name="search" />
                <button id="words_search_button" type="submit">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </button>
            </div>
            <div className={s.item}>
                <div className={s.orientations}>
                    <button onClick={() =>funOrState(orState)} >
                        <span>Ориентация</span>
                        <FontAwesomeIcon className={s.iconDown} icon="fa fa-angle-down" />
                    </button>
                    {orState ? 
                        <div className={s.list} >
                            <p onClick={() => funOrValue('any')}>
                                Любая ориентация{orValue == "any" ? IconCheck : ''}
                            </p>
                            <p onClick={() => funOrValue('horizontal')}>
                                Горизантальные{orValue == "horizontal" ? IconCheck : ''}
                            </p>
                            <p onClick={() => funOrValue('vertical')}>
                                Вертикальные{orValue == "vertical" ? IconCheck : ''}
                            </p>
                            <p onClick={() => funOrValue('square')}>
                                Квадратые{orValue == "square" ? IconCheck : ''}
                            </p>
                        </div>
                     : ''}
                </div>
                <div className={s.option}>
                    <button onClick={() =>funOpState(opState)}>
                        <span>Формат изображения</span>
                        <FontAwesomeIcon className={s.iconDown} icon="fa fa-angle-down" />
                    </button>
                    {opState ?
                    <div className={s.list}>
                        <p onClick={() => funOpValue('any')}>Любой формат{opValue == "any" ? IconCheck : ''}</p>
                        <p onClick={() => funOpValue('PNG')}>PNG{opValue == "PNG" ? IconCheck : ''}</p>
                        <p onClick={() => funOpValue('JPEG')}>JPEG{opValue == "JPEG" ? IconCheck : ''}</p>
                        <p onClick={() => funOpValue('JPG')}>JPG{opValue == "JPG" ? IconCheck : ''}</p>
                        <p onClick={() => funOpValue('GIF')}>GIF{opValue == "GIF" ? IconCheck : ''}</p>
                    </div>
                    : ''}
                </div>
            </div>
                        <div className={s.search_content}>
                <div className={s.search_container}>
                    <p className={s.count}>Найдено результатов : {totalCount}</p>
                    <ul className={s.search_image_gallery}>
                        {images.map(p => {
                            return  <li key={p.id}>
                                        <img src={p.url} alt=""/>
                                    </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>


    );
}

export default Search;