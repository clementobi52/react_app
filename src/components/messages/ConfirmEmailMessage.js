import React from 'react';
import { Message} from 'semantic-ui-react'

const ConfirmEmailMessage = () => {
    return (
        <Message info>
            <Message.Header>please, Verify email to unlock awesomeness</Message.Header>
        </Message>
    );
};

export default ConfirmEmailMessage;