import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import background from "../images/background.png";

const FormPics = ({ buttonText, link }) => {
    return (
        <div style={{ backgroundImage: `url(${background})`, width: '550px', height: '385px' }}>
            <h3 style={{ marginLeft: '120px', paddingTop: '100px'}} className="text-white">Re-engineering</h3>
            <h3 style={{ marginLeft: '120px'}} className="text-white">fresh farm</h3>
            <h3 style={{ marginLeft: '120px'}} className="text-white">produce supply</h3>
            <Link to={link}>
                <Button variant="secondary" type="submit" style={{ marginLeft: '120px'}}>
                    {buttonText}
                </Button>
            </Link>
        </div>
    )
}

export default FormPics;