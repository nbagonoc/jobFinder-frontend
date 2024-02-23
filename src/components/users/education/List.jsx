import axios from 'axios'
import { useEffect } from 'react'

import { educationsAPI } from '../../../API'

import View from './View'

const List = () => {
    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='fw-bold fs-5 mt-2'>Education</h3>
            </div>
            <div className='card-body'>
                <View />
                <hr />
                <View />
                <hr />
                <View />
            </div>
        </div>
    )
}

export default List
