import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Table from '../components/Table'
import ListBlockDevelopers from '../components/ListBlockDevelopers'
import { useSelector, useDispatch } from 'react-redux'
import { getDevelopers, selectDevelopers } from '../features/developersSlice'

export const Developers = () => {
    const developers = useSelector(selectDevelopers)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDevelopers())
    }, [dispatch])
    return (
        <Layout>
            <Table>
                <ListBlockDevelopers data={developers}/>
            </Table>
        </Layout>
    )
}

export default Developers
