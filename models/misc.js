import * as YodyinfoAPI from '@/services/yodyinfo-api'

class Misc {
  static info(options = {}) {
    return YodyinfoAPI.get('/info', options)
  }

  static dailyTransactions(options = {}) {
    return YodyinfoAPI.get('/stats/daily-transactions', options)
  }

  static blockInterval(options = {}) {
    return YodyinfoAPI.get('/stats/block-interval', options)
  }

  static coinstake(options = {}) {
    return YodyinfoAPI.get('/stats/coinstake', options)
  }

  static addressGrowth(options = {}) {
    return YodyinfoAPI.get('/stats/address-growth', options)
  }

  static richList({from, to}, options = {}) {
    return YodyinfoAPI.get(`/misc/rich-list`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }

  static biggestMiners({from, to}, options = {}) {
    return YodyinfoAPI.get(`/misc/biggest-miners`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }
}

export default Misc
