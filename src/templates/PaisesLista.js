import React from 'react';
import PropTypes from 'prop-types';
import { useSelector,useDispatch } from 'react-redux';
import { appActions } from '../redux/actions';
import { useHistory} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PaisesLista(props){
    let history = useHistory();
    
    const { paises } = props;
    const { appReducer } = useSelector(state => state);
    const dispatch = useDispatch();
    const { pais } = appReducer;

    function handleClick(pais) {
        console.log(pais);
        dispatch(appActions.setPais(pais));
        history.push("detalle");
    }

    return(
        <div>
        {
            paises.length > 0 && paises.map(pais => {
            {/*return <Card key={pais.numericCode} {...pais}/>*/}
            return <div key={pais.numericCode}>
                        <Row>
                            <Col sm={8}>{pais.name}</Col>
                            <Col sm={4}><input className="btn btn-primary" type="button" value="Ver detalles" onClick={() => handleClick(pais)}/></Col>
                        </Row>
            </div>
            })
        }
        </div>
    )
}

PaisesLista.propTypes = {
    paises: PropTypes.array.isRequired,
}