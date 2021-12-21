import * as React from 'react'
import { NotificationComponent, notificationType } from './NotificationComponent'

interface Props {
    thumbnailUrl? : string
}

export const ThumbnailComponent = (props: Props) => {
    return (
        
        
        <div className='row mx-2 mt-2'>
                <div className='col-2 pt-1 text-start'>
                    <label>Thumbnail</label>
                </div>
                <div className='col text-start'>
                {props.thumbnailUrl ?
                    <img src={props.thumbnailUrl} />
                    :<NotificationComponent notificationText={'Thumbnail for the template cannot be found'} notificationType={notificationType.Warning}></NotificationComponent>}
                </div>
            </div>
        
        
    )
}
