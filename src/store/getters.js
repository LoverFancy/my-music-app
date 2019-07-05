// 用getter包装,用getter方法取state中的数据，然后放到组件中
export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode
// 当前播放歌曲索引
export const currentIndex = state => state.currentIndex
// 当前歌曲
export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}

export const disc = state => state.disc

export const topList = state => state.topList

export const searchHistory = state => state.searchHistory

export const playHistory = state => state.playHistory

export const favoriteList = state => state.favoriteList
