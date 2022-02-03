import {DELETE_WITH_TOKEN, GET_WITH_TOKEN, POST_WITH_TOKEN} from "@/http-config";
import {ControlDevicePayload} from "@/store/entities/ControlDevice/interfaces";
import ControlDevice from "@/store/entities/ControlDevice/index";

export default {
    // Получение списка устройств
    async getControlDevices() {
        const response = await GET_WITH_TOKEN('api/control-devices')
        if (response.success) {
            await ControlDevice.create({ data: response.controlDevices })
        }
    },
    // Добавление нового устройства
    async createControlDevice(payload: ControlDevicePayload) {
        const response = await POST_WITH_TOKEN('api/control-devices', {
            title: payload.title,
            serial_number: payload.serialNumber
        })
        if (response.success) {
            await ControlDevice.insert({ data: response.controlDevice })
        }
    },

    // Удаление устройства
    async deleteControlDevice(controlDeviceId: number) {
        return await DELETE_WITH_TOKEN(`api/control-devices/${controlDeviceId}`)
    }
}
