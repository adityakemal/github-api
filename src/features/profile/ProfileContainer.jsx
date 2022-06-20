import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardRepo from '../../components/profile/CardRepo';
import Layout from '../../components/shared/Layout'
import { getProfileDetail, getProfileRepos } from './profile.api';

export default function ProfileContainer() {
    const dispatch = useDispatch()
    let { id } = useParams();
    const { detailProfile, loading, listRepos } = useSelector(state => state.profile)
    useEffect(() => {
        dispatch(getProfileRepos(id))
        dispatch(getProfileDetail(id))
    }, [id])

    return (
        <Layout goBack>
            <div className="profile">
                <div className="contain">
                    <div className="boxes">
                        <div className="left">
                            <img src={detailProfile?.avatar_url} alt="profile" />
                        </div>
                        <div className="right">
                            <h2>{detailProfile?.login}</h2>
                            <pre>
                                <p>👨‍💻 {detailProfile?.followers} Folower - {detailProfile?.following} Following</p>
                                <p>📚 {detailProfile?.public_repos} Repositories</p>
                            </pre>
                        </div>
                    </div>

                    <CardRepo data={listRepos} loading={loading} userId={id} />
                </div>
            </div>
        </Layout>
    )
}
