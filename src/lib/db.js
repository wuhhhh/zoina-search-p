import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";
import settings from "@/settings.js";

const adapter = new LocalStorage(
  `${settings.releases.name}-${settings.releases.version}`
);
const db = low(adapter);

db.defaults({
  sys: {},
  database: {}
}).write();

export default db;
