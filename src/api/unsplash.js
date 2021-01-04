import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID VsPUv7Vfk9zJVFKm5mAROvKyCkUC3LDa9x-3rDTc-tE'
    }
});