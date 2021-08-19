import repositories from './repositories'
import developers from './developers'

export default (path) => Promise.resolve(({
    repositories,
    developers
})[path])