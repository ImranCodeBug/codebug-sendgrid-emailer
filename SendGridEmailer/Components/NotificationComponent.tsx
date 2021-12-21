import { faSearch, faExclamationTriangle, faTimes, faCheckCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

interface Props {
    notificationText: string;
    notificationType: notificationType
}

export enum notificationType {
    Warning, Success, Error
}

type styleDetails = {
    iconType: IconDefinition,
    iconColor: string,
    alertColor: string,
}

const getStyleDetails = (notifType: notificationType): styleDetails => {
    if (notifType === notificationType.Warning) {
        return {
            iconType: faExclamationTriangle,
            iconColor: "fs-4 text-warning",
            alertColor: "p-2 alert alert-warning"
        }
    }
    else if (notifType === notificationType.Success) {        
        return {
            iconType: faCheckCircle,
            iconColor: "fs-4 text-success",
            alertColor: "p-2 alert alert-success"
        }
    }
    else {        
        return {
            iconType: faTimes,
            iconColor: "fs-4 text-danger",
            alertColor: "p-2 alert alert-danger"
        }
    }
}

export const NotificationComponent = (props: Props) => {
    const {iconType, iconColor, alertColor} = getStyleDetails(props.notificationType);
    return (
        <div className={alertColor} role="alert">
            <FontAwesomeIcon className={iconColor} icon={iconType} />
            &nbsp;&nbsp;
            {props.notificationText}

        </div>
    )
}
