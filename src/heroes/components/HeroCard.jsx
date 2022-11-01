import { Link } from 'react-router-dom';

const CharactersByHero = ({ characters, alter_ego }) => {
    return (characters === alter_ego)
    ? <></>
    : <p className='card-text'>{ characters }</p>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;

    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className="card">

                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroImageUrl } className='card-img' alt={ superhero }/>
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>{ superhero }</h5>
                            <p className='card-text'>{ alter_ego }</p>
                            
                            <CharactersByHero characters={ characters } alter_ego={ alter_ego }/>

                            <p className='card-text'>
                                <small className='text-muted'>{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${ id }`}>
                                More info
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
