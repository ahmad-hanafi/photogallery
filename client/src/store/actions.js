import axios from 'axios'
const baseURL = 'http://localhost:3000'
import Swal from 'sweetalert2'

export function login({ commit }, { email, password, router }) {
    // console.log(email, passwo rd)
    const data = {
        email,
        password
    }
    axios
        .post(`${baseURL}/login`, data)
        .then(res => {
            // console.log(res)
            localStorage.setItem('access_token', res.data.access_token)
            localStorage.setItem('roles', res.data.roles)
            router.push('/')
        })
        .catch(error => console.log(error))
}

export function register({ commit }, { email, password, router }) {
    // console.log(email, password)
    const data = {
        email,
        password
    }
    axios
        .post(`${baseURL}/register`, data)
        .then(res => {
            // console.log(res)
            router.push('/login')
            Swal.fire(
                'Success',
                'You may login now with your account',
                'success'
              )
        })
        .catch(error => console.log(error))
}

export function getPhotos({ commit }) {
    axios
        .get(`${baseURL}/photos`, {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(res => {
            console.log(res.data)
            commit('SET_PHOTOS', res.data)
        })
        .catch(error => console.log(error))
}

export function getPhotoById ({commit}, { id, router}) {
    axios
    .get(`${baseURL}/photos/${id}`, {
        headers: {
            access_token: localStorage.access_token
        }
    })
    .then((response) => {
        console.log(id)
        commit('SET_PHOTOBYID', response.data)
        router.push(`/photos/${id}`)
    })
}

export function addPhoto ({commit}, {title, url, thumbnailUrl, albumId, router}) {
    const addData = {
        title: title,
        url: url,
        thumbnailUrl: thumbnailUrl,
        albumId: albumId,
      }
    axios
    .post(`${baseURL}`, addData, {
        headers: {
            access_token: localStorage.access_token
        }
    })
    .then(response => {
      router.push('/')
            Swal.fire(
                'Success',
                'Photo has been added to website',
                'success'
              )
    })
    .catch(error => console.log(error))
}

export function updatePhoto({ state, dispatch }, {id, router}) {
    const dataUpdate = {
        title: state.photo.title,
        url: state.photo.url,
        thumbnailUrl: state.photo.thumbnailUrl,
        albumId: state.photo.albumId,
    }
    axios
    .put(`${baseURL}/photos/${id}`, dataUpdate, {
        headers: {
            access_token: localStorage.access_token
        }
    })
    .then((response) => {
        dispatch('getPhotos')
        router.push('/')
        Swal.fire(
            'Success',
            'Photo has been updated',
            'success'
          )
    })
    .catch((error) => console.log(error))
}

export function updatePhotoAlbum({ state, dispatch }, {id, router}) {
    const dataUpdate = {
        albumId: state.photo.albumId,
    }
    axios
    .patch(`${baseURL}/photos/${id}`, dataUpdate, {
        headers: {
            access_token: localStorage.access_token
        }
    })
    .then((response) => {
        dispatch('getPhotos')
        router.push('/')
        Swal.fire(
            'Success',
            'Photo has been updated',
            'success'
          )
    })
    .catch((error) => console.log(error))
}

export function deletePhoto ({dispatch}, {id}) {
    axios
    .delete(`${baseURL}/photos/${id}`, {
        headers: {
            access_token: localStorage.access_token
        }
    })
    .then((response) => {
        dispatch('getPhotos')
    })
    .catch((error) => console.log(error))
}


export function getAlbum({ commit }) {
    axios
        .get(`${baseURL}/albums`, {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(res => {
            // console.log(res.data)
            commit('SET_ALBUMS', res.data)
        })
        .catch(error => console.log(error))
}

export function getAlbumById ({commit}, { id, router}) {
    axios
    .get(`${baseURL}/albums/${id}`, {
        headers: {
            access_token: localStorage.access_token
        }
    })
    .then((response) => {
        commit('SET_ALBUMBYID', response.data)
        router.push(`/albums/${id}`)
    })
}


export function addAlbum ({commit}, {title, router}) {
    const addData = {
        title: title
      }
    axios
    .post(`${baseURL}`, addData, {
        headers: {
            access_token: localStorage.access_token
        }
    })
    .then(response => {
      router.push('/albums')
            Swal.fire(
                'Success',
                'Album has been added to website',
                'success'
              )
    })
    .catch(error => console.log(error))
}

export function updateAlbum({ state, dispatch }, {id, router}) {
    const dataUpdate = {
        title: state.photo.title
    }
    axios
    .patch(`${baseURL}/albums/${id}`, dataUpdate, {
        headers: {
            access_token: localStorage.access_token
        }
    })
    .then((response) => {
        dispatch('getAlbum')
        router.push('/albums')
        Swal.fire(
            'Success',
            'Photo has been updated',
            'success'
          )
    })
    .catch((error) => console.log(error))
}

export function deleteAlbum ({dispatch}, {id}) {
    axios
    .delete(`${baseURL}/albums/${id}`, {
        headers: {
            access_token: localStorage.access_token
        }
    })
    .then((response) => {
        dispatch('getAlbum')
    })
    .catch((error) => console.log(error))
}
