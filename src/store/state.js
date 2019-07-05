import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  // 歌手信息
  singer: {},
  // 播放状态
  playing: false,
  // 全屏
  fullScreen: false,
  // 播放列表
  playlist: [],
  // 歌曲顺序列表:取决于播放模式
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  // 当前播放歌曲的索引
  currentIndex: -1,
  // 磁盘
  disc: {},
  // 排行榜
  topList: {},
  // 搜索历史
  searchHistory: loadSearch(),
  // 播放历史
  playHistory: loadPlay(),
  // 收藏列表
  favoriteList: loadFavorite()
}

export default state