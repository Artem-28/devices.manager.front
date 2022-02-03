import { createStore } from 'vuex'
import VuexORM from '@vuex-orm/core';

import notifyHandler from "@/store/modules/NotifyHandler";
import sideMenu from "@/store/modules/SideMenu";
import Playlist from "@/store/entities/Playlist";
import AuthUser from "@/store/entities/AuthUser";
import ControlDevice from "@/store/entities/ControlDevice";
import ContentType from "@/store/entities/ContentType/ContentType";

const database = new VuexORM.Database();
database.register(AuthUser)
database.register(ControlDevice)
database.register(Playlist)
database.register(ContentType)

export default createStore({
  plugins: [VuexORM.install(database)],
  modules: {
    notifyHandler,
    sideMenu
  }
})
