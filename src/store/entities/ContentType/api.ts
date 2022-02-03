import {GET_WITH_TOKEN} from "@/http-config";
import ContentType from "@/store/entities/ContentType/ContentType";

const cache = {
    contentTypes: false
}
export default {
    // Получение списка типов контента
    async getContentTypes() {
        console.log('sdfsdf')
        if (cache.contentTypes) {
            return
        }
        const response = await GET_WITH_TOKEN('api/content-types')
        if (response.success) {
            await ContentType.create({ data: response.contentTypes })
            cache.contentTypes = true
        }
    }
}
