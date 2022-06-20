import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../../../components/shared/Layout';
import { getReadme, getRepoDetail } from '../profile.api';
import HeaderRepo from '../../../components/profile/HeaderRepo';
import MarkdownReadme from '../../../components/profile/MarkdownReadme';


export default function DetailRepo() {
    let { id, repoId } = useParams();
    const dispatch = useDispatch()
    const { detailRepo, loading, readmeData } = useSelector(state => state.profile)
    useEffect(() => {
        const ids = {
            id,
            repoId
        }
        dispatch(getRepoDetail(ids))
    }, [id, repoId])

    useEffect(() => {
        const ids = {
            id,
            repoId,
            default_branch: detailRepo?.default_branch
        }
        dispatch(getReadme(ids))
    }, [detailRepo.default_branch])



    return (
        <Layout goBack>
            <div className="detail-repo">
                <div className="container">
                    <HeaderRepo
                        detailRepo={detailRepo}
                        loading={loading}
                    />
                    <MarkdownReadme
                        readmeData={readmeData}
                        loading={loading}
                    />
                </div>
            </div>
        </Layout>
    )
}
