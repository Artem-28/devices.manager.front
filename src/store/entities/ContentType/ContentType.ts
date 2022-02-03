import {Model} from "@vuex-orm/core";

export default class ContentType extends Model {
    static entity = 'contentModel'

    slug!: string;
    accept!: string;
    static fields() {
        return {
            id: this.attr(null),
            title: this.attr(null),
            description: this.attr(null),
            slug: this.attr(null),
            icon: this.attr(null),
            accept: this.attr(null),
        }
    }
    static beforeCreate(model: ContentType) {
        switch (model.slug) {
            case 'imageType':
                model.accept = 'image/*'
                break
            case 'videoType':
                model.accept = 'video/*'
        }
    }
}
