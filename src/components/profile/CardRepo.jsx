import React from 'react'
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';

export default function CardRepo({
    data,
    userId,
    loading
}) {
    const { history } = useParams()
    return (
        <>
            <div className="boxes-repo">
                {
                    loading ?
                        <pre>Loading...</pre>
                        :
                        data.map(res =>
                            <Link className="card" key={res?.id} to={`/profile/${userId}/${res?.name}`}>
                                <p className="title">{res?.name?.replaceAll('_', '-')} <span>👉</span> </p>
                                <small>
                                    {res?.description}
                                </small>
                                <pre>
                                    {moment(res?.created_at).format('DD MMM YYYY')}
                                    <span>{res?.language}</span>
                                </pre>
                            </Link>

                        )

                }
            </div>
        </>
    )
}
