import { API } from 'aws-amplify';
import {useEffect, useState} from 'react';

export const GitHubBornOn = () => {
    
    const [bornOnInfo, setBornOnInfo] = useState({});

    const fetchGitHubBornOnInfo = async () => {

        try {
            const data = await API.get(
                'cryptoapi22s'
                , '/born'
            );

            setBornOnInfo(data.bornOnInfo);
        }
        catch (err) {
            setBornOnInfo({
                login: "Error"
                , created_at: "Error"
            });
        }
    };

    useEffect(
        () => fetchGitHubBornOnInfo()
        , []
    );
    
    return (
        <h2>
            {bornOnInfo.login} - {bornOnInfo.created_at}
        </h2>
    );
};