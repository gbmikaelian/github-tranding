import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Table from '../components/Table'
import ListBlockRepositories from '../components/ListBlockRepositories'
import { useSelector, useDispatch } from 'react-redux'
import { getRepositories, selectRepositories } from '../features/repositoriesSlice'

export const Repositories = () => {
    const repositories = useSelector(selectRepositories)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRepositories())
    }, [dispatch])
    return (
        <Layout>
            <Table>
                <ListBlockRepositories data={repositories}/>
            </Table>
        </Layout>
    )
}

export default Repositories
