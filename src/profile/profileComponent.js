import React from "react" ;
import PropTypes from 'prop-types';
const ProfileData = props =>
{
    const styleObject = {
        margin:"150px 350px",
        fontSize:"20px",
        border:"1px solid blue" ,
        padding: "50px",
        fontFamily:"Roboto,san-serif"
    }
    const styleButton = {
        padding:"20px 40px",
        fontSize:"20px",
        cursor:"pointer"
    }
    function clickHandler()
    {
        alert(`your name is :${props.name}`)
    }
    return (<div style = {styleObject}>
        {props.children}
        <h2>{props.name}</h2>
        <p><i>Bio : </i>{props.bio}</p>
        <p><b>Profission:</b> {props.profission}</p>
        <button onClick={clickHandler} style={styleButton}><b>Click</b></button>
        </div>
    );
}

ProfileData.defaultProps = {
    name : 'Hend',
    bio : `my name is Hend Jannat,I am an Architact and I am workin at Bonyan Company.\n My Goal is to create an iconic building in Libya.
    my biggest achivement is AGP Prize . `,
    proffision:'Electrical & Electronic Engineer',
    src:'./logo.svg'
};

ProfileData.propTypes = {
    name:PropTypes.string,
    bio:PropTypes.string,
    proffision: PropTypes.string,
    src:PropTypes.string

};
export default ProfileData;


