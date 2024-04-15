
import styles from './PokemonModalComponent.module.css';
import stylesCard from './PokemonCardComponent.module.css';

function PokemonModalComponent(props){

    const {pokemon, onClose} = props;
    const {height, weight, stats = [], id, name, type, image} = pokemon;

    // console.log(height, weight, stats, id, name, type, image, "STATIS HELLOS");

    return (
        <div className={`${styles.popupcontainer} ${stylesCard[type]}`}>
            
            {/* cross sign */}
            <div className={styles.closebutton}
             onClick={()=>{
                console.log("close this popup");
                onClose();
             }} 
             >
                X
             </div>
            
            {/* left */}
            <div className={styles.leftcontainer}>
                <img className={styles.leftcontainerimage} src={image} />
                <p className={styles.nametext}>{name}</p>
            </div>
            

            {/* right */}
            <div className={styles.rightcontainer}>
                <div>
                    <p><span>weight:</span> {weight}</p>
                    <p><span>height:</span> {height}</p>
                </div>

                {/* STATS */}

                <div>
                    {Array.from(stats).map((statObj, index) => {
                        const {stat} = statObj;
                        const name = stat.name;

                        return <p><span>Stat{index+1}: </span>{name}</p>
                    })}
                </div>

                {/* STATS 2*/}
                <div>
                {Array.from(stats).map((statObj, index) => {
                        const {base_stat} = statObj;
    
                        return <p><span>Stat{index+1}: </span>{base_stat}</p>
                    })}
                </div>
            </div>
        </div>
       
    )
}
export default PokemonModalComponent;