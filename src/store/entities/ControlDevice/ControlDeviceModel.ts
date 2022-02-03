import {Model} from "@vuex-orm/core";

export default class ControlDeviceModel extends Model {
    static entity = 'controlDevice'

    id!: number
    static fields() {
        return {
            id: this.attr(null),
            title: this.attr(null),
            serialNumber: this.attr(null),
            accessToken: this.attr(null),
            status: this.attr(null)

        }
    }
}
