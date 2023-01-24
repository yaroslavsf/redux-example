import * as UserActionCreator from './user'
import * as ReposActionCreator from './repos'

export default {
    ...UserActionCreator,
    ...ReposActionCreator
}