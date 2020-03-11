import React, {useEffect, useState} from "react";

import {sendFetchRequestIsThereLoginUser, sendFetchRequestLoginUser} from "./SetLoginPage";

import {redirectByRole} from "../../../actions";

import {ErrorModal} from "../../AdditionalComponents/ErrorModal/ErrorModal";

import {FormForInputUserInformation} from "../../AdditionalComponents/FormForInputUseInfo/FormForInputUserInformation";
import {Container} from "@material-ui/core";

export const LoginPage = (props) => {
    const [userDetails, setUserDetails] = useState({
        uuid: null,
        role: null
    });

    const { error,setStoreError } = props;

    //Effects after each render
    useEffect(() => {
        if (localStorage.token && !userDetails.role){sendFetchRequestIsThereLoginUser({setUserDetails})}
        props.setStoreUserDetails(userDetails);
        if (userDetails.role){redirectByRole(userDetails.role, props)}
    }, [userDetails, userDetails.role, props]);

    //Main HTML return
    return (
        <Container>
            {error ? ( <ErrorModal modalTitle={"Wrong Input"}/> ) : null}
            <FormForInputUserInformation
                {...props}
                fetchRequest        ={(userDetails) => {
                    sendFetchRequestLoginUser(
                        userDetails,
                        {setUserDetails},
                        {ifCatchSetErrorInStore: (error) => {setStoreError(error)}})
                }}
                submitButtonTitle   ="Log In"
                showEmailForm       ={true}
                showPasswordForm    ={true}
                showRoleForm        ={false}
                showFirstNameForm   ={false}
                showLastNameForm    ={false}
                showLicenceForm     ={false}
                showPhotoURLForm    ={false}
            />
        </Container>
    );
};

export default LoginPage