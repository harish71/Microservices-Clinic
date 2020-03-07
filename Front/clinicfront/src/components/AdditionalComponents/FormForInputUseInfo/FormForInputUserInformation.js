import React from "react";

import {Button, Form} from "react-bootstrap";

import {styleForForm} from "./Containers/SetFormForInputUserInformation";

import {useFormFields} from "../../../actions";

import {EmailForm} from "./ElementsForFormForInputUserInformation/EmailForm";
import {PasswordForm} from "./ElementsForFormForInputUserInformation/PasswordForm";
import {RoleForm} from "./ElementsForFormForInputUserInformation/RoleForm";
import {FirstNameForm} from "./ElementsForFormForInputUserInformation/FirstNameForm";
import {LastNameForm} from "./ElementsForFormForInputUserInformation/LastNameForm";
import {LicenceForm} from "./ElementsForFormForInputUserInformation/LicenceForm";
import {PhotoURLForm} from "./ElementsForFormForInputUserInformation/PhotoURLForm";


export const FormForInputUserInformation = (props) => {
    const [userInformation, setUserInformation] = useFormFields({
        firstName:  null,
        lastName:   null,
        licence:    null,
        photoUrl:   null,
        email:      null,
        password:   null,
        role:       "doctor"
    });

    const handleChange = (event) => {
        setUserInformation(event);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        props.fetchRequest(userInformation);
    };

    return (
        <Form
            onSubmit={e => onSubmit(e)}
            style={styleForForm}>
            <Form.Row>
                {props.showEmailForm        ? ( <EmailForm      handleChange={handleChange}             />) : null}
                {props.showPasswordForm     ? ( <PasswordForm   handleChange={handleChange}             />) : null}
            </Form.Row>
            <Form.Row>
                {props.showRoleForm         ? ( <RoleForm       handleChange={handleChange}             /> ) : null}
                {props.showFirstNameForm    ? ( <FirstNameForm  handleChange={handleChange} {...props}  /> ) : null}
                {props.showLastNameForm     ? ( <LastNameForm   handleChange={handleChange} {...props}  /> ) : null}
            </Form.Row>
            <Form.Row>
                {props.showLicenceForm      ? ( <LicenceForm    handleChange={handleChange} {...props}  /> ) : null}
                {props.showPhotoURLForm     ? ( <PhotoURLForm   handleChange={handleChange} {...props}  /> ) : null}
            </Form.Row>
            <Button variant="light" type="submit"> {props.submitButtonTitle} </Button>
        </Form>
    );
};