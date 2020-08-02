import React, { Fragment, useState, useEffect } from 'react'

import smurfService from '../../services/smurf-service'
import EditForm from './Edit-Form'

const Edit = (props) => {

    const smurfId = props.match.params.id
    const [smurf, setSmurf] = useState({})

    useEffect(() => {
        (async () => {
            const smurfxd = await smurfService.loadOne(smurfId)
            setSmurf(smurfxd)
        })()
    }, [smurfId])

    return (
        <Fragment>
            <EditForm smurfId={smurfId} smurf={smurf} history={props.history} />
        </Fragment>
    )
}

export default Edit