import axios from 'axios'
import conf from '@/config'

function getListUrl() {
  //example   https://api.github.com/repos/arronf2e/blog/contents/posts?ref=master
  let url = `https://api.github.com/repos/${conf.repo}/contents/`
  if (conf.path) url += conf.path
  if (conf.branch) url += `?ref=${conf.branch}`
  return url
}

function getPostUrl(hash) {
  let url = `https://api.github.com/repos/${conf.repo}/git/blobs/${hash}`
  return url
}

const Cache = {
  get: (key) => {
    if (!window.sessionStorage) return false
    return JSON.parse(window.sessionStorage.getItem(key))
  },
  set: (key, data) => {
    if (!window.sessionStorage) return false
    window.sessionStorage.setItem(key, JSON.stringify(data))
    return true
  },
  has: (key) => {
    return Boolean(window.sessionStorage && window.sessionStorage.hasOwnProperty(key))
  }
}

function postDate(val) {
  return val.split('～')[0]
}
function postName(val) {
  // 正则不会-，- ，先用split了-，-，嘿嘿
  return val.split('～')[1].split('.')[0]
}

export default {
  getList() {
    if(Cache.get('lists')) {
      return Promise.resolve(Cache.get('lists'))
    } else {
      return axios.get(getListUrl()).then(res => {
        const lists = []
        res.data.map(({name, sha, size}) => {
          lists.push({
            title: postName(name),
            date: postDate(name),
            sha,
            size
          })
        })
        Cache.set('lists', lists)
        return lists
      }, error => {
        console.log(error)
      })
    }
  },
  getPost(hash) {
    const cacheKey = 'post.' + hash
    const httpOpts = {
      // https://developer.github.com/v3/media/#raw-1 ，这个一定要！
      headers: { Accept: 'application/vnd.github.v3.raw' }
    }
    if(Cache.has(cacheKey)) {
      return Promise.resolve(Cache.get(cacheKey))
    } else {
      return axios.get(getPostUrl(hash), httpOpts).then(res => {
        Cache.set(cacheKey, res.data)
        return res.data
      }, err => {
        console.log(err)
      })
    }
  }
}
