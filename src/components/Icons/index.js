import fire from './fire'
import repo from './repo'
import merge from './merge'

const icons = {
    fire,
    repo,
    merge
}

const Icons = (props) => {
    const Icon = icons[props.iconName]
    return <Icon {...props} />
}
export default Icons