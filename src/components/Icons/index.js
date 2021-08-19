import fire from './fire'
import repo from './repo'
import merge from './merge'

const icons = {
    fire,
    repo,
    merge
}

export default (props) => {
    const Icon = icons[props.iconName]
    return <Icon {...props} />
}