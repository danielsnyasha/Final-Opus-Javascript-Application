import React from 'react'
import './Universal.css';
import { useHistory } from 'react-router-dom';
import back from '../../pictures/ImagesJade/back.png';

function Additive() {
    let history = useHistory();

    const toGMAW1 = () => {
        history.push('/gmaw')

        }

    const toGMAW2 = () => {
        history.push('/gmaw2')
    
        }
    const toGMAW3 = () => {
            history.push('/gmaw3')
     
        }
    const toGMAW4 = () => {
        history.push('/gmaw4')

        }
    const toSmaw = () => {
        history.push('/smaw')
    
        }
    const toBack =()=>{
        history.push('/maintenance')
    }
    


    return (
        <div className="AddContainer">
            <div className="BackContainer">
                <img src={back} alt="" className="backImage" onClick={toBack}></img>
            </div>
            
            <div className="ProfInner">
                <div className="pt">
                <div className="machGMAW1" onClick={toGMAW1}>
                    {/* <h1 className="h1G">GMAW/GTAW/SWAM</h1>
                    <h2 className="h2GMAW">Modweld</h2> */}
                </div>
                <div className="machGMAW2" onClick={toGMAW2}>
                    {/* <h1 className="h1G">GMAW/SMAW/FCAW/GTAW</h1>
                    <h2 className="h2GMAW">Lincoln</h2> */}
                </div>
                <div className="machGMAW2" onClick={toGMAW3}>
                    {/* <h1 className="h1G">GMAW/SMAW/FCAW/GTAW</h1>
                    <h2 className="h2GMAW">Lincoln</h2> */}
                </div>
                </div>
                
            
            <div className="pt">
                <div className="machGMAW2" onClick={toGMAW4}>
                    {/* <h1 className="h1G">GMAW/SMAW/FCAW/GTAW</h1>
                    <h2 className="h2GMAW">S-4633 SA</h2> */}
                </div>

                <div className="machSMAW" onClick={toSmaw}>
                    {/* <h1 className="h1G">SMAW/GTAW</h1>
                    <h2 className="h2GMAW">Lincoln</h2> */}
                </div>
                <div className="machBlank">
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default Additive;

