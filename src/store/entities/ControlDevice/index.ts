import ControlDeviceModel from "@/store/entities/ControlDevice/ControlDeviceModel";
import api from "@/store/entities/ControlDevice/api";

export default class ControlDevice extends ControlDeviceModel {
    // Удаление устройства
    async delete() {
        const response = await api.deleteControlDevice(this.id)
        if (response.success) {
            await this.$delete()
        }
    }
}
