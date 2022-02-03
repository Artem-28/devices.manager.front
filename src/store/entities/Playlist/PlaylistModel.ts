import {Model} from "@vuex-orm/core";

export default class PlaylistModel extends Model {
    static entity = 'playlist'

    id!: number
    static fields() {
        return {
            id: this.attr(null),
            title: this.attr(null),
            description: this.attr(null),
        }
    }
}
