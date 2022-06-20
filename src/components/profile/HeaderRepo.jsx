import React from 'react'

export default function HeaderRepo({
    loading,
    detailRepo
}) {
    return (

        <div className="header">
            {
                loading ?
                    <pre>
                        Loading...
                    </pre>
                    :
                    <>
                        <h2>
                            📚 &nbsp;
                            {detailRepo?.full_name}
                        </h2>
                        {
                            detailRepo?.description &&
                            <p className="desc">
                                {detailRepo?.description}
                            </p>
                        }
                    </>
            }
        </div>

    )
}
