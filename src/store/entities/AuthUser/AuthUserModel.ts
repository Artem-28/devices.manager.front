import {Model} from "@vuex-orm/core";

export default class AuthUserModel extends Model {
    static entity = 'authUser'

    static fields() {
        return {
            id: this.attr(null),
            email: this.attr(null),
            avatar: this.attr(null),
            birthday: this.attr(null),
            name: this.attr(null),
            surname: this.attr(null),
            patronymic: this.attr(null),
            phone: this.attr(null)

        }
    }
}
