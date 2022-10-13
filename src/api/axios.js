import axios from "axios";

export default axios.create({
    baseURL: 'https://testproject.optimistinc.com/api/',
    headers: {
        'Content-Type': 'application/json',
        'optimist_api_key': "bQ0V2vc2F3dKadbAuUiV",
    }
})
