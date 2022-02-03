import {GET_WITH_TOKEN, POST_WITH_TOKEN} from "@/http-config";
import {PlaylistPayload} from "@/store/entities/Playlist/interfaces";
import Playlist from "@/store/entities/Playlist/index";

export default {
    // Создание плейлиста
    async createPlaylist(payload: PlaylistPayload) {
        const response = await POST_WITH_TOKEN('api/playlists', payload)
        if (response.success) {
            await Playlist.insert({data: response.playlist})
        }
    },
    // Получение списка плейлистов
    async getPlaylists() {
        const response = await GET_WITH_TOKEN('api/playlists')
        if (response.success) {
            await Playlist.create({ data: response.playlists })
        }
    }
}
