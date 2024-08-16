const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://alessandro:QKizXwltE1yQ5IVP@clusterpartytime.zrwgp.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPartyTime",
    );

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
