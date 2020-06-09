import Axios from "axios";

/**
     * A utiliy function toto change state of current component.
     * @function updateObject
     * @param {oldObject} - old state object.
     * @param {updatedProperties} - new state object.
     */
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

 /**
     * A utiliy function to check whether a certain input is valid.
     * @function checkValidity
     * @param {value} - value to be checked.
     * @param {type} - type of value.
     */
export const checkValidity = ( value, type ) => {
    let isValid = true;
    if(value===undefined || value==="" || value===null)return false
    if(type==="email")
    {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }

    if(type==="pass")
    {
        isValid = value.length >= 8 && isValid
    }

    if(type==="username")
    {
        const pattern = /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/;
        isValid = pattern.test( value ) && isValid
    }

    if(type==="gender")
    {
        if(value===0 || value===1)
        isValid=true;
        else
        isValid=false;
    }

    return isValid;
}

/**
     * A utiliy function to allow global log out
     * @function logout
     */
export const logout= () => {
    if(localStorage.getItem("loginType")==="fb")
    {
        window.FB.logout(function (response) {
            //console.log(response);
        });
    }
    localStorage.clear();
}

/**
     * A utiliy function to allow global login
     * @function logout
     */
export const login= (type,token) => {
    
    localStorage.setItem("isLoggedIn",'true');
    localStorage.setItem("token",token);
    localStorage.setItem("loginType", type);
    console.log(localStorage);
    //Axios.defaults.header.common['authorization'] = "Bearer "+ token;
}

/**
     * A utiliy to allow global response handeling form all components.
     * @function responseHandler
     * @param {response} - response retrieved.
     */
export const responseHandler= (response) => {

    if(response.status===401)
    {
        alert("Your session has ended");
        logout();  
    }
    else if(response.status===200 || response.status===204 )
    {
        
    }
    else 
    {
    alert(response.message);
    console.log(response);
    }
}
