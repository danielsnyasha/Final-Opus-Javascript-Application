import React from 'react'
import './Universal.css';
import { useHistory } from 'react-router-dom';



function AR() {
    let history = useHistory();

    const toRobot = () => {
        history.push('/autorobot')

        }


     return (
        <div className="ProfContainer">
            <div className="ProfInner">
                <div className="pt">
                <div className="machBystar4025" onClick={toRobot}>
                    
                    <h1 className="h1">Diesel Forklift</h1>
                    <h2 className="h2">Toyota</h2>
                </div>
                <div className="machName" onClick={toRobot}>
                    <h1 className="h1">Diesel Forklift</h1>
                    <h2 className="h2">Clark</h2>
                </div>
                <div className="machName" onClick={toRobot}>
                    <h1 className="h1"> H100 Bukkie</h1>
                    <h2 className="h2">Hyundai</h2>
                </div>
                </div>
                
            
            
            </div>
        </div>
    )
}

export default AR;
