import repositories from './repositories'
import developers from './developers'

const db = (path) => Promise.resolve(({
    repositories,
    developers
})[path])
export default db