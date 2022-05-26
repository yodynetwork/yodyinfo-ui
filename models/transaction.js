import * as YodyinfoAPI from '@/services/yodyinfo-api'

class Transaction {
  static get(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return YodyinfoAPI.get('/txs/' + id.join(','), options)
      }
    } else {
      return YodyinfoAPI.get(`/tx/${id}`, options)
    }
  }

  static getBrief(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return YodyinfoAPI.get('/txs/' + id.join(','), {params: {brief: ''}, ...options})
      }
    } else {
      return YodyinfoAPI.get(`/tx/${id}`, {params: {brief: ''}, ...options})
    }
  }

  static getRecentTransactions(options = {}) {
    return YodyinfoAPI.get('/recent-txs', options)
  }

  static sendRawTransaction(data, options = {}) {
    return YodyinfoAPI.post('/tx/send', {rawtx: data}, options)
  }
}

export default Transaction
