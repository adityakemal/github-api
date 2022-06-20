import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getListProfile } from './dashboard.api'
import Layout from '../../components/shared/Layout'
import { Link } from 'react-router-dom'

export default function DashboardContainer() {
    const dispatch = useDispatch()
    const [query, setQuery] = useState("");

    const { listProfile, loading } = useSelector(state => state.dashboard)

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            dispatch(getListProfile(query))
        }, 500);
        return () => clearTimeout(timeOutId);
    }, [query]);


    return (
        <Layout>
            <div className='dashboard'>
                <div className="content">
                    {
                        listProfile.length === 0 ?
                            <h1>SE👨‍💻RCH GITHUB APP</h1>
                            :
                            <small>
                                <pre>
                                    {listProfile.length} result
                                </pre>
                            </small>
                    }
                    <div className="wrap-input">
                        🔍
                        <input placeholder='Search github username' type="text" value={query} name='search' onChange={event => setQuery(event.target.value)} />
                        {
                            loading && <small><pre>loading...</pre></small>
                        }
                    </div>

                    <ul>
                        {
                            listProfile.map(res => (

                                <Link to={`/profile/${res?.login}`} key={res.id}>
                                    <li>
                                        <div className='profile-list'>
                                            <img src={res?.avatar_url} alt="" />
                                            <span> {res?.login}</span>
                                        </div>
                                        ➡️
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                    {/* {JSON.stringify(listProfile)} */}
                </div>
            </div>
        </Layout>
    )
}
